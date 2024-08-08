
import { db } from "../database/db.js"


const controllers= {

//obtener todas las tareas
getTask : async (req, res) =>{

    try{
        const connection = await db()
        const [result] = await connection.query("SELECT * FROM tasks")

        if(result.length === 0){
            res.status(404).json({mensaje: "No se encontraron tareas"})
        }else {
                res.status(200).json(result)
            }
    }catch(error){
        res.status(500).json({mensaje: "Error al obtener las tareas"})
    }   
},

//obtener una tarea por id
getTaskId :  async (req, res) =>{

    const connection = await db()
    try{
        const { id } = req.params

        const [result] = await connection.query("SELECT * FROM tasks WHERE id = ?", [id]);

        if(result.length === 0){
            res.status(404).json({mensaje: "No se encontro la tarea"})
        }else{
            res.status(200).json(result)
        }
    }catch(error){
        res.status(500).json({mensaje: "Error al obtener la tarea"})
    }
},

//crear una tarea
postTask : async (req, res) =>{
    try{
        const { title, description, isComplete } = req.body

        const connection = await db()

        await connection.query("INSERT INTO tasks (title, description, isComplete) VALUES (?, ?, ?)", [title, description, isComplete])

        if(title === " " || description === " " || isComplete === " "){
        
            res.status(400).json({mensaje: "Por favor complete todos los campos"})

        }else{
            
            res.status(201).json({mensaje: "Tarea creada correctamente"})

        }

    }catch(error){
        res.status(500).json({mensaje: "Error al crear la tarea"})
    }

},

//actualizar una tarea
putTask: async (req, res) => {
    try {
        const { title, description, isComplete } = req.body;
        const { id } = req.params;

        // Verificar que todos los campos estén completos
        if (!title || !description || isComplete === undefined) {
            return res.status(400).json({ mensaje: "Por favor complete todos los campos" });
        }

        const connection = await db();

        const [result] = await connection.query(
            "UPDATE tasks SET title = ?, description = ?, isComplete = ? WHERE id = ?",
            [title, description, isComplete, id]
        );

        // Verificar si alguna fila fue afectada
        if (result.affectedRows === 0) {
            return res.status(404).json({ mensaje: "No se encontró la tarea" });
        }

        res.status(200).json({ mensaje: "Tarea actualizada correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar la tarea" });
    }
},

//eliminar una tarea
deleteTask : async (req, res) =>{
    try{
        const { id } = req.params

        const connection = await db()

        const [result] = await connection.query("DELETE FROM tasks WHERE id = ?", [id])

        if(result.length == 0){
            res.status(404).json({mensaje: "No se encontro la tarea"})
        }else{
            res.status(200).json({mensaje: "Tarea eliminada correctamente"})
        }

    }catch(error){
        res.status(500).json({mensaje: "Error al eliminar la tarea"})
    }

}
}

export default controllers;