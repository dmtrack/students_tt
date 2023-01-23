import React, { useEffect } from 'react';
import { UsersList } from '../components/Userslist';
import { useAppDispatch, useAppSelector } from '../hook/redux';
import { IUser, UsersListProps } from '../interfaces//IUser';
import { fetchUsers } from '../store/actions/userActions';

type MainPageProps = {
    users: IUser[];
};

export function MainPage() {
    const dispatch = useAppDispatch();
    const { users, loading, error } = useAppSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <div className="container mx-auto  pt-5">
            <UsersList users={users} loading={false} />
        </div>
    );
}
