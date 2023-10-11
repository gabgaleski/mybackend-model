import { Request, Response } from "express";
import LoginService from "../Services/login.service";

export default class LoginController {
    constructor(
        private loginService = new LoginService(),
    ) {}
    
    async login(req: Request, res: Response) {
        const { email, password } = req.body;
        const result = await this.loginService.login(email, password);
        if (!result.data) return res.status(result.status).json({ message: "Usuário ou senha inválidos" });
        return res.status(result.status).json(result.data);
    }
}