import React, { Component} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import {getCookie, setCookie} from "../../actions/Token";
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';

// const url = 'http://localhost:3000/';
const url = 'https://api-ornull-list.herokuapp.com/';

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
                    setCookie(response);
                    dispatch(signInSuccess());
                    return Promise.resolve(response.data);
                }
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
                    setCookie(response);
                    dispatch(signUpSuccess());
                    return Promise.resolve(response.data);
                }
            });
    }
}

export function signOut() {
    return (dispatch) => {
        return axios.delete(url + 'auth/sign_out', {headers: getCookie()})
            .then((response) => {
                if (response.status === 200) {
                    Cookies.remove('auth_token');
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