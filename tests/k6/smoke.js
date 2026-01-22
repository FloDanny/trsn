import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 1,
  duration: "5s",
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
