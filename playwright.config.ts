import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  paths: ['tests/features/**/*.feature'],
  require: ['tests/step-definitions/**/*.ts'],
});

export default defineConfig({
  testDir,
  globalSetup: './tests/global-setup.ts',
  globalTeardown: './tests/global-teardown.ts',
  use: {
    headless: true,
    viewport: { width: 1280, height: 800 },
    baseURL: process.env.TAURI_URL || 'http://127.0.0.1:1420',
  },
});
