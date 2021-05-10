import { combineReducers } from 'redux';

import taskReducer from './task/taskReducer';



const rootReducer = combineReducers({
    tasks: taskReducer,
})


export default rootReducer;