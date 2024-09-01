import {PrismaClient} from '@prisma/client';
// import { withOptimize } from "@prisma/extension-optimize"

declare global {
    var prisma: PrismaClient | undefined
}
// const prisma = new PrismaClient().$extends(withOptimize());


export const db = globalThis.prisma || new PrismaClient()

if(process.env.NODE_ENV !== "production") globalThis.prisma = db;