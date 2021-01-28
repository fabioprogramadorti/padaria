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
	
	async getByName(name) {
		try {
			const material = await rawMaterialsModel.find({name: {"$regex":`${name}`}})
			return material
		} catch (error) {
			return error
		}
	}

	async updateById(id, data) {
		try {
			const material = await rawMaterialsModel.findById(id)
			if (data.quantity > material.quantity) {
				throw new Error(`The quantity is too large. There is only ${material.quantity}`)
			}

			material.quantity -= data.quantity
			material.user = data.user
			const materialUpdated = await rawMaterialsModel.findByIdAndUpdate(id, material, {new: true})

			return materialUpdated
		} catch (error) {
			console.log(error)
			return error.toString()
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