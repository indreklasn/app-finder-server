import { makeExecutableSchema } from 'apollo-server-express';
import resolvers from './src/resolvers'
import 'graphql-import-node';
import typeDefs from './schema.graphql';

const Schema = makeExecutableSchema({ typeDefs, resolvers })

export default Schema;