import React, { Component} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import {setCookie, getCookie } from "./Token";

// const url = 'http://localhost:3000/';
const url = 'https://api-ornull-list.herokuapp.com/';

export function signUp (email,password, confPasswordSU) {
    return axios.post(url + 'auth', {
        email: email,
        password: password,
        password_confirmation: confPasswordSU,
        confirm_success_url: ''},
        {headers: {}})
        .then((response) => {
            if (response.status === 200) {
                setCookie(response);
                return Promise.resolve(response.data);
            }
        });
}

export function signIn (email, password) {
    return axios.post(url + 'auth/sign_in', {
        email: email,
        password: password})
        .then((response) => {
            if (response.status === 200) {
                setCookie(response);
                return Promise.resolve(response.data);
            }
        });
}

export function signOut() {
    return axios.delete(url+ 'auth/sign_out', {headers: getCookie()})
        .then((response) => {
            if (response.status === 200) {
                Cookies.remove('auth_token');
                return Promise.resolve(response.data);
            }
        });
}
