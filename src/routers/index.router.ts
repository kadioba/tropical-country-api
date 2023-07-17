import { Router } from "express";
import staysRouter from "./stays.router";

const router = Router();

router.use(staysRouter);

export default router;