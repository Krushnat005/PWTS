import { test, expect } from "@playwright/test";

test.only("Iframe handle", async ({ page }) => {
  await page.goto("https://letcode.in/frame");

  const frame1 = page.frameLocator("#firstFr");

  const nameTextbox = frame1.getByRole("textbox", { name: "Enter name" });

  await nameTextbox.fill("playwrighttest");

  const enteredName = await nameTextbox.inputValue();

  await expect(enteredName).toBe("playwrighttest");
});
