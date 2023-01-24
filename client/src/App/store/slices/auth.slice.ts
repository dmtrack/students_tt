import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError } from '../../interfaces/IAuth';

interface IAuthState {
    access: string;
    username: string;
    isAuth: boolean;
    error: string;
}
interface IAuthPayload {
    username: string;
    access: string;
}

const initialState: IAuthState = {
    access: '',
    username: ' ',
    isAuth: false,
    error: '',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn(state, action: PayloadAction<IAuthPayload>) {
            state.access = action.payload.access;
            state.username = action.payload.username;
            state.isAuth = Boolean(action.payload.access);
        },
        fetchError(state, action: PayloadAction<IError>) {
            state.error = action.payload.response.data.message;
        },
    },
});

export default authSlice.reducer;
