const products = [
  {
    id: "1",
    name: 'hello product',
    url: "www",
    tags: ['sales']
  }
]


// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    products: () => products,
    getProductById: (parent, args) => products.filter(product => product.id === args.id)
  },
};

export default resolvers
