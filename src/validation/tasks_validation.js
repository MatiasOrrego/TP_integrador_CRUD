//llamo a la funcion body de express-validator para validar los campos del formulario
import { body } from "express-validator";

//validacion de los campos del formulario para crear una tarea
export const postValidationTask = [
    body("title")
    .isString().withMessage("El titulo debe ser un string")
    .notEmpty().withMessage("El titulo no puede estar vacio")
    .isLength({min: 5, max: 255}).withMessage("El titulo debe tener entre 5 y 255 caracteres"),
    body("description")
    .isString().withMessage("La descripcion debe ser un string")
    .notEmpty().withMessage("La descripcion no puede estar vacia"),
    body("isComplete")
    .isBoolean().withMessage("El estado debe ser un boolean")
    .notEmpty().withMessage("El estado no puede estar vacio")

]

//validacion de los campos del formulario para actualizar una tarea
export const putValidationTask = [
    body("title")
    .isString().withMessage("El titulo debe ser un string")
    .notEmpty().withMessage("El titulo no puede estar vacio")
    .isLength({min: 5, max: 255}).withMessage("El titulo debe tener entre 5 y 255 caracteres"),
    body("description")
    .isString().withMessage("La descripcion debe ser un string")
    .notEmpty().withMessage("La descripcion no puede estar vacia"),
    body("isComplete")
    .isBoolean().withMessage("El estado debe ser un boolean")
    .notEmpty().withMessage("El estado no puede estar vacio")

]