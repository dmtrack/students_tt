import React from 'react';
import { IUser } from '../interfaces/IUser';
import { User } from './User';
// import { ReactComponentProps } from 'react-router';

type UserState = {};

const UsersList = (users: IUser[], loading: boolean): JSX.Element => {
    return (
        <div className="user-list">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {users.length > 0 ? (
                        <table>
                            <thead style={{ color: '#ccc' }}>
                                <tr>
                                    <th>
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            checked={false}
                                        />
                                    </th>
                                    <th>id</th>
                                    <th>Nickname</th>
                                    <th>E-mail</th>
                                    <th>Registered</th>
                                    <th>Login</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users &&
                                    users.map((user) => (
                                        <User key={user.id} {...user} />
                                    ))}
                            </tbody>
                        </table>
                    ) : (
                        'no users'
                    )}
                </>
            )}
        </div>
    );
};

export { UsersList };
