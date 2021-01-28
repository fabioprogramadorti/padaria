import ingredientModel from '../model/ingredient.model'

class IngredientService {

	async create (ingredient) {
		try {
			const newIngredient = await ingredientModel.create(ingredient)
			return newIngredient
	
		} catch (error) {
			return error
		}
	
	}
	
	async list() {
		try {
			const list = await ingredientModel.find({})
			return list
		} catch (error) {
			return error
		}
	}
	

}

export default new IngredientService()