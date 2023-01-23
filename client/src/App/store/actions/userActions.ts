import { userSlice } from './../slices/user.slice';
import { AppDispatch } from '..';
import axios from '../../axios';
import { IServerResponce, IUser } from '../../interfaces/IUser';

export const fetchUsers = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(userSlice.actions.fetching());
            const response = await axios.get<IServerResponce<IUser>>(
                'getusers'
            );
            dispatch(userSlice.actions.fetchSuccess(response.data.data));
        } catch (e) {
            userSlice.actions.fetchError(e as Error);
        }
    };
};

// export const toggleUsers = (params: []) => {
//     return async (dispatch: AppDispatch) => {
//         try {
//             const response = await axios.put<IServerResponce<[]>>(
//                 'toggleusers',
//                 params,
//                 axiosConfig
//             );
//             console.log('response', response);
//         } catch (e) {
//             userSlice.actions.fetchError(e as Error);
//         }
//     };
// };
