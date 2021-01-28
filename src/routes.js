import express from "express"

const routes = express.Router()
import IngredientController from './app/controller/rawMaterials.controller'

routes.post("/rawMaterials", IngredientController.create)
routes.get("/rawMaterials", IngredientController.list)

export default routes