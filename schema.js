import { makeExecutableSchema } from 'apollo-server-express';
import resolvers from './src/resolvers'
import 'graphql-import-node';
import typeDefs from './src/types/types.graphql';

const Schema = makeExecutableSchema({ typeDefs, resolvers })

export default Schema;