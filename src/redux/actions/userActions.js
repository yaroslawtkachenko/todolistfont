import axios from 'axios';
import {getCookie, remCookie, setAuthCookies} from "../../actions/Token";
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
export const VALIDATE_TOKEN_FAILURE = 'VALIDATE_TOKEN_FAILURE';

// const url = 'http://localhost:3000/';
const url = 'https://api-ornull-list.herokuapp.com/';

function getAuth() {
    return {
        'access-token': getCookie('access-token'),
        'client': getCookie('client'),
        'uid': getCookie('uid')
    };
}

const remCok = (headers) => {
    remCookie('access-token', headers['access-token']);
    remCookie('client', headers['client']);
    remCookie('uid', headers['uid']);
};

export function validateToken() {
    return (dispatch) => {
        const headers = getAuth();
        if(headers){
            return axios.get(url + '/auth/validate_token', {headers: headers})
                .then((response) => {
                    if(response.status === 200){
                        setAuthCookies(response.headers);
                        dispatch(signInSuccess());
                        return Promise.resolve(response.data);
                    }
                }).catch((error) => {
                    dispatch(validateTokenFailure());
                    return Promise.reject(error);
                });
        }else {
            dispatch(validateTokenFailure());
        }
    }
}

export function signUp (email,password, confPasswordSU) {
    return (dispatch) => {
        return axios.post(url + 'auth', {
                email: email,
                password: password,
                password_confirmation: confPasswordSU,
                confirm_success_url: ''
            },
            {headers: {}})
            .then((response) => {
                if (response.status === 200) {
                    setAuthCookies(response.headers);
                    dispatch(signUpSuccess());
                    return Promise.resolve(response.data);
                }
            }).catch((error) => {
                dispatch(signUpFailure());
                return Promise.reject(error);
            });
    }
}

export function signIn (email, password) {
    return (dispatch) => {
        return axios.post(url + 'auth/sign_in', {
            email: email,
            password: password
        })
            .then((response) => {
                if (response.status === 200) {
                    setAuthCookies(response.headers);
                    dispatch(signInSuccess());
                    return Promise.resolve(response.data);
                }
            });
    }
}

export function signOut() {
    return (dispatch) => {
        return axios.delete(url + 'auth/sign_out', {headers: getAuth()})
            .then((response) => {
                if (response.status === 200) {
                    remCok(response.headers);
                    dispatch(signOutSuccess());
                    return Promise.resolve(response.data);
                }
            });
    }
}

function signInSuccess () {
    return {
        type: SIGN_IN_SUCCESS
    };
}

function signUpSuccess () {
    return {
        type: SIGN_UP_SUCCESS
    };
}

function signOutSuccess () {
    return {
        type: SIGN_OUT_SUCCESS
    }
}

function signUpFailure() {
    return {
        type: SIGN_UP_FAILURE
    }
}

function validateTokenFailure() {
    return {
        type: VALIDATE_TOKEN_FAILURE
    }
}
