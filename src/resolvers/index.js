import { products, getProductById, createProduct, removeProduct, searchProduct } from './product'
import { createUser, fetchUser, fetchAllUsers } from './user'

const resolvers = {
  Query: {
    products,
    getProductById,
    fetchAllUsers,
    searchProduct,
    fetchUser
  },
  Mutation: {
    createProduct,
    removeProduct,
    createUser
  }
};

export default resolvers
