import rawMaterialsModel from '../model/rawMaterials.model'

class RawMaterials {

	async create (ingredient) {
		try {
			const newRawMaterial = await rawMaterialsModel.create(ingredient)
			return newRawMaterial
	
		} catch (error) {
			return error
		}
	
	}
	
	async list() {
		try {
			const list = await rawMaterialsModel.find({})
			return list
		} catch (error) {
			return error
		}
	}
	

}

export default new RawMaterials()