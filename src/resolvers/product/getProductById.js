export default (parent, args, context) => {
  return context.prisma.products({
    where: {
      id: args.id
    }
  })
}
