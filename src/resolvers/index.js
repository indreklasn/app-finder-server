import { products, getProductById, createProduct, removeProduct, searchProduct, updateProduct } from './product'
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
    updateProduct,
    createUser
  }
};

export default resolvers
