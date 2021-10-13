const db = require("../../../db");

module.exports = {
  Query: {
    produto(_obj, args) {
      return db("produtos").find((db) => db.id === args.id);
    },
    produtos: async () => await db("produtos"),
  },
  Mutation: {
    criarProduto: async (_obj, { nome, urlImagem, descricao, peso, preco, quantidadeEstoque }) => {        
      await (await db('produtos')
      .insert({ nome, urlImagem, descricao, peso, preco, quantidadeEstoque })
      .returning('*'))[0]
    },
    atualizarProduto: async (_obj, { id, nome, urlImagem, descricao, peso, preco, quantidadeEstoque }) => {
      await (await db('produtos')
      .where({ id })
      .update({ nome, urlImagem, descricao, peso, preco, quantidadeEstoque })
      .returning('*'))[0]
    },
    deletarProduto: async (_obj, { filtro }) => {
      if (filtro.id) {
        return await db('produtos').where({ id: filtro.id }).delete();
      }

      throw new Error('Favor passar um parâmetro');
    },
  },
};
