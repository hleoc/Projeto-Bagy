exports.up = function (knex) {
  return knex.schema.createTable("pedidos", (table) => {
    table.increments("id").primary();
    table.foreign("id").references("id_produto").inTable("produtos");
    table.string("dataPedido").notNull();
    table.integer("parcelas").notNull();
    table.foreign("id").references("id_comprador").inTable("clientes");
    table.string("status").notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("pedidos");
};
