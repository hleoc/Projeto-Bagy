const db = require("../../../db");

function geradorDeId(lista) {
  let novoId;
  let ultimo = lista[lista.length - 1];
  if (!ultimo) {
    novoId = 0;
  } else {
    novoId = ultimo.id;
  }

  return novoId++;
}

module.exports = {
  Query: {
    pedido(_obj, args) {
      return db.pedidos.find((db) => db.id === args.id);
    },
    pedidos: () => db.pedidos,
  },
  Mutation: {
    criarPedido(_obj, { data }) {
      const novoPedido = {
        ...data,
        id: geradorDeId(db.pedidos),
      };
      db.pedidos.push(novoPedido);

      return novoPedido;
    },
    atualizarPedido(_obj, { id, data }) {
      const pedido = db.pedidos.find((u) => u.id === id);
      const indice = db.pedidos.findIndex((u) => u.id === id);

      const novoPedido = {
        ...pedido,
        ...data,
      };
      db.pedidos.splice(indice, 1, novoPedido);
      return novoPedido;
    },
    deletarPedido(_obj, { filtro: { id, email } }) {
      if (id) {
        const pedidoEncontrado = db.pedidos.find((u) => u.id === id);
        db.pedidos = db.pedidos.filter((u) => u.id !== id);

        return !!pedidoEncontrado;
      } else {
        const pedidoEncontrado = db.pedidos.find((u) => u.email === email);
        db.pedidos = db.pedidos.filter((u) => u.email !== email);

        return !!pedidoEncontrado;
      }
    },
  },
};
