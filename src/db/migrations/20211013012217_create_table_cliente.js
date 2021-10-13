exports.up = function (knex) {
  return knex.schema.createTable("clientes", (table) => {
    table.increments("id").primary();
    table.string("nome").notNull();
    table.string("email").notNull().unique();
    table.string("cpf").notNull();
    table.string("dataNasc").notNull();
    table.string("rua").notNull();
    table.integer("numero").notNull();
    table.string("bairro").notNull();
    table.string("cidade").notNull();
    table.string("estado").notNull();
    table.string("pais").notNull();
    table.string("cep").notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("clientes");
};
