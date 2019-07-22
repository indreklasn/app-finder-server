export default (parent, args, context) => {
  console.log(args)
  return context.prisma.deleteProduct({ id: args.id })
}