import Prisma from "@prisma/client";
import { prisma } from "../prisma.js";

export class localService {
  static async crearLocal(data) {
    try {
      const nuevoLocal = await prisma.local.create({
        data,
      });

      return { content: nuevoLocal };
      
    } catch (error) {
      console.log(error);
      if (error instanceof Prisma.Prisma.PrismaClientValidationError) {
        return {
          message: "error en la validacion de prisma",
        };
      }

      if (error instanceof Prisma.Prisma.PrismaClientKnownRequestError) {

        return {
          message: "Error al realizar publicación",
          content: error.message,
        };
      }
    }
  }

  static async listarLocal() {
    try {
      const listaLocal = await prisma.local.findMany();

      return { content: listaLocal };
    } catch (error) {
      console.log(error);
      if (error instanceof Prisma.Prisma.PrismaClientValidationError) {
        return {
          message: "error en la validacion de prisma",
        };
      }

      if (error instanceof Prisma.Prisma.PrismaClientKnownRequestError) {

        return {
          message: "Error al realizar publicación",
          content: error.message,
        };
      }

    }
  }


}
