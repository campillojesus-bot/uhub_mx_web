import { test, expect } from "@playwright/test";

test.use({ baseURL: "http://127.0.0.1:3000" });

const cases = [
  { name: "idea en móvil 360", context: "idea", width: 360, values: [5,5,2,2,1,1,4,4], priority: "Agua" },
  { name: "ventas en móvil 390", context: "ventas", width: 390, values: [2,2,5,5,4,4,1,1], priority: "Aire" },
  { name: "idea en escritorio", context: "idea", width: 1440, values: [1,1,4,4,5,5,3,3], priority: "Fuego" },
  { name: "ventas en escritorio", context: "ventas", width: 1440, values: [5,5,1,1,4,4,3,3], priority: "Tierra" },
] as const;

async function answerAll(page: import("@playwright/test").Page, values: readonly number[]) {
  for (let i = 0; i < values.length; i++) {
    await page.locator(".br-question").nth(i).getByRole("button", { name: new RegExp("^" + values[i] + " de 5:") }).click();
  }
}

for (const scenario of cases) {
  test(scenario.name, async ({page, context}) => {
    await page.setViewportSize({width:scenario.width,height:900});
    await context.grantPermissions(["clipboard-read","clipboard-write"]);
    await page.goto("/brujula");
    await expect(page.getByRole("heading", {name:/Tu camino cambia/i})).toBeVisible();
    await expect(page.locator(".br-question")).toHaveCount(8);
    const resultsButton = page.getByRole("button", {name:/Ver mi brújula/});
    await expect(resultsButton).toBeDisabled();
    if (scenario.context === "ventas") {
      await page.getByRole("button", {name:/Ya tengo clientes/}).click();
      await expect(page.locator(".br-question").first()).toContainText("mi proyecto");
    }
    await answerAll(page, scenario.values);
    await expect(resultsButton).toBeEnabled();
    await resultsButton.click();
    await expect(page.locator(".br-insight h3")).toContainText(scenario.priority);
    await expect(page.locator(".br-action-plan li")).toHaveCount(3);
    await expect(page.locator(".br-radar svg")).toBeVisible();
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await page.getByRole("button", {name:/Copiar diagnóstico y acciones/}).click();
    await expect(page.getByRole("status")).toContainText("Se copiaron");
    const copied = await page.evaluate(() => navigator.clipboard.readText());
    expect(copied).toContain("BRÚJULA EMPRENDEDORA · uHüb");
    expect(copied).toContain("Prioridad orientativa: " + scenario.priority);
    expect(copied).toContain("3. ");
    await page.getByRole("button",{name:"Modificar respuestas"}).click();
    await expect(page.locator(".br-question")).toHaveCount(8);
    await expect(page.locator(".br-progress")).toContainText("8");
    await expect(resultsButton).toBeEnabled();
    // Changing a single answer does not erase the other seven.
    await page.locator(".br-question").first().getByRole("button",{name:/^4 de 5:/}).click();
    await expect(page.locator(".br-progress")).toContainText("8");
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });
}

test("empate: el usuario elige el área y el plan/copiar reflejan la selección", async ({page,context}) => {
  await context.grantPermissions(["clipboard-read","clipboard-write"]);
  await page.goto("/brujula");
  await answerAll(page,[1,1,1,1,4,4,5,5]);
  await page.getByRole("button",{name:/Ver mi brújula/}).click();
  await expect(page.locator(".br-ties")).toContainText("2 áreas");
  await expect(page.locator(".br-insight h3")).toContainText("Fuego");
  await page.getByRole("group",{name:"Elegir área empatada"}).getByRole("button",{name:"Tierra"}).click();
  await expect(page.locator(".br-insight h3")).toContainText("Tierra");
  await expect(page.locator(".br-action-plan")).toContainText("Anota dos habilidades");
  await page.getByRole("button",{name:/Copiar diagnóstico y acciones/}).click();
  const copied = await page.evaluate(() => navigator.clipboard.readText());
  expect(copied).toContain("Prioridad orientativa: Tierra");
  expect(copied).toContain("Prioridades empatadas: Fuego, Tierra");
  await page.getByRole("button",{name:"Modificar respuestas"}).click();
  await page.locator(".br-question").nth(2).getByRole("button",{name:/^3 de 5:/}).click();
  await page.getByRole("button",{name:/Ver mi brújula/}).click();
  await expect(page.locator(".br-ties")).toHaveCount(0);
  await expect(page.locator(".br-insight h3")).toContainText("Fuego");
});

test("movimiento reducido al avanzar y regresar; cambiar situación limpia respuestas",async({page})=>{
  await page.emulateMedia({reducedMotion:"reduce"});
  await page.goto("/brujula");
  await page.evaluate(()=>{
    window.scrollTo = (options: ScrollToOptions | number) => {
      document.documentElement.setAttribute("data-scroll-behavior",typeof options==="number"?"numeric":options.behavior??"none");
    };
  });
  await answerAll(page,[3,3,3,3,3,3,3,3]);
  await page.getByRole("button",{name:/Ver mi brújula/}).click();
  await expect(page.locator("html")).toHaveAttribute("data-scroll-behavior","auto");
  await expect(page.locator(".br-ties")).toContainText("4 áreas");
  await page.getByRole("button",{name:"Modificar respuestas"}).click();
  await expect(page.locator("html")).toHaveAttribute("data-scroll-behavior","auto");
  await page.getByRole("button",{name:/Ya tengo clientes/}).click();
  await expect(page.locator(".br-progress")).toContainText("0");
  await expect(page.getByRole("button",{name:/Ver mi brújula/})).toBeDisabled();
});
