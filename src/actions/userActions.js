import React, { Component} from 'react';
import axios from 'axios'

export function createUser (data) {
    return axios.post('http://localhost:3000/auth', data,{headers: {}})
        .then((response) => {
            if (response.status === 200) {
                return Promise.resolve(response.data);
            }
        });
}

export function loginUser (email, password) {
    return axios.post('http://localhost:3000/auth/sign_in', {email: email, password: password}, {header: {}})
        .then((response) => {
            if (response.status === 200) {
                return Promise.resolve(response.data);
            }
        });
}