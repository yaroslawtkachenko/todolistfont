import React, { Component} from 'react';
import axios from 'axios'
import {getCookie, setCookie} from "../../actions/Token";

export const CREATE_LIST_SUCCESS = 'CREATE_LIST_SUCCESS';
export const GET_LISTS_SUCCESS = 'GET_LISTS_SUCCESS';
export const DELETE_LIST_SUCCESS = 'DELETE_LIST_SUCCESS';
export const UPDATE_LIST_SUCCESS = 'UPDATE_LIST_SUCCESS';

export function createList (data) {
    return(dispatch) => {
        return axios.post('http://localhost:3000/v1/lists', {list: {label: data}}, {headers: getCookie()})
            .then((response) => {
                if (response.status === 201) {
                    setCookie(response);
                    dispatch(createListSuccess(response.data));
                    return Promise.resolve(response.data);
                }
            });
    }
}

export function getLists () {
    return(dispatch) => {
        return axios.get('http://localhost:3000/v1/lists', {headers: getCookie()})
            .then((response) => {
                if (response.status === 200) {
                    setCookie(response);
                    dispatch(getListsSuccess(response.data));
                    return Promise.resolve(response.data);
                }
            });
    }
}

export function deleteList(listId) {
    return(dispatch) => {
        return axios.delete('http://localhost:3000/v1/lists/' + listId, {headers: getCookie()})
            .then((response) => {
                if (response.status === 200) {
                    setCookie(response);
                    dispatch(deleteListSuccess(response.data));
                    return Promise.resolve(response.data);
                }
            });
    }
}

export function updateList(listId, data) {
    return(dispatch) => {
        return axios.patch('http://localhost:3000/v1/lists/' + listId, {list: {label: data}}, {headers: getCookie()})
            .then((response) => {
                if (response.status === 200) {
                    setCookie(response);
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

