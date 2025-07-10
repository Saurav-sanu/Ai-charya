

const { PrismaClient } = require("@prisma/client");

export const db= globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV!=="production"){
    globalThis.prisma=db;
}

//globalThis.Prisma:This  global varaible ensures that the prisma client instance is 
// reused across hot reloads during develoopment,without this,each time your application
// relaods a new instace of the prisma client would be createDebugLogger, potentially leading to connection issues