import { Request, Response, Router } from 'express';
import UserController from '../Controller/users.controller';
import LoginValidate from '../middleware/loginValidate';

const router = Router();
const userController = new UserController();

router.get('/', (req: Request, res: Response) => userController.findAll(req, res));
router.post(
    '/',
    LoginValidate.validateFields,
    (req: Request, res: Response) => userController.create(req, res));
router.get('/:id', (req: Request, res: Response) => userController.findById(req, res));
router.delete('/:id', (req: Request, res: Response ) => userController.delete(req, res))

export default router;