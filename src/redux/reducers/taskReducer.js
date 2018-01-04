import '../actions/taskActions';
import {
    CHANGE_TASK_STATUS_SUCCESS,
    CREATE_TASK_SUCCESS, DELETE_TASK_SUCCESS, DOWN_TASK_SUCCESS, GET_TASKS_SUCCESS, UP_TASK_SUCCESS,
    UPDATE_TASK_SUCCESS
} from "../actions/taskActions";
import { SIGN_OUT_SUCCESS } from "../actions/userActions";

export default function taskReducer(state = [], action) {
    switch(action.type) {
        case CREATE_TASK_SUCCESS:
            return [...state,action.payload];
        case GET_TASKS_SUCCESS:
            return [...state,...action.payload];
        case UPDATE_TASK_SUCCESS:
            return state.map(task => task.id === action.payload.id ? action.payload : task);
        case DELETE_TASK_SUCCESS:
            return state.filter(task => task.id !== action.payload.id);
        case UP_TASK_SUCCESS:
        case DOWN_TASK_SUCCESS:
            return replaceTasks(state,action.payload,action.listId);
        case CHANGE_TASK_STATUS_SUCCESS:
            return state.map(task => task.id === action.payload.id ? action.payload : task);
        case SIGN_OUT_SUCCESS:
            return [];
    }
    return state;
}

function replaceTasks(state,payload,listId) {
    const tasks = state.filter(task => listId !== task.list_id);
    return [...tasks, ...payload];
}