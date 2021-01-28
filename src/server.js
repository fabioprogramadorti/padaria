import express from 'express'
import { db } from './database/config'
import mongoose from 'mongoose'
import routes from './routes'

class App {
  constructor() {
    this.express = express()

    this.database()
    this.middlewares()
    this.routes()

    this.express.listen(3001, () =>
      console.log(`Server running at port 3001 `)
    )
  }

  database() {
    mongoose.connect(db.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
  }

  middlewares() {
    this.express.use(express.json())
  }

  routes() {
    this.express.use(routes)
  }
}
export default new App().express