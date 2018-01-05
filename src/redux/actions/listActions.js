import axios from 'axios'
import {getCookie, setAuthCookies} from "../../actions/Token";
export const CREATE_LIST_SUCCESS = 'CREATE_LIST_SUCCESS';
export const GET_LISTS_SUCCESS = 'GET_LISTS_SUCCESS';
export const DELETE_LIST_SUCCESS = 'DELETE_LIST_SUCCESS';
export const UPDATE_LIST_SUCCESS = 'UPDATE_LIST_SUCCESS';

// const url = 'http://localhost:3000/';
const url = 'https://api-ornull-list.herokuapp.com/';

function getAuth() {
    return {
        'access-token': getCookie('access-token'),
        'client': getCookie('client'),
        'uid': getCookie('uid')
    };
}

export function createList (data) {
    return(dispatch) => {
        return axios.post(url+'/v1/lists', {list: {label: data}}, {headers: getAuth()})
            .then((response) => {
                if (response.status === 201) {
                    setAuthCookies(response.headers);
                    dispatch(createListSuccess(response.data));
                    return Promise.resolve(response.data);
                }
            });
    }
}

export function getLists () {
    return(dispatch) => {
        return axios.get(url+'/v1/lists', {headers: getAuth()})
            .then((response) => {
                if (response.status === 200) {
                    setAuthCookies(response.headers);
                    dispatch(getListsSuccess(response.data));
                    return Promise.resolve(response.data);
                }
            });
    }
}

export function deleteList(listId) {
    return(dispatch) => {
        return axios.delete(url+'/v1/lists/' + listId, {headers: getAuth()})
            .then((response) => {
                if (response.status === 200) {
                    setAuthCookies(response.headers);
                    dispatch(deleteListSuccess(response.data));
                    return Promise.resolve(response.data);
                }
            });
    }
}

export function updateList(listId, data) {
    return(dispatch) => {
        return axios.patch(url+'v1/lists/' + listId, {list: {label: data}}, {headers: getAuth()})
            .then((response) => {
                if (response.status === 200) {
                    setAuthCookies(response.headers);
                    dispatch(updateListSuccess(response.data));
                    return Promise.resolve(response.data);
                }
            });
    }
}

function createListSuccess(list) {
    return {
        type: CREATE_LIST_SUCCESS,
        payload: list
    }
}

function getListsSuccess(lists) {
    return {
        type: GET_LISTS_SUCCESS,
        payload: lists
    }
}

function updateListSuccess(list) {
    return {
        type: UPDATE_LIST_SUCCESS,
        payload: list
    }
}

function deleteListSuccess(list) {
    return {
        type: DELETE_LIST_SUCCESS,
        payload: list
    }
}