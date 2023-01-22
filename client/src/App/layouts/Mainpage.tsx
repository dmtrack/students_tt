import React from 'react';
import { UsersList } from '../components/Userslist';
import { IUser } from '../interfaces//IUser';

type MainPageProps = {
    users: IUser[];
};

const MainPage = (): JSX.Element => {
    const users: IUser[] = [
        {
            id: 1,
            nickname: 'dmtrack',
            email: 'dmtrack.dev@gmail.com',
            registered: '17.01.1986',
            login: '22.01.23',
            blocked: false,
        },
    ];
    return (
        <div className="container mx-auto max-w-lg pt-5">
            <UsersList users={users} loading={false} />
        </div>
    );
};

export { MainPage };
