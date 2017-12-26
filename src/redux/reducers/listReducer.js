import {CREATE_LIST_SUCCESS, DELETE_LIST_SUCCESS, GET_LISTS_SUCCESS, UPDATE_LIST_SUCCESS} from "../actions/listActions";

export default function listReducer(state = [], action) {
    switch(action.type) {
        case CREATE_LIST_SUCCESS:
            return [...state, action.payload];
        case GET_LISTS_SUCCESS:
            return [...state,...action.payload];
        case UPDATE_LIST_SUCCESS:
            return [...state, state.lists.map(list => list.id === action.payload.id ? action.payload : list)];
        case DELETE_LIST_SUCCESS:
            return [...state, state.lists.filter(list => list.id !== action.payload.id )];
    }
    return state;
}