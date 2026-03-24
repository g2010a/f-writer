import { createBdd } from 'playwright-bdd';
import { expect } from 'playwright/test';

const { Given, When, Then } = createBdd();

// For i18n, we map button names from the feature file to fixed IDs
const buttonTestIdMap: Record<string, string> = {
    'New Story': 'new-story-button',
    'Create Story': 'create-story-button',
    'Cancel': 'cancel-button',
};


// --- GIVEN ------------------------------------------------------------------
Given('I am on the welcome page', async ({ page }) => {
    await page.goto(process.env.TAURI_URL || 'http://127:1420')
})


// --- WHEN ------------------------------------------------------------------
When('I click on the {string} button', async ({ page }, buttonText: string) => {
    const testId = buttonTestIdMap[buttonText] || buttonText.toLowerCase().replace(/\s+/g, '-');
    const button = page.getByTestId(testId);
    await expect(button).toBeVisible();
    await button.click();
});


// --- THEN ------------------------------------------------------------------
Then("I should see a modal form", async ({ page }) => {
    const modal = page.locator('[role="dialog"], .modal, [data-testid="new-story-modal"]').first();
    await expect(modal).toBeVisible();
});

Then('the modal should have a field labeled {string}', async ({ page }, labelText: string) => {
    const testIdMap: Record<string, string> = {
        'Story title': 'story-title-input',
        'Brief description (optional)': 'brief-description-input',
    };
    const testId = testIdMap[labelText] || labelText.toLowerCase().replace(/\s+/g, '-');
    const field = page.getByTestId(testId);
    await expect(field).toBeVisible();
});

Then('the modal should have a button labeled {string}', async ({ page }, buttonText: string) => {
    const testId = buttonTestIdMap[buttonText] || buttonText.toLowerCase().replace(/\s+/g, '-');
    const button = page.getByTestId(testId);
    await expect(button).toBeVisible();
});
