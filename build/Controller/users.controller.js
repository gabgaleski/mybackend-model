"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("../Services/user.service"));
// import ICrudUser from "../Interfaces/IUser.crud";
class UserController {
    constructor(usersService = new user_service_1.default()) {
        this.usersService = usersService;
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.usersService.findAll();
            return res.status(result.status).json(result.data);
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=users.controller.js.map