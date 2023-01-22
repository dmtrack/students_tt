import React from 'react';
import { IUser } from '../interfaces/IUser';

function User(user: IUser) {
    const { id, nickname, email, registered, login, blocked } = user;

    return (
        <>
            <tr>
                <td>
                    <input
                        type="checkbox"
                        className="checkbox"
                        checked={false}
                    />
                </td>
                <td
                    style={{
                        textAlign: 'center',
                        width: '50px',
                        height: '30px',
                    }}
                >
                    {id}
                </td>
                <td style={{ textAlign: 'center', width: '100px' }}>
                    {nickname}
                </td>
                <td style={{ textAlign: 'center', width: '100px' }}>{email}</td>
                <td style={{ textAlign: 'center', width: '150px' }}>
                    {registered}
                </td>
                <td style={{ textAlign: 'center', width: '100px' }}>
                    {status}
                </td>
            </tr>
        </>
    );
}

export { User };
