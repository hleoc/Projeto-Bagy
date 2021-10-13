const db = require("../../../db");

module.exports = {
  Query: {
    cliente(_obj, args) {
      return db("clientes").find((db) => db.id === args.id);
    },
    clientes: async () => await db("clientes"),
  },
  Mutation: {
    criarCliente: async (_obj, { nome, email, cpf, dataNasc, rua, numero, bairro, cidade, estado, pais, cep }) => {        
      await (await db('clientes')
      .insert({ nome, email, cpf, dataNasc, rua, numero, bairro, cidade, estado, pais, cep })
      .returning('*'))[0]
    },
    atualizarCliente: async (_obj, { id, nome, email, cpf, dataNasc, rua, bairro, cidade, estado, pais, cep, numero }) => {
      await (await db('clientes')
      .where({ id })
      .update({ nome, email, cpf, dataNasc, rua, numero, bairro, cidade, estado, pais, cep })
      .returning('*'))[0]
    },
    deletarCliente: async (_obj, { filtro }) => {
      if (filtro.id) {
        return await db('clientes').where({ id: filtro.id }).delete();
      }
      if (filtro.email) {
        return await db('clientes').where({ email: filtro.email }).delete();
      }

      throw new Error('Favor passar um parâmetro');
    },
  },
};
