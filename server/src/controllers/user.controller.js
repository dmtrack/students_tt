const User = require('../models/models');

class UserController {
    async createUser(obj) {
        try {
            let { nickname, email, registered, login, status } = obj;
            let dateArray = registered.trim().split(' ');
            const [day, month, year] = dateArray[0].split('.');
            let [hours, minutes] = dateArray[1].split(':');
            if (hours.length === 1) {
                hours = 0 + hours;
            }
            registered =
                new Date(year, month, day, hours, minutes).getTime() / 1000;
            login = new Date(year, month, day, hours, minutes).getTime() / 1000;
            nickname = nickname.trim();
            status = status.trim();
            await User.create({
                nickname,
                email,
                registered,
                status,
            });
        } catch (e) {
            console.log(e.message);
            return e.message;
        }
    }

    async getUsers(req, res) {
        const users = await User.findAll();
        users.map((user) => {
            let date = new Date(user.registered * 1000).toISOString();
            date = date.split('T');
            let newTime =
                date[0].slice(-2) +
                '.' +
                date[0].slice(5, 7) +
                '.' +
                date[0].slice(0, 4) +
                ' ' +
                date[1].slice(0, 5);

            user.registered = newTime;
        });
        return res.json(users);
    }
    async getUsersOnline(req, res) {
        const users = await User.findAll({
            where: { status: 'On' },
            order: [['registered', 'DESC']],
        });

        users.map((user) => {
            let date = new Date(user.registered * 1000).toISOString();
            date = date.split('T');
            let newTime =
                date[0].slice(-2) +
                '.' +
                date[0].slice(5, 7) +
                '.' +
                date[0].slice(0, 4) +
                ' ' +
                date[1].slice(0, 5);

            user.registered = newTime;
        });
        res.json(users);
    }
    async deleteUsers(req, res) {
        await User.destroy({ where: {} });

        return res.json({ message: 'users deleted' });
    }
}

module.exports = new UserController();
