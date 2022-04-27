import { SET_IS_AUTH, SET_USER, USER_LOGOUT } from "./consts"

const initialState = {
    isAuth: false,
    user: {}
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.payload.auth,
                user: action.payload.user
            }
        case USER_LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                isAuth: false,
                user: {}
            }
        default:
            return state
    }
}