//llamo a la funcion body de express-validator para validar los campos del formulario
import { body } from "express-validator";

//valido los campos del formulario
export const validationTask = [
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