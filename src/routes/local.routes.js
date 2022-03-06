import { Router } from "express";
import { crear } from "../controllers/local.controller.js";


export const localRouter = Router();

localRouter.route("/publicar").post(crear);
//localRouter.route("/listar").get(listar);

