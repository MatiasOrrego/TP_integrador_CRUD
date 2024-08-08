
import controllers from '../controllers/task_controllers.js';
import express from 'express'

export const router = express.Router()

//obtener todas las tareas
router.get('/tasks', controllers.getTask)

//obtener una tarea por id
router.get('/task/:id', controllers.getTaskId)

//crear una tarea
router.post('/tasks', controllers.postTask)

//actualizar una tarea
router.put('/task/:id', controllers.putTask)

//eliminar una tarea
router.delete('/task/:id', controllers.deleteTask)

export default router