
export default (parent, args, context) => {
  return context.prisma.products({
    where: {
      name: args.name,
      description: args.description,
      tags: args.tags
    }
  })
}
