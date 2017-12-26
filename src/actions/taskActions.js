import React, { Component} from 'react';
import axios from 'axios'
import {getCookie, setCookie} from "./Token";

export function getTasks(listId) {
    return axios.get('http://localhost:3000/v1/list_tasks/' + listId, {headers: {}})
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
    return axios.delete('http://localhost:3000/v1/tasks/' + taskId, {headers: {}})
        .then((response) => {
            if(response.status === 200) {
                return Promise.resolve(response.data);
            }
        })
}

export function upTask(taskId) {
    return axios.patch('http://localhost:3000/v1/tasks/' + taskId + '/up', {headers: {}})
        .then((response) => {
            if(response.status === 200) {
                return Promise.resolve(response.data);
            }
        })
}

export function downTask(taskId) {
    return axios.patch('http://localhost:3000/v1/tasks/' + taskId + '/down', {headers: {}})
        .then((response) => {
            if(response.status === 200) {
                return Promise.resolve(response.data);
            }
        })
}

export function statusTask(taskId) {
    return axios.patch('http://localhost:3000/v1/tasks/' + taskId + '/check', {headers: {}})
        .then((response) => {
            if(response.status === 200) {
                return Promise.resolve(response.data);
            }
        })
}

export function updateTask(taskId,data,listId) {
    return axios.patch('http://localhost:3000/v1/tasks/'+taskId,{task: {content: data,list_id: listId}} ,{headers: {}})
        .then((response) => {
            if(response.status === 200) {
                return Promise.resolve(response.data);
            }
        })
}
