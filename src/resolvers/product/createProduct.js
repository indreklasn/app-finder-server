export default (root, args, context) => {
  return context.prisma.createProduct({
    name: args.name,
    description: args.description,
    reputation: args.reputation,
    logo: args.logo,
    url: args.url,  
    tags: {
      set: args.tags
    }
  })
}