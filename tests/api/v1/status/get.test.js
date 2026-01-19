require('dotenv').config({ path: `${__dirname}/../../../../.env.development` })

test("GET to /api/v1/status return 200", async () => {
  /**
   * Teste para validar se o servidor está online através da validação do horário
   */

  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();
  const responseUpdateAt = responseBody.updated_at;
  const expectUpdatedAt = new Date(responseUpdateAt).toISOString();

  expect(response.status).toBe(200);
  expect(responseUpdateAt).toBeDefined();
  expect(responseUpdateAt).toEqual(expectUpdatedAt);

  /**
   * Teste para validar a quantidade máxima de conexões disponíveis para a base de dados
   */
  const responseDatabaseStatus = responseBody.database;
  
  expect(responseDatabaseStatus).toBeDefined();
  expect(typeof responseDatabaseStatus.max_connections).toBe("number");
  expect(responseDatabaseStatus.max_connections).toBe(
    parseInt(process.env.POSTGRES_DB_MAX_CONNECTIONS),
  );

  /**
   * Teste para validar a quantidade de conexões ativas a base de dados
   */
  expect(typeof responseDatabaseStatus.active_connections).toBe("number");
  expect(responseDatabaseStatus.active_connections).toBe(1);

  /**
   * Teste para validar a versão do Postgres
   */
  expect(typeof responseDatabaseStatus.postgres_version).toBe("string");
  expect(responseDatabaseStatus.postgres_version).toBe(
    process.env.POSTGRES_VERSION,
  );
});
