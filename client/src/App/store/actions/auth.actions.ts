import { authSlice } from './../slices/auth.slice';
import { AppDispatch } from '..';
import axios from '../../axios';
import { IError } from '../../interfaces/IAuth';

interface IAuthResponse {
    nickname: string;
}

interface IAuthData {
    nickname: string;
    email: string;
    registered: string;
    login: string;
}

const URL = process.env.REACT_APP_BASE_URL;

export const register = (data: IAuthData) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios
                .post<IAuthResponse>(URL + '/signup', data)
                .then((data) => console.log('data', data));

            dispatch(
                authSlice.actions.signIn({
                    username: data.nickname,
                    access: '123access',
                })
            );
        } catch (e) {
            dispatch(authSlice.actions.fetchError(e as IError));
        }
    };
};
