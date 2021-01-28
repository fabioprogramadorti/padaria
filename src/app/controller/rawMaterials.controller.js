import RawMaterials from '../services/rawMaterials.service'

class RawMaterialsController {

	async create(req, res) {
		try {
			const newRawMaterial = await RawMaterials.create(req.body)

			return res.status(200).json({
				data: newRawMaterial,
				msg: 'Raw material created successfully'
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
			const ingredients = await RawMaterials.list()

			return res.status(200).json({
				data: ingredients,
				msg: 'Raw materials requested successfully'
			})
			
		} catch (error) {
			res.status(200).json({
				data: {},
				msg: error
			})
		}		
	}
}

export default new RawMaterialsController()