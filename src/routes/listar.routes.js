import { Router } from "express";
import { listar } from "../controllers/local.controller.js";


export const listaRouter = Router();

listaRouter.route("/listar").get(listar);
