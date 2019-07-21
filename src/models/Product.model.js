import mongoose from  'mongoose';

const Schema = mongoose.Schema;
/*
  notice there is no ID. That's because Mongoose will assign
  an ID by default to all schemas.
*/

const ProductSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	},
	description: { 
		type: String,
		required: true
	},
	logo: {
		type: String,
		required: true
	},
	reputation: {
		type: Number,
		required: true
	},
	tags: {
		type: [String],
		required: false
	}
});

ProductSchema.index({'$**': 'text'});

ProductSchema.on('index', err => {
	console.log(err.message)
})

export default mongoose.model('Product', ProductSchema);