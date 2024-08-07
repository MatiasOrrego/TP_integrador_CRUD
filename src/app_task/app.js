import express from "express"
import { newConnection } from "../database/db.js"

const app = express()

app.use(express.json())

app.get("/tasks", async (req, res) =>{

    const connection = await newConnection()
    const result = await connection.query("SELECT * FROM tasks")

    res.json(result[0]) 

    connection.end()
})

app.get("/task/:id", async (req, res) =>{
    const connection = await newConnection()
    const respuesta = await connection.query("SELECT * FROM tasks WHERE id = ?", [req.params.id])

    res.json(respuesta[0])

    connection.end()
})

app.post("/tasks", async (req, res) =>{
    const { title, description, isComplete } = req.body

    const connection = await newConnection()
    await connection.query("INSERT INTO tasks (title, description, isComplete) VALUES (?, ?, ?)", [title, description, isComplete])

    res.json({ title, description, isComplete })

    connection.end()
})

app.put("/task/:id", async (req, res) =>{

})

app.delete("/task/:id", async (req, res) =>{

})
app.listen(4000, console.log("Servidor Funcionando"))