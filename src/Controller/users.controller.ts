import { Request, Response } from "express";
import UserService from "../Services/user.service";
// import ICrudUser from "../Interfaces/IUser.crud";

export default class UserController {
    constructor(
        private usersService = new UserService(),
    ) {}

    async findAll(req: Request, res: Response) {
        const result = await this.usersService.findAll();
        return res.status(result.status).json(result.data);
    }

    async create(req: Request, res: Response) {
        const result = await this.usersService.create(req.body);
        return res.status(result.status).json({message: "User created successfully"});
    }

    async findById(req: Request, res: Response) {
        const { id } = req.params;
        const result = await this.usersService.findById(id);
        if (result.data === null) {
            return res.status(404).json({message: "User not found"});
        }
        return res.status(result.status).json(result.data);
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        const result = await this.usersService.delete(id);
        
        return res.status(result.status).json({})
    }
}