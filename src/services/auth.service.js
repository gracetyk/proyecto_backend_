import { prisma } from "../prisma.js";
import { compareSync } from "bcrypt";
import jwt from "jsonwebtoken";
import { hashSync } from "bcrypt";
import Prisma from "@prisma/client";

export class AuthService {
  static async login({ correo, password }) {
    // SELECT password, tipo_usuario FROM USUARIO WHERE correo= '...';
    // si no lo encuentra lanzara un error de not found
    const usuarioEncontrado = await prisma.usuario.findUnique({
      where: { correo },
      select: { password: true, nombre: true, id: true },
      rejectOnNotFound: true,
    });

    const resultado = compareSync(password, usuarioEncontrado.password);

    if (resultado) {
      const token = jwt.sign(
        { id: usuarioEncontrado.id, mensaje_oculto: "Hola soy un mensaje" },
        process.env.JWT_SECRET,
        // se puede pasar un valor numerico (que sera en segundos) o un string indicando el formato de la sgte manera '7d' (7 dias) '10h' (10 horas), '2 days' (2 dias), si le ponemos '100' entonces sera un valor expresado en milisegundos
        { expiresIn: "4h" }
      );

      return { message: `Bienvenido ${usuarioEncontrado.nombre}`, token };
    } else {
      return { message: "Credenciales incorrectas" };
    }
  }

  static async crearUsuario (data) {

    try {
      const correo = data.correo;
      const password = hashSync(data.password, 10);
      const nombre = data.nombre;

      const correoExiste = await prisma.usuario.findUnique({
        where: {correo},
        select: {correo:true},
      })
      
      if (correoExiste === null){

      const usuarioCreado =await prisma.usuario.create({
        data: {
          nombre,
          correo,
          password,
        }
      })
      
      const token = jwt.sign(
        {
          id: usuarioCreado.id,
          nombre: usuarioCreado.nombre,
          apellido: usuarioCreado.apellido,
        },
        process.env.SECRET_JWT,
        {
          expiresIn: "5h",
        },
      );
      return {
        message: "Usuario Creado Exitosamente",
        token: token,
      }
    } else {
      return "No se pudo crear cuenta, este correo ya se registro anteriormente";
    }
    } catch (error) {
      console.log(error)
      if (error instanceof Prisma.Prisma.PrismaClientValidationError){return {
        message: "Error en la validacion de prisma",
        conntent: error.message,
      }}
    };
  };
};
