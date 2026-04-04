import { createBdd } from "playwright-bdd";
import { expect } from "playwright/test";

const { Given, When, Then } = createBdd();

// --- GIVEN ------------------------------------------------------------------
Given("I am on the welcome page", async ({ page }) => {
    await page.goto(process.env.TAURI_URL || "http://127:1420");
});

// --- WHEN ------------------------------------------------------------------
When("I click on the button with id {string}", async ({ page }, buttonId: string) => {
    const button = page.getByTestId(buttonId);
    await expect(button).toBeVisible();
    await button.click();
});

// --- THEN ------------------------------------------------------------------
Then("I should see a modal form with id {string}", async ({ page }, modalId: string) => {
    const modal = page.locator('[role="dialog"], .modal, [data-testid="' + modalId + '"]').first();
    await expect(modal).toBeVisible();
});

Then("the modal should have a field with id {string}", async ({ page }, fieldId: string) => {
    const field = page.getByTestId(fieldId);
    await expect(field).toBeVisible();
});

Then("the modal should have a button with id {string}", async ({ page }, buttonId: string) => {
    const button = page.getByTestId(buttonId);
    await expect(button).toBeVisible();
});
