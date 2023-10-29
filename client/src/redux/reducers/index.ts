import { combineReducers } from 'redux';
import modalReducer from './modalSlice';

const rootReducer = combineReducers({
    modal: modalReducer,
});

export default rootReducer;
