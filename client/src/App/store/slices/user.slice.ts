import { logOut } from './../actions/auth.actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
import { DeleteUserProp, IUser, IUserState } from '../../interfaces/IUser';

const initialState: IUserState = {
    loading: false,
    error: '',
    users: [],
};

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchSuccess(state, action: PayloadAction<IUser[]>) {
            state.loading = false;
            state.users = action.payload;
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message + ': ' + action.payload?.cause;
        },
        deleteUser(state, action: PayloadAction<DeleteUserProp>) {
            action.payload.forEach((id) => {
                state.users = state.users.filter(
                    (user) => user.id !== Number(id)
                );
            });
        },
        toggleStatus(state, action: PayloadAction<DeleteUserProp>) {
            action.payload.forEach((id) => {
                state.users.forEach((user) => {
                    if (user.id === Number(id)) {
                        user.blocked = !user.blocked;
                    }
                });
            });
        },
    },
});

export default userSlice.reducer;
