import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import Schema from './schema'

const app = express()
const PORT = 4000;


const server = new ApolloServer({
  schema: Schema,
  playground: true,
});


server.applyMiddleware({ app }); // app is from an existing express app

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)