import userReducer from './userReducer';
import skillReducer from './skillReducer';
import goalReducer from './goalReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    user: userReducer,
    skill: skillReducer,
    goal: goalReducer
})