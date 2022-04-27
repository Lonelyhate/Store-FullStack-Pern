import axios from 'axios';
import { CREATE_DEVICE, DEVICES_LOADING, SET_DEVICES } from '../reducers/consts';
import {$authHost} from '../../http/index'

export const setDevices = () => {
    return async (dispatch) => {
        dispatch({ type: DEVICES_LOADING });
        const response = await axios.get(`http://localhost:5000/api/device`);
        dispatch({
            type: SET_DEVICES,
            payload: response.data,
        });
    };
};

export const createDevice = (device) => {
    return async dispatch => {
        const response = await $authHost.post('api/device', device)
        dispatch({
            type: CREATE_DEVICE,
            payload: response.data
        })
    }

}
