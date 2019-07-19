import mongoose from  'mongoose';
const Schema = mongoose.Schema;

/*
  notice there is no ID. That's because Mongoose will assign
  an ID by default to all schemas
*/

const ProductSchema = new Schema({
	name: String,
	url: String,
	tags: [String]
});

export default mongoose.model('Product', ProductSchema);