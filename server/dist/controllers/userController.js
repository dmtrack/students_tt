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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getUserById = exports.getAllUsers = exports.deleteUser = exports.createUser = void 0;
const users_1 = require("../models/users");
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = yield users_1.User.create(Object.assign({}, req.body));
        return res
            .status(200)
            .json({ message: 'user created succesfully', data: user });
    }
    catch (err) {
        return err.message;
    }
});
exports.createUser = createUser;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedUser = yield users_1.User.findByPk(id);
        yield users_1.User.destroy({ where: { id } });
        return res.status(200).json({
            message: `user with id: ${id} was succesfully deleted`,
            data: exports.deleteUser,
        });
    }
    catch (err) {
        return err.message;
    }
});
exports.deleteUser = deleteUser;
const getAllUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield users_1.User.findAll();
        return res
            .status(200)
            .json({ message: `users fetched successfully`, data: allUsers });
    }
    catch (err) {
        return err.message;
    }
});
exports.getAllUsers = getAllUsers;
const getUserById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield users_1.User.findByPk(id);
        return res
            .status(200)
            .json({ message: `user with id: ${id} was fetched`, data: user });
    }
    catch (err) {
        return err.message;
    }
});
exports.getUserById = getUserById;
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield users_1.User.update(Object.assign({}, req.body), { where: { id } });
        const updatedUser = yield users_1.User.findByPk(id);
        return res.status(200).json({
            message: `user with id: ${id} was updated`,
            data: updatedUser,
        });
    }
    catch (err) {
        return err.message;
    }
});
exports.updateUser = updateUser;
// export const blockUser: RequestHandler = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const blockedUser: User | null = await User.findByPk(id);
//         await User.update({ where: { id } });
//         return res
//             .status(200)
//             .json({ message: `user with id: ${id} was succesfully deleted` });
//     } catch (err: any) {
//         return err.message;
//     }
// };
