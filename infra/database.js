const { Client } = require("pg")
require('dotenv').config({ path: `${__dirname}/../.env.development` });

async function query(queryObject) {
  try {
    const client = new Client({
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      port: process.env.POSTGRES_PORT,
      database: process.env.POSTGRES_DB,
    });
    await client.connect();
    const result = await client.query(queryObject);
    await client.end();
    return result;
  } catch (error) {
    console.error(error);
  }
}

module.exports = { query }
