
export default (parent, args, context) => {
  return context.prisma.products({
    first: 20,
    where: {
      OR: [
        { name_contains: args.name },
        { description_contains: args.description },
      ]
    },
  })
}
