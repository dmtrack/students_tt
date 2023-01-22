import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user.slice';

const rootReducer = combineReducers({
    users: userReducer,
});

export function setupStore() {
    return configureStore({
        reducer: rootReducer,
    });
}
