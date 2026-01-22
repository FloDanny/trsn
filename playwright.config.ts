import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "tests/playwright",
  reporter: [["html", { outputFolder: "reports/playwright", open: "never" }]],
  projects: [
    {
      name: "e2e",
      testMatch: "e2e/**/*.spec.ts",
    },
    {
      name: "regression",
      testMatch: "regression/**/*.spec.ts",
    },
  ],
  use: {
    baseURL: "http://localhost:3000",
  },
  webServer: {
    command: "npm run dev",
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },
});
