import {
    CHANGE_TASK_STATUS_SUCCESS,
    CREATE_TASK_SUCCESS, DELETE_TASK_SUCCESS, DOWN_TASK_SUCCESS, GET_TASKS_SUCCESS, UP_TASK_SUCCESS,
    UPDATE_TASK_SUCCESS
} from "../actions/taskActions";

export default function taskReducer(state = [], action) {
    switch(action.type) {
        case CREATE_TASK_SUCCESS:
            return [...state,action.payload];
        case GET_TASKS_SUCCESS:
            return [...state,...action.payload];
        case UPDATE_TASK_SUCCESS:
            return [...state, state.tasks.map(task => task.id === action.payload.id ? action.payload : task)];
        case DELETE_TASK_SUCCESS:
            return [...state, state.tasks.filter(task => task.id !== action.payload.id)];
        case UP_TASK_SUCCESS:
            return [...state, state.tasks.map(task => task.id === action.payload.id ? action.payload : task)];
        case DOWN_TASK_SUCCESS:
            return [...state, state.tasks.map(task => task.id === action.payload.id ? action.payload : task)];
        case CHANGE_TASK_STATUS_SUCCESS:
            return [...state, state.tasks.map(task => task.id === action.payload.id ? action.payload : task)];
    }
}