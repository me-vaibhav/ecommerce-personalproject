import {z} from 'zod'

export const signUpSchemaZod = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    phone: z.string().min(10).max(12),
    fullname: z.string().min(3),
}).passthrough()


export const loginSchemaZod = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export const productSchemaZod = z.object({
    name: z.string().min(3),
    description: z.string().min(3),
    quantity: z.number().nonnegative(),
    price: z.number().nonnegative(),
    producturl: z.string().url()
}).passthrough()