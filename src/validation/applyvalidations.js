import { validationResult } from 'express-validator';

//middleware para validar los campos del formulario
export const applyValidations = (req, res, next) => {
  
    const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
}