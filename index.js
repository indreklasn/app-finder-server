const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const { typeDefs, resolvers } = require('./schema');

const app = express()
const PORT = 4000;


const server = new ApolloServer({
  // These will be defined for both new or existing servers
  typeDefs,
  resolvers,
});


server.applyMiddleware({ app }); // app is from an existing express app

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)