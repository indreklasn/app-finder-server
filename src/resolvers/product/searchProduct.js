
export default (parent, args, context) => {
  console.log(args)
  return context.prisma.products({
    where: {
      name: args.name,
      description: args.description,
      tags: args.tags
    }
  })
}
