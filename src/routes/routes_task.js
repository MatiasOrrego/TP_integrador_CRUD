import controllers from "../controllers/task_controllers.js";
import express from "express";

//llamo al middleware de applyvalidations
import { applyValidations } from "../middlewares/apply_validations.js";

//llamo a la funcion de validacion
import { postValidationTask } from "../validation/tasks_validation.js";
import { putValidationTask } from "../validation/tasks_validation.js";

export const router = express.Router();

//obtener todas las tareas
router.get("/", controllers.getTask);

//obtener una tarea por id
router.get("/:id", controllers.getTaskId);

//crear una tarea
router.post("/", postValidationTask, applyValidations, controllers.postTask);

//actualizar una tarea
router.put("/:id", putValidationTask, applyValidations, controllers.putTask);

//eliminar una tarea
router.delete("/:id", controllers.deleteTask);

export default router;
