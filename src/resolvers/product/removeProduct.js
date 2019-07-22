export default (parent, args, context) => {
  return context.prisma.deleteProduct({ id: args.id })
}