import { CREATE_BRAND, SET_ACTIVE_BRAND, SET_BRANDS } from "./consts"

const initialState = {
    brands: [],
    activeBrand: ''
}

export const brandsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BRANDS: {
            return {
                ...state,
                brands: action.payload
            }
        }
        case SET_ACTIVE_BRAND:
            return {
                ...state,
                activeBrand: action.payload
            }
        case CREATE_BRAND:
            return {
                ...state,
                brands: [...state.brands, action.payload]
            }
        default:
            return state
    }
}