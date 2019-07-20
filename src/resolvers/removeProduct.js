import {Product} from './../models'

export default (parent, args) => Product.deleteOne({ _id: args.input.id}, (err, result) => {
  if(err) console.log(err)
  return result.ok
})