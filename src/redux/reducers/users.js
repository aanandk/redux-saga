import { ADD_USER_SUCCESS, DELETE_USER_FAILED, DELETE_USER_SUCCESS, EDIT_USER_SUCCESS, GET_SINGLE_USER_FAILED, GET_SINGLE_USER_SUCCESS, GET_USERS_FAILED, GET_USERS_REQUESTED, GET_USERS_SUCCESS, MODAL_STATUS } from "../actions/actionTypes";

const initialState = {
    users: [],
    loading: false,
    error: null,
    user: {},
    modalShow: false
}

const usersReducer = (state = initialState, action) => {
    const { type, payload/*, users,*/, user, data, message } = action;
    console.log(action, data)
    switch (type) {
        case GET_USERS_REQUESTED:
            return {
                ...state, loading: true
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: payload
            }
        case GET_USERS_FAILED:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case ADD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: [...state.users, data]
            }
        case GET_SINGLE_USER_SUCCESS:
            return {
                ...state, user: data
            }
        case GET_SINGLE_USER_FAILED:
            return {
                ...state, message: message
            }
        case DELETE_USER_SUCCESS:
            return {
                ...state, users: state.users.filter(st => st.id !== user)
            }
        case DELETE_USER_FAILED:
            return { ...state, message: message }
        case EDIT_USER_SUCCESS:
            // console.log('EDIT_USER_SUCCESS-----', action)
            let users = [...state.users]
            let index = users.findIndex(user => user.id === data.id)
            // let updatedUsers = users.splice(index, 1, data)
            users[index] = data
            // console.log('updatedUsers-----', state.users)
            return {
                ...state,
                loading: false,
                users: users,
                modalShow: false
            }
        case MODAL_STATUS:
            return {
                ...state, modalShow: payload
            }
        default:
            return state;
    }
}

export default usersReducer;