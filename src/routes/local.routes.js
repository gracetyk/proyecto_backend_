import { Router } from "express";
import { crear } from "../controllers/local.controller.js";
import { validarUsuario } from "../utils/validador.js";


export const localRouter = Router();

localRouter.route("/publicar").post(validarUsuario, crear);
//localRouter.route("/listar").get(listar);

