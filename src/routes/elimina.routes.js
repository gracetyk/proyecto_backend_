import { Router } from "express";
import { elimina } from "../controllers/local.controller.js";


export const elimRouter = Router();

elimRouter.route("/elimina/:id").delete(elimina);
