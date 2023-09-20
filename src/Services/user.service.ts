export default class UserService {
    async findAll(): Promise<{status: number, data: []}> {
        return {status: 200, data: []};
    }
}