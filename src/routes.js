import express from "express"

const routes = express.Router()
import RawMaterialsController from './app/controller/rawMaterials.controller'

routes.post("/rawMaterials", RawMaterialsController.create)
routes.get("/rawMaterials/user/:user", RawMaterialsController.listByUser)
routes.get("/rawMaterials/name/:name", RawMaterialsController.getByName)
routes.put("/rawMaterials/:id/request", RawMaterialsController.updateById)

export default routes