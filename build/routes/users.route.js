"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = __importDefault(require("../Controller/users.controller"));
const router = (0, express_1.Router)();
const userController = new users_controller_1.default();
router.get('/', (req, res) => userController.findAll(req, res));
router.post('/', (req, res) => userController.create(req, res));
router.get('/:id', (req, res) => userController.findById(req, res));
router.delete('/:id', (req, res) => userController.delete(req, res));
exports.default = router;
//# sourceMappingURL=users.route.js.map