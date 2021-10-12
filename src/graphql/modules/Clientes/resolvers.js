const db = require("../../../db");

function geradorDeId(lista) {
  let novoId;
  let ultimo = lista[lista.length - 1];
  if (!ultimo) {
    novoId = 0;
  } else {
    novoId = ultimo.id;
  }

  return ++novoId;
}

module.exports = {
  Query: {
    cliente(_obj, args) {
      return db.clientes.find((db) => db.id === args.id);
    },
    clientes: () => db.clientes,
  },
  Mutation: {
    criarCliente(_obj, { data, rua, bairro, cidade, estado, pais, cep, numero }) {
      const { email } = data;

      const clienteExistente = db.clientes.some((u) => u.email === email);

      if (clienteExistente) {
        throw new Error(`Cliente Existente: ${data.nome}`);
      }

      const novoCliente = {
        ...data, 
        endereco: {rua, bairro, cidade, estado, pais, cep, numero},
        id: geradorDeId(db.clientes),
      };
      db.clientes.push(novoCliente);

      return novoCliente;
    },
    atualizarCliente(_obj, { id, data, rua, bairro, cidade, estado, pais, cep, numero }) {
      const cliente = db.clientes.find((u) => u.id === id);
      const indice = db.clientes.findIndex((u) => u.id === id);

      const novoCliente = {
        ...cliente,
        ...data,
        endereco: {rua, bairro, cidade, estado, pais, cep, numero},
      };
      db.clientes.splice(indice, 1, novoCliente);
      return novoCliente;
    },
    deletarCliente(_obj, { filtro: { id, email } }) {
      if (id) {
        const clienteEncontrado = db.clientes.find((u) => u.id === id);
        db.clientes = db.clientes.filter((u) => u.id !== id);

        return !!clienteEncontrado;
      } else {
        const clienteEncontrado = db.clientes.find((u) => u.email === email);
        db.clientes = db.clientes.filter((u) => u.email !== email);

        return !!clienteEncontrado;
      }
    },
  },
};
