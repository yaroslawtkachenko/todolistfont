import React, { Component} from 'react';
import axios from 'axios'

export function createList (data) {
    return axios.post('http://localhost:3000/v1/lists', {list: {label: data}},{headers: {}})
        .then((response) => {
            if(response.status === 201) {
                return Promise.resolve(response.data);
            }
        });
}

export function getLists () {
    return axios.get('http://localhost:3000/v1/lists', {headers: {}})
        .then((response) => {
            if(response.status === 200) {
                return Promise.resolve(response.data);
            }
        });
}

export function deleteList(listId) {
    return axios.delete('http://localhost:3000/v1/lists/'+listId, {headers: {}})
        .then((response) => {
            if(response.status === 200) {
                return Promise.resolve(response.data);
            }
        });
}