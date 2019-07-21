import products from './products'
import getProductById from './getProductById'
import addProduct from './addProduct'
import removeProduct from './removeProduct'
import searchProduct from './searchProduct'
import { createUser, fetchUser, fetchAllUsers } from './user'


// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    products,
    getProductById,
    fetchAllUsers,
    searchProduct,
    fetchUser
  },
  Mutation: {
    addProduct,
    removeProduct,
    createUser
  }
};

export default resolvers
