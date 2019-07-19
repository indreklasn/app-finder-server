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
    getProductById(parent, args, context, info) { 
      return products.filter(product => {
        console.log(product.id)
        console.log(args.id)
        return product.id === args.id
        
      })
    }
  },
};

export default resolvers
