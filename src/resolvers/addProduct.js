import {Product} from './../models'

export default async (parent, args) => {
  console.log(args)
  const newProduct = new Product({
    name: args.input.name,
    url: args.input.url,
    description: args.input.description,
    logo: args.input.logo,
    reputation: args.input.reputation,
    tags: args.input.tags
  })
  return await newProduct.save()
}
