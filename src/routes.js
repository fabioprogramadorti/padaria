import express from "express"

const routes = express.Router()
import RawMaterialsController from './app/controller/rawMaterials.controller'

routes.post("/rawMaterials", RawMaterialsController.create)
routes.get("/rawMaterials", RawMaterialsController.list)
routes.get("/rawMaterials/:name", RawMaterialsController.getByName)
routes.put("/rawMaterials/:id/request", RawMaterialsController.updateById)

export default routes