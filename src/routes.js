import express from "express"

const routes = express.Router()
import IngredientController from './app/controller/ingredient.controller'

routes.post("/ingredients", IngredientController.create)
routes.get("/ingredients", IngredientController.list)

export default routes