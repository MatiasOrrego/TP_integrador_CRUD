import express from "express"
import { db } from "./database/db.js"

const app = express()

app.use(express.json())



app.listen(4000, console.log("Servidor Funcionando"))