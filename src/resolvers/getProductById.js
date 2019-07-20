import {Product} from './../models'

export default (parent, args) =>  Product.find({_id: args.id})

