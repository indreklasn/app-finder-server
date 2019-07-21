const fetchAllUsers = (root, args, context) => {
  return context.prisma.users()
}

export default fetchAllUsers;