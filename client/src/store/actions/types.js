import axios from 'axios';
import { SET_TYPES, ACTIVE_TYPE, CREATE_TYPE } from '../reducers/consts';
import { $authHost, $host } from '../../http/index';

export const setTypes = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:5000/api/type');
        dispatch({
            type: SET_TYPES,
            payload: response.data,
        });
    };
};

export const createType = (typeName) => {
    return async (dispatch) => {
        const response = await $authHost.post('api/type', typeName);
        dispatch({
            type: CREATE_TYPE,
            payload: response.data
        });
    };
};

export const activeType = (typeName) => {
    return (dispatch) => {
        dispatch({
            type: ACTIVE_TYPE,
            payload: typeName,
        });
    };
};
