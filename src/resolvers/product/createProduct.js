export default (root, args, context) => {
  return context.prisma.createProduct({
    product: {
      name: args.name,
      description: args.description,
      reputation: args.reputation,
      logo: args.logo,
      url: args.url,
    },
    tags: {
      name: args.tags
    }
  })
}