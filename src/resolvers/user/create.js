const createUser = (root, args, context) => {
  return context.prisma.createUser({ name: args.name, email: args.email })
}

export default createUser;