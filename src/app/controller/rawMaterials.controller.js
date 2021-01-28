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
				msg: error.toString()
			})
		}
	}

	async updateById(req, res) {

		try {
			const ingredient = await RawMaterials.updateById(req.params.id, req.body)

			
			return res.status(200).json({
				data: ingredient,
				msg: 'Raw material requested successfully'
			})
			
		} catch (error) {
			
			res.status(400).json({
				data: {},
			})
		}		
	}
	async getMaterialsByName(req, res) {
		try {
			const ingredient = await RawMaterials.getByName(req.params.name)
			if(ingredient.length == 0)
				throw new Error('Material not found')
			
			return res.status(200).json({
				data: ingredient,
				msg: 'Raw material requested successfully'
			})
			
		} catch (error) {

			res.status(400).json({
				data: {},
				msg: error.toString()
			})
		}		
	}

	async listMaterialsByUser(req, res) {
		try {
			
			const materials = await RawMaterials.listByUser(req.params.user)

			return res.status(200).json({
				data: materials,
				msg: 'Raw materials requested successfully'
			})
			
		} catch (error) {
			res.status(400).json({
				data: {},
				msg: error.toString()
			})
		}		
	}
}

export default new RawMaterialsController()