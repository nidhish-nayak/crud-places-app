import { combineReducers } from 'redux';
import placesReducer from './placesReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
    places: placesReducer,
    users: usersReducer,
});

export default rootReducer;
