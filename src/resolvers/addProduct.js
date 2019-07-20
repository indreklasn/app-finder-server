import {Product} from './../models'

export default (parent, args) => {
  const newProduct = new Product({
    name: args.name,
    url: args.url,
    description: args.description,
    logo: args.logo,
    reputation: 0,
    tags: args.tags
  })
  
  return  Product.find({_id: newProduct._id})

}
