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
const User = require('../models/users');
class UserController {
    createUser(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { nickname, email, registered, login, status } = obj;
                let dateArray = registered.trim().split(' ');
                const [day, month, year] = dateArray[0].split('.');
                let [hours, minutes] = dateArray[1].split(':');
                if (hours.length === 1) {
                    hours = 0 + hours;
                }
                const registeredN = new Date(Number(year), Number(month), Number(day), Number(hours), Number(minutes)).getTime() / 1000;
                const loginN = new Date(Number(year), Number(month), Number(day), Number(hours), Number(minutes)).getTime() / 1000;
                nickname = nickname.trim();
                status = status.trim();
                yield User.create({
                    nickname,
                    email,
                    registeredN,
                    loginN,
                    status,
                });
            }
            catch (e) {
                console.log(e.message);
                return e.message;
            }
        });
    }
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield User.findAll();
            users.map((user) => {
                let date = new Date(Number(user.registered) * 1000).toISOString();
                let dateArray = date.split('T');
                let newTime = dateArray[0].slice(-2) +
                    '.' +
                    dateArray[0].slice(5, 7) +
                    '.' +
                    dateArray[0].slice(0, 4) +
                    ' ' +
                    dateArray[1].slice(0, 5);
                user.registered = newTime;
            });
            return res.json(users);
        });
    }
}
module.exports = new UserController();
