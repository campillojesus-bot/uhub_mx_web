import { test, expect } from "@playwright/test";

test.use({ baseURL: "http://127.0.0.1:3000", screenshot: "only-on-failure", trace: "retain-on-failure" });

for (const width of [360, 390, 1440]) {
  test(`portada orienta y conserva accesos reales, ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Nadie emprende solo.");
    const doors = page.getByRole("navigation", { name: "¿Qué te trae aquí?" }).getByRole("link");
    await expect(doors).toHaveCount(4);
    const destinations = ["/emprende-diario", "/organizaciones", "/universidades", "/organizaciones/osc"];
    for (let i = 0; i < destinations.length; i++) {
      await expect(doors.nth(i)).toHaveAttribute("href", destinations[i]);
      expect((await page.request.get(destinations[i])).status()).toBe(200);
    }
    await expect(page.locator("main a[href='/brujula']")).toHaveCount(0);
    await expect(page.getByRole("tablist", { name: "Explorar las etapas del ciclo" }).getByRole("tab")).toHaveCount(4);
    await expect(page.locator(".home-cycle-explorer")).toContainText("Volver no es retroceder.");
    await expect(page.locator("main")).not.toContainText(/Consolidar|PENDIENTE|por integrar|No vendemos contenido/);
    await expect(page.locator(".root-newsletter-capture a")).toHaveAttribute("href", "https://uhub.kit.com/b3786d63e8");
    await expect(page.locator(".hub-test a")).toHaveAttribute("href", "/test");
    // Legacy hashes still resolve after moving the sections.
    for (const anchor of ["modelo", "como-lo-hacemos", "ciclo", "para-quien", "historias", "resultado", "mentores", "caminos", "lunes"])
      await expect(page.locator(`[id='${anchor}']`)).toHaveCount(1);
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    const headingsFit = await page.locator("main h1, main h2, main h3").evaluateAll(nodes => nodes.every(node => node.scrollWidth <= node.clientWidth + 1));
    expect(headingsFit).toBe(true);
    await doors.first().focus();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/\/emprende-diario$/);
    await expect(page.getByRole("link", { name: "Explorar mi Brújula Emprendedora" })).toHaveAttribute("href", "/brujula");
  });
}

test("el modelo trasladado conserva pestañas y el recorrido", async ({ page }) => {
  await page.goto("/como-lo-hacemos#ecosistema");
  await page.getByText("Explora la persona y su ecosistema", { exact: false }).first().click();
  const tabs = page.getByRole("tablist", { name: "Capas del Modelo uHüb" });
  const ecosystem = tabs.getByRole("tab", { name: /Tu ecosistema/ });
  await ecosystem.click();
  await expect(ecosystem).toHaveAttribute("aria-selected", "true");
  await ecosystem.press("ArrowDown");
  await expect(tabs.getByRole("tab", { name: /Quienes necesitan/ })).toHaveAttribute("aria-selected", "true");
  await expect(page.locator("#model-panel-2")).toBeVisible();
  await expect(page.locator("#model-panel-1")).toBeHidden();
  await expect(page.getByRole("group", { name: "¿Qué quieres resolver hoy?" })).toBeVisible();
});

for (const width of [360, 390, 1440]) {
  test(`el ciclo explica la práctica por contexto y conserva la etapa, ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/#ciclo");
    const tabs = page.getByRole("tablist", { name: "Explorar las etapas del ciclo" });
    const first = tabs.getByRole("tab", { name: "Explorar la etapa Descubrir", exact: true });
    await first.focus();
    await page.keyboard.press("ArrowRight");
    await expect(tabs.getByRole("tab", { name: "Explorar la etapa Aterrizar" })).toBeFocused();
    await expect(page.locator("#home-cycle-panel-1")).toBeVisible();
    await expect(page.locator("#home-cycle-panel-0")).toBeHidden();
    await page.getByLabel("Ver un ejemplo para").selectOption("2");
    await expect(page.locator(".home-cycle-example")).toContainText("El docente acompaña");
    await tabs.getByRole("tab", { name: "Explorar la etapa Adaptar" }).click();
    await expect(page.locator(".home-cycle-example")).toContainText("El grupo compara");
    await page.getByLabel("Ver un ejemplo para").selectOption("3");
    await expect(page.locator(".home-cycle-example")).toContainText("carpeta de accionables");
    await expect(page.locator(".hub-metrics")).toContainText("+1,300");
    await expect(page.locator(".hub-metrics")).toContainText("953");
    await expect(page.locator(".hub-metrics")).not.toContainText(/600|2,000|97%/);
    await expect(page.locator(".hub-story")).toContainText("Cynthia Piñón");
    const photo = page.locator(".hub-story img");
    await photo.scrollIntoViewIfNeeded();
    await expect.poll(() => photo.evaluate(img => (img as HTMLImageElement).complete && (img as HTMLImageElement).naturalWidth > 0)).toBe(true);
    await expect(page.locator(".uhub-header-cta")).toBeVisible();
    await expect(page.locator(".uhub-header-cta")).toHaveAttribute("href", /wa\.me\/526142346499/);
    await expect(page.locator("#red-mentores")).toContainText("mentores activos en uHüb A.C.");
    await page.locator("#red-mentores summary").click();
    await expect(page.locator("#red-mentores dl")).toContainText("Mentores base5");
    await expect(page.locator("#red-mentores dl")).toContainText("Mentores especializados8");
    await expect(page.locator("#red-mentores")).toContainText("octubre de 2026");
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.getByRole("link", { name: "Explorar esta etapa en el recorrido" }).click();
    await expect(page).toHaveURL(/etapa=agua#etapas$/);
    await expect(page.getByRole("tab", { name: /Adaptar/ }).first()).toHaveAttribute("aria-selected", "true");
  });
}


test("la membresía informa el mes y solicita ingreso sin cobrar", async ({ page }) => {
  await page.goto("/emprende-diario");
  await expect(page.locator(".membership-price")).toContainText("$399 MXN/mes");
  await expect(page.locator(".membership-month-weeks li")).toHaveCount(4);
  await expect(page.locator(".membership-month")).toContainText("sin permanencia · cancelas cuando quieras");
  await expect(page.locator(".membership-month")).toContainText("No necesitas haber pasado por uHüb A.C. para entrar.");
  await expect(page.locator("main")).not.toContainText(/Ritmo|Momentum|24 horas/);
  await expect(page.locator('main a[href*="stripe.com"]')).toHaveCount(0);
  const request = page.getByRole("link", { name: "Abrir solicitud en WhatsApp" });
  const url = new URL((await request.getAttribute("href"))!);
  expect(url.hostname).toBe("wa.me");
  expect(url.searchParams.get("text")).toContain("solicitar mi ingreso a Emprende Diario");
});

test("el conteo termina en la cifra publicada y no genera crecimiento ficticio", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/#red-mentores");
  const total = page.locator(".network-total strong [aria-hidden='true']");
  await total.scrollIntoViewIfNeeded();
  await expect(total).toHaveText("13");
  await page.locator("#red-mentores summary").click();
  await expect(total).toHaveText("13");
  await expect(page.locator(".network-total .uh-visually-hidden")).toHaveText("13");
});
