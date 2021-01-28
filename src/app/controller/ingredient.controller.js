import IngredientService from '../services/ingredient.service'

class IngredientController {

	async create(req, res) {
		try {
			const newIngredient = await IngredientService.create(req.body)

			return res.status(200).json({
				data: newIngredient,
				msg: 'Ingredient created successfully'
			})
			
		} catch (error) {
			res.status(400).json({
				data: {},
				msg: error
			})
		}
	}

	async list(req, res) {
		try {
			const ingredients = await IngredientService.list()

			return res.status(200).json({
				data: ingredients,
				msg: 'Ingredients requested successfully'
			})
			
		} catch (error) {
			res.status(200).json({
				data: {},
				msg: error
			})
		}		
	}
}

export default new IngredientController()