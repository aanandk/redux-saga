import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
// import { all, call, put, takeLatest, takeEvery } from 'redux-saga/effects';
// import { GET_USERS_FAILED, GET_USERS_REQUESTED, GET_USERS_SUCCESS } from '../actions/actionTypes';
import { ADD_USER_REQUEST, ADD_USER_SUCCESS, DELETE_USER_FAILED, DELETE_USER_REQUEST, DELETE_USER_SUCCESS, EDIT_USER_FAILED, EDIT_USER_REQUEST, EDIT_USER_SUCCESS, GET_SINGLE_USER, GET_SINGLE_USER_FAILED, GET_SINGLE_USER_SUCCESS, GET_USERS_REQUESTED } from '../actions/actionTypes';
import { usersFailed, usersSuccess } from '../actions/users';

const apiUrl = `https://jsonplaceholder.typicode.com/users`;

function getApi() {
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
        .catch(error => { throw error })
}

function* fetchUsers(action) {
    try {
        const users = yield call(getApi);
        // yield put({ type: GET_USERS_SUCCESS, users: users })
        yield put(usersSuccess(users));
    } catch (error) {
        // yield put({ type: GET_USERS_FAILED, message: error.message })
        yield put(usersFailed(error));
    }
}

function* getSingleUser({ id }) {
    // console.log('TRIG', id)
    try {
        let user = yield call(axios.get, apiUrl + '/' + id);
        // console.log('user--', user.data)
        yield put({ type: GET_SINGLE_USER_SUCCESS, data: user.data });
    } catch (error) {
        yield put({ type: GET_SINGLE_USER_FAILED, message: error.message });
    }
}

function* addUser({ payload }) {
    try {
        let users = yield call(axios.post, apiUrl, payload);
        // console.log('add user--', users.data)
        yield put({ type: ADD_USER_SUCCESS, data: users.data });
    } catch (error) {

    }
}

function* deleteUser({ id }) {
    // console.log('d-id', id)
    try {
        let user = yield call(axios.delete, apiUrl + '/' + id);
        console.log('ss--', user)
        yield put({ type: DELETE_USER_SUCCESS, user: id });
    } catch (error) {
        // console.log('err', error)
        yield put({ type: DELETE_USER_FAILED, message: error.message });
    }
}

function* editUser({ payload }) {
    // console.log('----', payload, payload.id)
    try {
        let response = yield call(axios.put, apiUrl + '/' + payload.id, payload)
        response = { ...response, ...response.data, [response.data.a]: 1001 }
        // console.log('user-edited', response)
        yield put({ type: EDIT_USER_SUCCESS, data: response.data })
    } catch (error) {
        yield put({ type: EDIT_USER_FAILED, message: error.message })
    }
}

function* watchUsers() {
    // yield all([
    yield takeEvery(GET_USERS_REQUESTED, fetchUsers);
    yield takeEvery(GET_SINGLE_USER, getSingleUser);
    yield takeEvery(ADD_USER_REQUEST, addUser);
    yield takeEvery(DELETE_USER_REQUEST, deleteUser);
    yield takeEvery(EDIT_USER_REQUEST, editUser)
    // ]);
}

export default watchUsers;