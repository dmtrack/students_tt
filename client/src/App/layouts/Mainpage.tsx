import React, { useEffect } from 'react';
import { UsersList } from '../components/Userslist';
import { useAppDispatch, useAppSelector } from '../hook/redux';
import { fetchUsers } from '../store/actions/userActions';

export function MainPage() {
    const dispatch = useAppDispatch();
    const { users, loading, error } = useAppSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <>
            {loading && <p className="text-center text-lg">Loading...</p>}
            {error && (
                <p className="pt-10 text-center text-lg text-red-500">
                    {error}
                </p>
            )}

            <div className="container mx-auto  pt-5">
                <UsersList users={users} />
            </div>
        </>
    );
}
