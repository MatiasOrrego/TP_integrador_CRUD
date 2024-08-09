import controllers from "../controllers/task_controllers.js";
import express from "express";

//llamo al middleware de applyvalidations
import { applyValidations } from "../applyvalidations.js";

//llamo a la funcion de validacion
import { validationTask } from "../validation.js";

export const router = express.Router();

//obtener todas las tareas
router.get("/", controllers.getTask);

//obtener una tarea por id
router.get("/:id", controllers.getTaskId);

//crear una tarea
router.post("/",validationTask, applyValidations, controllers.postTask);

//actualizar una tarea
router.put("/:id",validationTask, applyValidations, controllers.putTask);

//eliminar una tarea
router.delete("/:id", controllers.deleteTask);

export default router;
