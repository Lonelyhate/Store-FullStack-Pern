import axios from "axios"
import { FETCH_DEVICE, FETCH_DEVICE_SUCCESS } from "../reducers/consts"

export const fetchCurrentDevice = (id) => {
    return async dispatch => {
        dispatch({type: FETCH_DEVICE})
        const response = await axios.get(`http://localhost:5000/api/device/${id}`)
        dispatch({
            type: FETCH_DEVICE_SUCCESS,
            payload: response.data
        })
    }
}