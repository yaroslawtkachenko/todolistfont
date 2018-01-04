import {CREATE_LIST_SUCCESS, DELETE_LIST_SUCCESS, GET_LISTS_SUCCESS, UPDATE_LIST_SUCCESS} from "../actions/listActions";
import { SIGN_OUT_SUCCESS } from "../actions/userActions";

export default function listReducer(state = [], action) {
    switch(action.type) {
        case CREATE_LIST_SUCCESS:
            return [...state, action.payload];
        case GET_LISTS_SUCCESS:
            return [...state,...action.payload];
        case UPDATE_LIST_SUCCESS:
            return state.map(list => list.id === action.payload.id ? action.payload : list);
        case DELETE_LIST_SUCCESS:
            return state.filter(list => list.id !== action.payload.id);
        case SIGN_OUT_SUCCESS:
            return [];
    }
    return state;
}
