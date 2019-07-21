const createUser = (root, args, context) => {
  return context.prisma.createUser({ name: args.name })
}

export default createUser;