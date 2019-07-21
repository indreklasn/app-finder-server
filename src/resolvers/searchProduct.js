import {Product} from '../models'

export default  (parent, args) => {
  return Product.find({ "name": args.name}, (err, res) => {
    // console.log(res)
    console.log(err)
    console.log(res)
  })

    // .limit(25)
    // .exec((err, docs) => console.log(docs))
}
