const { query } = require("../../../../infra/database");

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const client = await query({
    text: `
    SELECT
  COALESCE((
    SELECT
      setting::int
    FROM
      pg_settings
    WHERE
      name = 'max_connections'
  ), 0) AS max_connections,
  COALESCE((
    SELECT
      COUNT(*)::int
    FROM
      pg_stat_activity
    WHERE 
      datname = $1
  ), 0) AS active_connections,
  current_setting('server_version') AS postgres_version;
  `,
    values: [process.env.POSTGRES_DB],
  });

  response.status(200).json({
    updated_at: updatedAt,
    database: client.rows[0],
  });
}

export default status;
