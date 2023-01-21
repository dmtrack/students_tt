import { RequestHandler } from 'express';
import { User } from '../models/users';

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

export const deleteUser: RequestHandler = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedUser: User | null = await User.findByPk(id);
        await User.destroy({ where: { id } });
        return res.status(200).json({
            message: `user with id: ${id} was succesfully deleted`,
            data: deleteUser,
        });
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
