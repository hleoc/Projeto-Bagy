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
    produto(_obj, args) {
      return db.produtos.find((db) => db.id === args.id);
    },
    produtos: () => db.produtos,
  },
  Mutation: {
    criarProduto(_obj, { data }) {
      const { nome } = data;

      const produtoExistente = db.produtos.some((u) => u.nome === nome);

      if (produtoExistente) {
        throw new Error(`Produto Existente: ${data.nome}`);
      }

      const novoProduto = {
        ...data,
        id: geradorDeId(db.produtos),
      };
      db.produtos.push(novoProduto);

      return novoProduto;
    },
    atualizarProduto(_obj, { id, data }) {
      const produto = db.produtos.find((u) => u.id === id);
      const indice = db.produtos.findIndex((u) => u.id === id);

      const novoProduto = {
        ...produto,
        ...data,
      };
      db.produtos.splice(indice, 1, novoProduto);
      return novoProduto;
    },
    deletarProduto(_obj, { filtro: { id } }) {
      if (id) {
        const produtoEncontrado = db.produtos.find((u) => u.id === id);
        db.produtos = db.produtos.filter((u) => u.id !== id);

        return !!produtoEncontrado;
      }
    },
  },
};
