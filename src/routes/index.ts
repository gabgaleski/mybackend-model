import { Router } from "express";
import userRoute from "./users.route";

const router = Router();

router.use('/users', userRoute);

export default router;
