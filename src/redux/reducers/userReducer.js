
import {SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS, SIGN_UP_SUCCESS } from "../actions/userActions";

const initialState = {isSignedIn: false};

export default function userReducer(state = initialState,action) {
    switch (action.type) {
        case SIGN_IN_SUCCESS:
            return {isSignedIn:true};
        case SIGN_OUT_SUCCESS:
            return initialState;
        case SIGN_UP_SUCCESS:
            return {...state, isSignedIn: true};
        default:
            return state;
    }
}