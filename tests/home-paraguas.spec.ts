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
    await expect(page.locator(".hub-cycle").getByRole("button")).toHaveCount(0);
    await expect(page.locator(".hub-cycle")).toContainText("Volver no es retroceder.");
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
