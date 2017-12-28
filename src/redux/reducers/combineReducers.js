import { combineReducers } from 'redux';
import lists from "./listReducer";
import tasks from "./taskReducer";
import user from "./userReducer";

export default combineReducers (
    {
        lists,
        tasks,
        user
    }
);