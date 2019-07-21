import {Product} from '../models'

export default async (parent, args) => {
  const result = await Product.find({ "name": args.name}, (err, res) => {
    // console.log(res)
    console.log(err)
    console.log(res)
  })
  return result;
    // .limit(25)
    // .exec((err, docs) => console.log(docs))
}
