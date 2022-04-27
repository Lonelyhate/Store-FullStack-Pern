import { FETCH_DEVICE, FETCH_DEVICE_SUCCESS } from "./consts";

const initialState = {
    loading: false,
    device: {}
}

export const currentDeviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DEVICE:
            return {
                ...state,
                loading: true
            }
        case FETCH_DEVICE_SUCCESS:
            return {
                ...state,
                loading: false,
                device: action.payload
            }
        default:
            return state
    }
}