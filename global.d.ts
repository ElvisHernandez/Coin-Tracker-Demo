import { PrismaClient } from "@prisma/client";
import { Db } from "./src/services/Db";

declare global {
  namespace Express {
    export interface Request {
      prisma: PrismaClient;
      db: Db;
    }
  }
}
