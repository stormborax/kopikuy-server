const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const typeDefs = require("./graphql/typeDefs.tsx");
const resolvers = require("./graphql/resolvers/index.tsx");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({ port: 5000 }).then((res) => {
  console.log(`Server is running at ${res.url}`);
});
