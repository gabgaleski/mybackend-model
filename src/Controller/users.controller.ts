import { Request, Response } from "express";
import UserService from "../Services/user.service";
// import ICrudUser from "../Interfaces/IUser.crud";

export default class UserController {
    constructor(
        private usersService = new UserService(),
    ) {}

    async findAll(req: Request, res: Response): Promise<Response> {
        const result = await this.usersService.findAll();
        return res.status(result.status).json(result.data);
    }
}