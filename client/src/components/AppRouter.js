import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'

import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';


const AppRouter = () => {
    const isAuth = useSelector(state => state.userReducer.isAuth)
    const dispatch = useDispatch()

    return (
        <Routes>
            {isAuth &&
                authRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<Navigate replace to={SHOP_ROUTE} />} />
        </Routes>
    );
};

export default AppRouter;
