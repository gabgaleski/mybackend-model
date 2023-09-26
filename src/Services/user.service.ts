import UsersModelSequelize from "../database/models/userModel";
import IUsers from "../Interfaces/IUser";
import hashPassword from "../auth/passwordBcript";

export default class UserService {
    async findAll(): Promise<{status: number, data:IUsers[] }> {
        const users = await UsersModelSequelize.findAll();
        return {status: 200, data: users};
    }

    async create(user: IUsers): Promise<{status: number, data: IUsers}> {
        const {username, email, password } = user
        const hash = hashPassword(password);
        const infos = {username, email, password: hash }
        const newUser = await UsersModelSequelize.create(infos);
        return {status: 201, data: newUser};
    }

    async findById(id: string): Promise<{status: number, data: IUsers | null}> {
        const user = await UsersModelSequelize.findByPk(id);
        return {status: 200, data: user};
    }

    async delete(id: string) {
        const deletedUser = await UsersModelSequelize.destroy({where: { id }})

        return { status: 204, data: deletedUser }
    }
}