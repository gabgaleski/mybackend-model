import UsersModelSequelize from "../database/models/userModel";
import IUsers from "../Interfaces/IUser";

export default class UserService {
    async findAll(): Promise<{status: number, data:IUsers[] }> {
        const users = await UsersModelSequelize.findAll();
        return {status: 200, data: users};
    }
}