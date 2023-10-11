import { Request, Router, Response } from 'express';
import LoginController from '../Controller/login.controller';
import LoginValidate from '../middleware/loginValidate';


const router = Router();

const loginController = new LoginController();

router.post(
  '/',
  LoginValidate.validateFields,
  (req: Request, res: Response) => loginController.login(req, res),
);


export default router;