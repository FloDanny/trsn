import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["tests/setup/vitest.setup.ts"],
    include: ["tests/vitest/**/*.test.{ts,tsx}"],
    reporters: ["default"],
    coverage: {
      provider: "v8",
      reportsDirectory: "reports/vitest/coverage",
      reporter: ["text", "html", "json-summary"],
      include: ["lib/**/*.{ts,tsx}"],
      exclude: ["**/*.d.ts"],
    },
  },
});
