"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
    }
    config() {
        this.app.use(express_1.default.json());
    }
    start(PORT) {
        this.app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map