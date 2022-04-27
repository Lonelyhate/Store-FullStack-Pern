import { ACTIVE_TYPE, CREATE_TYPE, SET_TYPES } from "./consts"

const initialState = {
    types: [],
    typeActive: ''
}

export const typesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TYPES:
            return {
                ...state,
                types: action.payload
            }
        case ACTIVE_TYPE:
            return {
                ...state,
                typeActive: action.payload
            }
        case CREATE_TYPE:
            return {
                ...state,
                types: [...state.types, action.payload]
            }
        default:
            return state
    }
}