import {Product} from './../models'

export default (parent, args) => Product.deleteOne({ _id: args.id}, async (err, result) => {
  if (err) console.log(err)
  console.log(err)
  return result

})

