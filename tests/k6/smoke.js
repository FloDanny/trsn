import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 1,
  duration: "30s",
  thresholds: {
    // Assertions: treat checks as test expectations.
    checks: ["rate==1.0"],
    // Allow the intentional 404 to count as a failure while keeping the test meaningful.
    http_req_failed: ["rate<0.6"],
    http_req_duration: ["p(95)<500"],
  },
};

export default function smokeTest() {
  const baseUrl = __ENV.BASE_URL || "http://localhost:3000";

  // Positive check: homepage should respond with 200.
  const homeResponse = http.get(`${baseUrl}/`);
  check(homeResponse, {
    "home returns 200": (response) => response.status === 200,
  });

  // Negative check: a non-existent route should respond with 404.
  const missingResponse = http.get(`${baseUrl}/does-not-exist`);
  check(missingResponse, {
    "missing route returns 404": (response) => response.status === 404,
  });

  sleep(1);
}
