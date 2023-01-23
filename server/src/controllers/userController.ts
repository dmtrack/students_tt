import { RequestHandler } from 'express';
import { User } from '../models/users';

export const updateUser: RequestHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        await User.update({ ...req.body }, { where: { id } });
        const updatedUser: User | null = await User.findByPk(id);
        return res.status(200).json({
            message: `user with id: ${id} was updated`,
            data: updatedUser,
        });
    } catch (err: any) {
        return err.message;
    }
};

export const signUp: RequestHandler = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user: User | null = await User.findOne({
            where: { email: email },
        });
        if (!user) {
            let user = await User.create({ ...req.body });
            return res.status(200).json({
                message: `user with id:${user.id} was succesfully signed up`,
                data: user,
            });
        } else throw Error;
    } catch (err: any) {
        return res.status(409).json({
            error: 409,
            message: `user with email: ${req.body.email} is already exist`,
        });
    }
};

export const signIn: RequestHandler = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user: User | null = await User.findOne({
            where: { email: email },
        });
        if (user) {
            await User.update({ login: 'today1' }, { where: { email: email } });
            return res.status(200).json({
                message: `user with id: ${user.id} was signed in`,
                data: user,
            });
        } else throw Error;
    } catch (err: any) {
        return res.status(401).json({
            error: 401,
            message: `${err.message}`,
        });
    }
};

export const toggleStatus: RequestHandler = async (req, res, next) => {
    const params = req.body;
    console.log('PUT PUT PUT!!!!', params);

    try {
        req.body.forEach(async (id: string) => {
            const user = await User.findByPk(id);
            if (user) {
                await User.update(
                    { blocked: !user.blocked },
                    { where: { id } }
                );
                const updatedUser: User | null = await User.findByPk(id);
            }
        });
        return res.status(200).json({
            message: `user's status with id are changed`,
            id: req.body,
        });
    } catch (err: any) {
        return res.status(404).json({
            error: 404,
            message: `${err.message}`,
        });
    }
};

export const deleteUser: RequestHandler = async (req, res, next) => {
    try {
        req.body.forEach(async (id: string) => {
            await User.destroy({ where: { id } });
        });
        return res.status(200).json({
            message: `users status with ids are deleted`,
            id: req.body,
        });
    } catch (err: any) {
        return err.message;
    }
};

export const createUser: RequestHandler = async (req, res, next) => {
    try {
        let user = await User.create({ ...req.body });
        return res
            .status(200)
            .json({ message: 'user created succesfully', data: user });
    } catch (err: any) {
        return err.message;
    }
};

export const getAllUsers: RequestHandler = async (req, res, next) => {
    try {
        const allUsers: User[] = await User.findAll();
        return res
            .status(200)
            .json({ message: `users fetched successfully`, data: allUsers });
    } catch (err: any) {
        return err.message;
    }
};

export const getUserById: RequestHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user: User | null = await User.findByPk(id);
        return res
            .status(200)
            .json({ message: `user with id: ${id} was fetched`, data: user });
    } catch (err: any) {
        return err.message;
    }
};
