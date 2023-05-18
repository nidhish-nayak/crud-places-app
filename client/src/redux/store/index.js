import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';

const store = configureStore({
    reducer: rootReducer,
    middleware: [], // Add any middleware you want to use
});

export default store;
