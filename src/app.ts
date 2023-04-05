import express from "express"
import { config } from "dotenv"
import cors from "cors"
import routes from "./routes/index.routes"
import * as database from "./config/database"

// setup database connection
database

// setup environment settings
config()

class AppController {

    express: express.Application;

    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(express.json())
        this.express.use(cors())
    }

    routes() {
        this.express.use(routes)
    }
}

export default new AppController().express;