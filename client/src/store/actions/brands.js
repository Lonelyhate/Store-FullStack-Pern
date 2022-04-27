import axios from 'axios'
import { CREATE_BRAND, SET_ACTIVE_BRAND, SET_BRANDS } from '../reducers/consts'
import { $authHost, $host } from '../../http/index';

export const setBrands = () => {
    return async dispatch => {
        const response = await axios.get('http://localhost:5000/api/brand')
        dispatch({
            type: SET_BRANDS,
            payload: response.data
        })
    }
}

export const createBrand = (brand) => {
    return async dispatch => {
        const response = await $authHost.post('api/brand', brand)
        dispatch({
            type: CREATE_BRAND,
            payload: response.data
        })
    } 
}

export const setActiveBrands = (activeId) => {
    return dispatch => {
        dispatch({
            type: SET_ACTIVE_BRAND,
            payload: activeId
        })
    }
}