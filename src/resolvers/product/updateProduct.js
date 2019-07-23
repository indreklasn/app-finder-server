export default (parent, args, context) => {
  return context.prisma.updateProduct({
    data: {
      name: args.name,
      description: args.description,
      url: args.url,
      logo: args.logo,
      tags: {
        set: args.tags
      }
    },
    where: {
      id: args.id
    }
  })
}