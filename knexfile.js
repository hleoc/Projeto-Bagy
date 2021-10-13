module.exports = {
  client: "sqlite3",
  connection: {
    filename: "./data.db",
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./src/db/migrations",
  },
};
