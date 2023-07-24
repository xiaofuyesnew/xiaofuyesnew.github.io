import { PrismaClient } from '@prisma/client'

const prismaClient = global.prismaClient || new PrismaClient()

if (process.env.NODE_ENV === 'development') global.prisma = prismaClient

export default prismaClient
