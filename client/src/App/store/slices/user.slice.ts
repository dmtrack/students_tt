import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../interfaces/IUser';

interface IUserState {
    loading: boolean;
    error: string;
    users: IUser[];
}

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
            state.error = action.payload.message;
        },
    },
});

export default userSlice.reducer;
