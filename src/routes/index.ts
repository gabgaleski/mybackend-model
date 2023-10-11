import { Router } from "express";
import userRoute from "./users.route";
import loginRoute from './login.route'

const router = Router();

router.use('/users', userRoute);
router.use('/login', loginRoute);

export default router;
