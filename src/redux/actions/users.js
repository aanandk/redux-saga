import { ADD_USER_REQUEST, DELETE_USER_REQUEST, EDIT_USER_REQUEST, GET_SINGLE_USER, GET_USERS_FAILED, GET_USERS_REQUESTED, GET_USERS_SUCCESS, MODAL_STATUS } from "./actionTypes"

export const getUsers = users => {
    return {
        type: GET_USERS_REQUESTED,
        payload: users
    }
}

export const usersSuccess = users => {
    return {
        type: GET_USERS_SUCCESS,
        payload: users
    }
}

export const usersFailed = message => {
    return {
        type: GET_USERS_FAILED,
        payload: message
    }
}

export const getSingleUser = (id) => {
    return {
        type: GET_SINGLE_USER,
        id
    }
}

export const addUser = user => {
    return {
        type: ADD_USER_REQUEST,
        payload: user
    }
}

export const deleteUser = id => {
    return {
        type: DELETE_USER_REQUEST,
        id
    }
}

export const editUser = user => {
    return {
        type: EDIT_USER_REQUEST,
        payload: user
    }
}

export const modalStatus = status => {
    return {
        type: MODAL_STATUS,
        payload: status
    }
}