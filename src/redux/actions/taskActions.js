import React, { Component} from 'react';
import axios from 'axios'
import {getCookie, setCookie} from "../../actions/Token";


export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS';
export const CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS';
export const UP_TASK_SUCCESS = 'UP_TASK_SUCCESS';
export const DOWN_TASK_SUCCESS = 'DOWN_TASK_SUCCESS';
export const CHANGE_TASK_STATUS_SUCCESS = 'CHANGE_TASK_STATUS_SUCCESS';

export function getTasks(listId) {
    return(dispatch) => {
        return axios.get('http://localhost:3000/v1/list_tasks/' + listId,
            {headers: getCookie()})
            .then((response) => {
                if (response.status === 200) {
                    setCookie(response);
                    dispatch(getTasksSuccess(response.data));
                    return Promise.resolve(response.data);
                }
            });
    }
}

export function createTask(listId, data) {
    return(dispatch) => {
        return axios.post('http://localhost:3000/v1/tasks',
            {task: {content: data, list_id: listId}},
            {headers: getCookie()})
            .then((response) => {
                if (response.status === 201) {
                    setCookie(response);
                    dispatch(createTaskSuccess(response.data));
                    return Promise.resolve(response.data);
                }
            });
    }
}

export function deleteTask(taskId) {
    return(dispatch) => {
    return axios.delete('http://localhost:3000/v1/tasks/' + taskId,
        {headers: getCookie()})
        .then((response) => {
            if(response.status === 200) {
                setCookie(response);
                dispatch(deleteTasksSuccess(response.data));
                return Promise.resolve(response.data);
            }
        });
    }
}

export function upTask(taskId) {
    return(dispatch) => {
        return axios.patch('http://localhost:3000/v1/tasks/' + taskId + '/up',
            {headers: getCookie()})
            .then((response) => {
                if (response.status === 200) {
                    setCookie(response);
                    dispatch(upTaskSuccess(response.data));
                    return Promise.resolve(response.data);
                }
            });
    }
}

export function downTask(taskId) {
    return(dispatch) => {
        return axios.patch('http://localhost:3000/v1/tasks/' + taskId + '/down',
            {headers: getCookie()})
            .then((response) => {
                if (response.status === 200) {
                    setCookie(response);
                    dispatch(downTaskSuccess(response.data));
                    return Promise.resolve(response.data);
                }
            });
    }
}

export function statusTask(taskId) {
    return(dispatch) => {
        return axios.patch('http://localhost:3000/v1/tasks/' + taskId + '/check',
            {headers: getCookie()})
            .then((response) => {
                if (response.status === 200) {
                    setCookie(response);
                    dispatch(changeTaskStatusSuccess(response.data));
                    return Promise.resolve(response.data);
                }
            });
    }
}

export function updateTask(taskId,data,listId) {
    return(dispatch) => {
        return axios.patch('http://localhost:3000/v1/tasks/' + taskId,
            {task: {content: data, list_id: listId}},
            {headers: getCookie()})
            .then((response) => {
                if (response.status === 200) {
                    setCookie(response);
                    dispatch(updateTaskSuccess(response.data));
                    return Promise.resolve(response.data);
                }
            });
    }
}

function createTaskSuccess(task) {
    return {
        type: CREATE_TASK_SUCCESS,
        payload: task
    }
}

function getTasksSuccess(tasks) {
    return {
        type: GET_TASKS_SUCCESS,
        payload: tasks
    }
}

function deleteTasksSuccess(task) {
    return {
        type: DELETE_TASK_SUCCESS,
        payload: task
    }
}

function updateTaskSuccess(task) {
    return {
        type: UPDATE_TASK_SUCCESS,
        payload: task
    }
}

function upTaskSuccess(task) {
    return {
        type: UP_TASK_SUCCESS,
        payload: task
    }
}

function downTaskSuccess(task) {
    return {
        type: DOWN_TASK_SUCCESS,
        payload: task
    }
}

function changeTaskStatusSuccess(task) {
    return {
        type: CHANGE_TASK_STATUS_SUCCESS,
        payload: task
    }
}
