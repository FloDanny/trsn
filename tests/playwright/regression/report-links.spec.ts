import { expect, test } from "@playwright/test";

test("k6 dashboard HTML is available from the public reports path", async ({
  request,
}) => {
  const response = await request.get("/reports/k6/web-dashboard.html");

  expect(response.ok()).toBeTruthy();
  expect(await response.text()).toContain("k6");
});
