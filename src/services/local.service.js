import Prisma from "@prisma/client";
import { prisma } from "../prisma.js";

export class localService {
  static async crearLocal(data) {
    try {
      const nuevoLocal = await prisma.local.create({
        data,
      });

      //return { content: nuevoLocal };
      return { message: "Publicación realizada correctamente", };
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
          message: "Error al mostrar publicaciones",
          content: error.message,
        };
      }
    }
  }

  static async EliminaLocal(id) {
    try {
      const deleteLocal = await prisma.local.delete({
        where: {
          local_id: +id,
        }
      });

      //return { content: deleteLocal };
      return {
        message: "Pubicación eliminada correctamente",
      };
    } catch (error) {
      console.log(error);
      if (error instanceof Prisma.Prisma.PrismaClientValidationError) {
        return {
          message: "error en la validacion de prisma",
        };
      }

      if (error instanceof Prisma.Prisma.PrismaClientKnownRequestError) {

        return {
          message: "Error al eliminar publicación",
          content: error.message,
        };
      }


    }
  }

}
