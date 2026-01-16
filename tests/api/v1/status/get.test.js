const database = require('../../../../infra/database');

test("GET to /api/v1/status return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});

test("Database connection must be online", async () => {
  const resultExpect = 4;
  const result = await database.query("SELECT 2 + 2 as sum;")
  expect(result.rows[0].sum).toBe(resultExpect);
})
