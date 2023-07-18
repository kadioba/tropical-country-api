import usersController from "controllers/users.controller";
import { Router } from "express";

const usersRouter = Router();

usersRouter.post("/signup", usersController.signUp);
usersRouter.post("/signin", usersController.signIn);

export default usersRouter;
