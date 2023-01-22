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
exports.getUserById = exports.getAllUsers = exports.createUser = exports.deleteUser = exports.toggleStatus = exports.signIn = exports.signUp = exports.updateUser = void 0;
const users_1 = require("../models/users");
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
const signUp = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const user = yield users_1.User.findOne({
            where: { email: email },
        });
        if (!user) {
            let user = yield users_1.User.create(Object.assign({}, req.body));
            return res.status(200).json({
                message: `user with id:${user.id} was succesfully signed up`,
                data: user,
            });
        }
        else
            throw Error;
    }
    catch (err) {
        return res.status(409).json({
            error: 409,
            message: `user with email: ${req.body.email} is already exist`,
        });
    }
});
exports.signUp = signUp;
const signIn = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        const user = yield users_1.User.findOne({
            where: { email: email },
        });
        if (user) {
            yield users_1.User.update({ login: 'today1' }, { where: { email: email } });
            return res.status(200).json({
                message: `user with id: ${user.id} was signed in`,
                data: user,
            });
        }
        else
            throw Error;
    }
    catch (err) {
        return res.status(401).json({
            error: 401,
            message: `${err.message}`,
        });
    }
});
exports.signIn = signIn;
const toggleStatus = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.body.forEach((id) => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield users_1.User.findByPk(id);
            if (user) {
                yield users_1.User.update({ blocked: !user.blocked }, { where: { id } });
                const updatedUser = yield users_1.User.findByPk(id);
            }
        }));
        return res.status(200).json({
            message: `user's status with id are changed`,
            id: req.body,
        });
    }
    catch (err) {
        return res.status(404).json({
            error: 404,
            message: `${err.message}`,
        });
    }
});
exports.toggleStatus = toggleStatus;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        req.body.forEach((id) => __awaiter(void 0, void 0, void 0, function* () {
            yield users_1.User.destroy({ where: { id } });
        }));
        return res.status(200).json({
            message: `users status with ids are deleted`,
            id: req.body,
        });
    }
    catch (err) {
        return err.message;
    }
});
exports.deleteUser = deleteUser;
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
