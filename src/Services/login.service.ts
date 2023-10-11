import UsersModelSequelize from "../database/models/userModel";
import { compareSync } from "bcryptjs";
import JWT from "../auth/JWT";

export default class LoginService {
    async login(email: string, password: string) {
        const user = await UsersModelSequelize.findOne({where: { email }});
        if (!user || !compareSync(password, user.password)) {
            return { status: 401, data: null, };
        }

        const token = JWT.sign({email, id: user.id});
        return { status: 200, data: token, };
    }
}