import { ApolloServer } from 'apollo-server-express';
import express from 'express';
// import { initDB } from './src/config'
import Schema from './schema'
import { prisma } from './prisma/generated/prisma-client'

import dotenv from 'dotenv';

dotenv.config()

// initDB()
const app = express()
const PORT = 4000;


const server = new ApolloServer({
  schema: Schema,
  playground: true,
  context: {
    prisma
  }
});


server.applyMiddleware({ app }); // app is from an existing express app

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)