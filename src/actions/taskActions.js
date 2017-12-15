import React, { Component} from 'react';
import axios from 'axios'

export function getTasks() {
    return axios.get('http://localhost:3000/v1/tasks', {headers: {}})
        .then((response) => {
            if(response.status === 200) {
                return Promise.resolve(response.data);
            }
        });
}

export function createTask(data, listId) {
    return axios.post('http://localhost:3000/v1/tasks', {task: {content: data,list_id: listId}}, {headers: {}})
        .then((response) => {
            if(response.status === 201) {
                return Promise.resolve(response.data);
            }
        });
}

export function deleteTask(taskId) {
    return axios.delete('http://localhost:3000/v1/tasks', taskId, {headers: {}})
        .then((response) => {
            if(response.status === 200) {
                return Promise.resolve(response.data);
            }
        })
}