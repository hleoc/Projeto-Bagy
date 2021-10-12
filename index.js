const { ApolloServer } = require("apollo-server");
const { typeDefs, resolvers } = require("./src/graphql");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: (err) => {
    if (
      err.message.startsWith("Cliente Existente:") ||
      err.message.startsWith("Produto Existente:") ||
      err.message.startsWith("Produto esgotado ou não existe no estoque") ||
      err.message.startsWith("Cliente Inexistente:")
    ) {
      return new Error(err.message);
    }
    return err;
  },
});

server.listen().then(({ url }) => console.log(url));
