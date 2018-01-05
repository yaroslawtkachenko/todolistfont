import axios from 'axios'
import {getCookie, setAuthCookies} from "../../actions/Token";


export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS';
export const CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS';
export const UP_TASK_SUCCESS = 'UP_TASK_SUCCESS';
export const DOWN_TASK_SUCCESS = 'DOWN_TASK_SUCCESS';
export const CHANGE_TASK_STATUS_SUCCESS = 'CHANGE_TASK_STATUS_SUCCESS';

// const url = 'http://localhost:3000/';
const url = 'https://api-ornull-list.herokuapp.com/';

function getAuth() {
    return {
        'access-token': getCookie('access-token'),
        'client': getCookie('client'),
        'uid': getCookie('uid')
    };
}

export function getTasks(listId) {
    return(dispatch) => {
        return axios.get(url+'/v1/list_tasks/' + listId,
            {headers: getAuth()})
            .then((response) => {
                if (response.status === 200) {
                    setAuthCookies(response.headers);
                    dispatch(getTasksSuccess(response.data));
                    return Promise.resolve(response.data);
                }
            });
    }
}

export function createTask(listId, data) {
    return(dispatch) => {
        return axios.post(url+'/v1/tasks',
            {task: {content: data, list_id: listId}},
            {headers: getAuth()})
            .then((response) => {
                if (response.status === 201) {
                    setAuthCookies(response.headers);
                    dispatch(createTaskSuccess(response.data));
                    return Promise.resolve(response.data);
                }
            });
    }
}

export function deleteTask(taskId) {
    return(dispatch) => {
    return axios.delete(url+'/v1/tasks/' + taskId,
        {headers: getAuth()})
        .then((response) => {
            if(response.status === 200) {
                setAuthCookies(response.headers);
                dispatch(deleteTasksSuccess(response.data));
                return Promise.resolve(response.data);
            }
        });
    }
}

export function upTask(taskId,listId) {
    return(dispatch) => {
        return axios.patch(url+'/v1/tasks/' + taskId + '/up', {},
            {headers: getAuth()})
            .then((response) => {
                if (response.status === 200) {
                    setAuthCookies(response.headers);
                    dispatch(upTaskSuccess(response.data,listId));
                    return Promise.resolve(response.data);
                }
            });
    }
}

export function downTask(taskId,listId) {
    return(dispatch) => {
        return axios.patch(url+'/v1/tasks/' + taskId + '/down', {},
            {headers: getAuth()})
            .then((response) => {
                if (response.status === 200) {
                    setAuthCookies(response.headers);
                    dispatch(downTaskSuccess(response.data,listId));
                    return Promise.resolve(response.data);
                }
            });
    }
}

export function statusTask(taskId) {
    return(dispatch) => {
        return axios.patch(url+'/v1/tasks/' + taskId + '/check',{},
            {headers: getAuth()})
            .then((response) => {
                if (response.status === 200) {
                    setAuthCookies(response.headers);
                    dispatch(changeTaskStatusSuccess(response.data));
                    return Promise.resolve(response.data);
                }
            });
    }
}

export function updateTask(taskId,data,listId) {
    return(dispatch) => {
        return axios.patch(url+'/v1/tasks/' + taskId,
            {task: {content: data, list_id: listId}},
            {headers: getAuth()})
            .then((response) => {
                if (response.status === 200) {
                    setAuthCookies(response.headers);
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

function upTaskSuccess(task,listId) {
    return {
        type: UP_TASK_SUCCESS,
        payload: task,
        listId: listId
    }
}

function downTaskSuccess(task,listId) {
    return {
        type: DOWN_TASK_SUCCESS,
        payload: task,
        listId: listId
    }
}

function changeTaskStatusSuccess(task) {
    return {
        type: CHANGE_TASK_STATUS_SUCCESS,
        payload: task
    }
}
