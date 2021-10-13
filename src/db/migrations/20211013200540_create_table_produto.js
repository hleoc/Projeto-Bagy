exports.up = function (knex) {
  return knex.schema.createTable("produtos", (table) => {
    table.increments("id").primary();
    table.string("nome").notNull();
    table.string("urlImagem").notNull();
    table.string("descricao").notNull();
    table.string("peso").notNull();
    table.string("preco").notNull();
    table.integer("quantidadeEstoque").notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("produtos");
};
