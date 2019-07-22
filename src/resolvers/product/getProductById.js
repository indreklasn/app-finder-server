export default (parent, args, context) => {
  return context.prisma.product({
    where: {
      id: args.id
    }
  })
}
