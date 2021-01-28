import express from "express"

const routes = express.Router()

routes.get("/", (req, res) => {
  return res.send("Minha primeira rota!")
})

export default routes