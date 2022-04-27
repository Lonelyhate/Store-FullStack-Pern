import { SET_IS_AUTH, USER_LOGOUT } from '../reducers/consts';
import { $authHost, $host } from '../../http/index';
import jwt_decode from 'jwt-decode';

export const setIsAuth = (user) => {
    return async (dispatch) => {
        dispatch({
            type: SET_IS_AUTH,
            payload: { auth: true, user: jwt_decode(user.token) },
        });
    };
};

export const registration = async (email, password) => {
    const { data } = await $host.post('api/user/registration', { email, password, role: 'ADMIN' });
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token);
};

export const login = async (email, password) => {
    const { data } = await $host.post('api/user/login', { email, password });
    localStorage.setItem('token', data.token)
    return data;
};

export const logoutUser = () => {
    return dispatch => {
        dispatch({
            type: USER_LOGOUT
        })
    }
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return data;
}