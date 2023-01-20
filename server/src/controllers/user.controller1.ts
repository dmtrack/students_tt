import { IUser } from '../interfaces/user';
const User = require('../models/users');

class UserController {
    async createUser(obj: IUser): Promise<void> {
        console.log(obj.body);
        try {
            let { nickname, email, registered, login, status } = obj.body;
            let registeredDateA = registered.split('.');
            let [day, month, year] = registeredDateA;
            const registeredN =
                new Date(Number(year), Number(month), Number(day)).getTime() /
                1000;
            let loginDateA = login.split('.');
            [day, month, year] = loginDateA;
            const loginN =
                new Date(Number(year), Number(month), Number(day)).getTime() /
                1000;
            nickname = nickname.trim();
            status = status.trim();
            await User.create({
                nickname,
                email,
                registeredN,
                loginN,
                status,
            });
        } catch (e: any) {
            console.log(e.message);
            return e.message;
        }
    }

    async getUsers(req: any, res: any) {
        const users = await User.findAll();
        users.map((user: IUser) => {
            let date = new Date(
                Number(user.body.registered) * 1000
            ).toISOString();
            let dateArray = date.split('T');
            let newTime =
                dateArray[0].slice(-2) +
                '.' +
                dateArray[0].slice(5, 7) +
                '.' +
                dateArray[0].slice(0, 4) +
                ' ' +
                dateArray[1].slice(0, 5);

            user.body.registered = newTime;
        });
        return res.json(users);
    }
    // async getUsersBlocked(req: any, res: any) {
    //     const users = await User.findAll({
    //         where: { status: 'Blocked' },
    //         order: [['registered', 'DESC']],
    //     });

    //     users.map((user: IUser) => {
    //         let date = new Date(Number(user.registered) * 1000).toISOString();
    //         let dateArray = date.split('T');
    //         let newTime =
    //             dateArray[0].slice(-2) +
    //             '.' +
    //             dateArray[0].slice(5, 7) +
    //             '.' +
    //             dateArray[0].slice(0, 4) +
    //             ' ' +
    //             dateArray[1].slice(0, 5);

    //         user.registered = newTime;
    //     });
    //     res.json(users);
    // }
    // async deleteUsers(req: any, res: any) {
    //     const { id } = req.params;
    //     await User.destroy({ where: { id } });
    //     return res.json({ message: 'users deleted' });
    // }
}

module.exports = new UserController();
