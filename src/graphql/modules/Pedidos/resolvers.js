const db = require("../../../db");

module.exports = {
  Query: {
    pedido(_obj, args) {
      return db("pedidos").find((db) => db.id === args.id);
    },
    pedidos: async () => await db("pedidos"),
  },
  Mutation: {
    criarPedido: async (_obj, { dataPedido, parcelas, status }) => {        
      await (await db('pedidos')
      .insert({ dataPedido, parcelas, status })
      .returning('*'))[0]
    },
    atualizarPedido: async (_obj, { id, dataPedido, parcelas, status }) => {
      await (await db('pedidos')
      .where({ id })
      .update({ dataPedido, parcelas, status })
      .returning('*'))[0]
    },
    deletarPedido: async (_obj, { filtro }) => {
      if (filtro.id) {
        return await db('pedidos').where({ id: filtro.id }).delete();
      }

      throw new Error('Favor passar um parâmetro');
    },
  },
};
