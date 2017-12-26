import React, { Component} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import {setCookie, getCookie } from "./Token";

export function signUp (data) {
    return axios.post('http://localhost:3000/auth',
        data,{headers: {}})
        .then((response) => {
            if (response.status === 200) {
                return Promise.resolve(response.data);
            }
        });
}

export function signIn (email, password) {
    return axios.post('http://localhost:3000/auth/sign_in', {
        email: email,
        password: password},
        {header: {}})
        .then((response) => {
            if (response.status === 200) {
                return Promise.resolve(response.data);
            }
        });
}

export function signOut() {
    return axios.delete('http://localhost:3000/auth/sign_out', {headers: getCookie()})
        .then((response) => {
            if (response.status === 200) {
                Cookies.remove('auth_token');
                return Promise.resolve(response.data);
            }
        });
}