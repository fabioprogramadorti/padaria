import mongoose, { Types } from 'mongoose'

const IngredientSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	quantity: {
		type: Number,
		required: true,
		min: 0
	},
	user: {
		type: String,
		required: true
	}
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

export default mongoose.model('Ingredient', IngredientSchema)