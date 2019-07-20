import products from './products'
import getProductById from './getProductById'
import addProduct from './addProduct'


// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    products,
    getProductById
  },
  Mutation: {
    addProduct
  }
};

export default resolvers
