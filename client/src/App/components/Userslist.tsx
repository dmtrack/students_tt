import axios from 'axios';
import React, { useRef, useState } from 'react';

import { IUser, IServerResponce } from '../interfaces/IUser';
import Button from './button';
import { User } from './User';

interface IUsersListProps {
    users: IUser[];
    loading: boolean;
}
const URL = process.env.REACT_APP_BASE_URL;

const UsersList = ({ users, loading }: IUsersListProps) => {
    const [dataId, setDataId] = useState<Array<any>>([]);
    const [checked, setChecked] = useState(false);

    async function toggleStatus(params: number[]) {
        try {
            const res = await axios.put(URL + '/togglestatus', { params });
        } catch (e) {
            console.log(e as Error);
        }
    }

    async function handleDelete(params: number[]) {
        try {
            const res = await axios.delete(URL + '/deleteuser', {
                data: { params: params },
            });
            console.log(res);
        } catch (e) {
            console.log(e as Error);
        }
    }

    function handleChange(): void {
        setChecked((prevState) => !prevState);
        if (dataId.length !== users.length) {
            const idCollection: number[] = [];
            users.forEach((u) => {
                idCollection.push(u.id);
            });
            setDataId(idCollection);
        } else setDataId([]);
    }

    return (
        <div className="user-list">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <div className="flex justify-end">
                        <Button
                            onClick={() => toggleStatus(dataId)}
                            variant="warning"
                            size="sm"
                        >
                            status
                        </Button>
                        <Button
                            onClick={() => handleDelete(dataId)}
                            variant="danger"
                            size="sm"
                        >
                            delete
                        </Button>
                    </div>
                    {users.length > 0 ? (
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            <input
                                                type="checkbox"
                                                className="checkbox"
                                                checked={checked}
                                                onChange={handleChange}
                                            />
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            id
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Nickname
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            E-mail
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Registered
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Login
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users &&
                                        users.map((user) => (
                                            <User
                                                key={user.id}
                                                user={user}
                                                dataId={dataId}
                                                setDataId={setDataId}
                                            />
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        'no users'
                    )}
                </>
            )}
        </div>
    );
};

export { UsersList };
