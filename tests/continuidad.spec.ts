import { test, expect } from "@playwright/test";

test.use({ baseURL: "http://127.0.0.1:3000", screenshot: "only-on-failure", trace: "retain-on-failure" });

for (const width of [360, 390, 1440]) {
  test(`reto → etapa libre → solicitud editable, ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/como-lo-hacemos#tu-reto");
    const picker = page.getByRole("group", { name: "¿Qué quieres resolver hoy?" });
    await picker.getByRole("button", { name: /Sostener mis acciones/ }).click();
    await expect(page.getByRole("tab", { name: /Adaptar/ })).toHaveAttribute("aria-selected", "true");
    await expect(page.getByRole("radio", { name: /Trabajar sobre mi reto actual/ })).toBeChecked();
    await page.getByRole("button", { name: /Me atoré/ }).click();
    await expect(page.locator(".jr-reflection")).toContainText("tiempo, claridad, una habilidad o apoyo");
    // The suggestion never locks the visitor into a stage. Keyboard still explores freely.
    const stage = page.getByRole("tab", { name: /Adaptar/ });
    await stage.focus();
    await stage.press("ArrowRight");
    await expect(page.getByRole("tab", { name: /Crecer/ })).toHaveAttribute("aria-selected", "true");
    await page.getByRole("link", { name: "Conocer mis opciones de ingreso" }).click();
    await expect(page).toHaveURL(/emprende-diario\?etapa=aire&reto=sostener#ingreso/);
    const preview = page.getByRole("blockquote", { name: "Vista previa de tu mensaje" });
    await expect(preview).toContainText("Sostener mis acciones");
    await expect(preview).toContainText("Crecer");
    const request = page.getByRole("link", { name: "Abrir solicitud en WhatsApp" });
    let target = new URL((await request.getAttribute("href"))!);
    expect(target.hostname).toBe("wa.me");
    expect(target.searchParams.get("text")).toContain("Sostener mis acciones");
    await page.getByRole("checkbox", { name: /Incluir mi selección/ }).uncheck();
    target = new URL((await request.getAttribute("href"))!);
    expect(target.searchParams.get("text")).not.toContain("Sostener mis acciones");
    expect(target.searchParams.get("text")).not.toContain("Crecer");
    await expect(preview).not.toContainText("Sostener mis acciones");
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.getByText("¿Y si todavía no quiero solicitar ingreso?", { exact: true }).click();
    await expect(page.locator(".entry-faq").getByRole("link", { name: /Recibir Lunes/ })).toHaveAttribute("href", "https://uhub.kit.com/b3786d63e8");
    // Do not open WhatsApp or send a test message.
  });
}

test("Brújula conserva orientación y apoyo sin transportar respuestas o puntuaciones", async ({ page }) => {
  await page.goto("/brujula");
  const values = [4, 4, 1, 1, 3, 3, 5, 5];
  for (let i = 0; i < values.length; i++) await page.locator(".br-question").nth(i).getByRole("button", { name: new RegExp("^" + values[i] + " de 5:") }).click();
  await page.getByRole("button", { name: /Ver mi brújula/ }).click();
  await page.getByText("¿Por qué aparece esta área?", { exact: true }).click();
  await expect(page.locator(".br-explanation")).toContainText("la puntuación más baja");
  await expect(page.locator(".br-explanation li")).toHaveCount(2);
  await page.getByRole("button", { name: "Revisarlo con alguien", exact: true }).click();
  await expect(page.locator(".br-insight h3")).toContainText("Tierra");
  const next = page.getByRole("link", { name: "Explorar mi siguiente paso" });
  expect(await next.getAttribute("href")).toBe("/como-lo-hacemos?etapa=tierra&apoyo=apoyo&contexto=idea&origen=brujula#etapas");
  await next.click();
  await expect(page.getByRole("tab", { name: /Aterrizar/ })).toHaveAttribute("aria-selected", "true");
  await expect(page.locator(".jr-starting-point")).toContainText("Revisarlo con alguien");
  await page.getByRole("link", { name: "Conocer mis opciones de ingreso" }).click();
  await expect(page.locator(".entry-message")).toContainText("Revisarlo con alguien");
  await expect(page.locator(".entry-message")).not.toContainText("1 / 5");
});

test("parámetros ajenos se ignoran y no llegan al mensaje", async ({ page }) => {
  await page.goto("/emprende-diario?etapa=desconocida&reto=otro&apoyo=externo&email=no-compartir&text=NO-TRANSMITIR#ingreso");
  await expect(page.getByRole("checkbox", { name: /Incluir mi selección/ })).toHaveCount(0);
  const href = await page.getByRole("link", { name: "Abrir solicitud en WhatsApp" }).getAttribute("href");
  expect(href).not.toContain("NO-TRANSMITIR");
  expect(href).not.toContain("no-compartir");
  await expect(page.locator(".entry-message")).not.toContainText("desconocida");
});
