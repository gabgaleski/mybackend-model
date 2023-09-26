import { Request, Response, Router } from 'express';
import UserController from '../Controller/users.controller';

const router = Router();
const userController = new UserController();

router.get('/', (req: Request, res: Response) => userController.findAll(req, res));
router.post('/', (req: Request, res: Response) => userController.create(req, res));
router.get('/:id', (req: Request, res: Response) => userController.findById(req, res));
router.delete('/:id', (req: Request, res: Response ) => userController.delete(req, res))

export default router;