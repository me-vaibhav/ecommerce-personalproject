import {z} from 'zod'
import { loginSchemaZod, productSchemaZod, signUpSchemaZod } from './zod.validate.js'

export const validateSignUp = (req, res, next) => {
    try {
        signUpSchemaZod.parse(req.body)  // Validates request body
        next()  // Pass to the next middleware if valid
    } catch (error) {
        res.status(400).json({ error: error.errors })  // Send error if validation fails
    }
}

export const validateLogin = (req, res, next) => {
    try {
        loginSchemaZod.parse(req.body)  // Validates request body
        next()
    } catch (error) {
        res.status(400).json({ error: error.errors })
    }
}

export const validateProduct = (req, res, next) => {
    try {
        productSchemaZod.parse(req.body)  // Validates request body
        next()
    } catch (error) {
        res.status(400).json({ error: error.errors })
    }
}