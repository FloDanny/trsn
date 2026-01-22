module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/tests/setup/jest.setup.ts"],
  testMatch: ["<rootDir>/tests/jest/**/*.test.(ts|tsx)"],
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "tsconfig.json" }],
  },
  reporters: [
    "default",
    [
      "jest-html-reporter",
      {
        pageTitle: "TRSN Jest Report",
        outputPath: "reports/jest/report.html",
      },
    ],
  ],
  collectCoverage: true,
  collectCoverageFrom: ["lib/**/*.{ts,tsx}"],
  coverageDirectory: "reports/jest/coverage",
  coverageReporters: ["html", "text", "json-summary"],
};
