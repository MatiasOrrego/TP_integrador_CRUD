import express from "express"
import { newConnection } from "./db.js"

const app = express()

app.use(express.json())

app.get("/tasks", async (req, res) =>{

    const connection = await newConnection()
    const result = await connection.query("SELECT * FROM tasks")

    res.json(result[0]) 

    connection.end()
})

app.listen(4000, console.log("Servidor Funcionando"))