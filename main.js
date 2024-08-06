import express from "express"
import { newConnection } from "./db.js"

const app = express()

app.use(express.json())

app.get("/tasks", async (req, res) =>{
    const connection = await newConnection()

    const [rows] = await connection.query("SELECT * FROM tasks")

    connection.end()

    res.json(rows)

})

app.get("/task/:id", async (req, res) =>{
    const { id } = req.params

    const connection = await newConnection()

    const [rows] = await connection.query("SELECT * FROM tasks WHERE id = ?", [id])

    connection.end()

    res.json(rows[0])
})

app.post("/tasks", async (req, res) =>{
    const {title, description, isComplete} = req.body

    const connection = await newConnection()

    await connection.query("INSERT INTO tasks (title, description, isComplete) VALUES (?, ?)", [title, description, isComplete])

    connection.end()

    res.json({
        title,
        description,
        isComplete
    })
})

app.put("/task/:id", async (req, res) =>{

})

app.delete("/task/:id", async (req, res) =>{

})

app.listen(4000, console.log("Servidor Funcionando"))