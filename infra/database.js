const { Client } = require("pg");

async function query(queryObject) {
  try {
    const client = new Client({
      host: "localhost",
      user: "postgres",
      password: "local_password",
      port: 5432,
      database: "postgres",
    });
    await client.connect();
    const result = await client.query(queryObject);
    await client.end();
    return result;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { query };
