import { controllers } from '../controllers/task_controllers'
import express from 'express'

const {getTask, getTaskId, postTask, putTask, deleteTask} = controllers
export const router = express.Router()

//obtener todas las tareas
router.get('/tasks', getTask)

//obtener una tarea por id
router.get('/tasks/:id', getTaskId)

//crear una tarea
router.post('/tasks', postTask)

//actualizar una tarea
router.put('/tasks/:id', putTask)

//eliminar una tarea
router.delete('/tasks/:id', deleteTask)