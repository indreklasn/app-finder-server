const fetchUser = (root, args, context) => {
  console.log(args)
  return context.prisma.user({ id: args.id })
}

export default fetchUser;