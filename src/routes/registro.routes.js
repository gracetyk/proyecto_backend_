import {Router} from "express";
import {registro} from '../controllers/auth.controller.js'


export const registroRouter = Router();

registroRouter.route("/registro").post(registro);
