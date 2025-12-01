// define your collections here
import { defineCollection, z } from "astro:content";
// z -> Zod es un librería para la validación de esquemas de datos

// Definición de la colección "tickets" con su esquema correspondiente
const tickets = defineCollection({
    schema: z.object({
        id: z.number(),
        title: z.string(),
        status: z.number(),
        lastUpdate: z.string(),
        openingDate: z.string(),
        priority: z.string(),
        assignedTo: z.string(),
        category: z.string(),
        timeToResolve: z.string(),
    })
})

// exporta las collección definida
export const collections = {tickets};