import staysController from "../controllers/stays.controller";
import { Router } from "express";

const staysRouter = Router();

staysRouter.get('/stays/:cityId', staysController.getStaysByCityId);
staysRouter.get('/stay/:stayId', staysController.getStayById);

export default staysRouter;