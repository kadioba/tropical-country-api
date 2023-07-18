import { Router } from "express";
import staysRouter from "./stays.router";
import usersRouter from "./users.router";

const router = Router();

router.use(staysRouter);
router.use(usersRouter);

export default router;