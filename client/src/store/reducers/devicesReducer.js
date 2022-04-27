import { CREATE_DEVICE, DEVICES_LOADING, SET_DEVICES } from "./consts"

const initialState = {
    devices: [],
    loading: false
}

export const devicesReducer = (state = initialState, action) => {
    switch (action.type) {
        case DEVICES_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_DEVICES:
            return {
                ...state,
                devices: action.payload.rows,
                loading: false
            }
        case CREATE_DEVICE:
            return {
                ...state,
                devices: [...state.devices, action.payload]
            }
        default:
            return state
    }
}