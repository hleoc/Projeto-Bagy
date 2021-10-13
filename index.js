const { ApolloServer } = require("apollo-server");
const { typeDefs, resolvers } = require("./src/graphql");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: (err) => {
    if (
      err.message.startsWith("Favor passar um parâmetro")
    ) {
      return new Error(err.message);
    }
    return err;
  },
});

server.listen().then(({ url }) => console.log(url));
