import React, { useState } from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { login, registration, setIsAuth } from '../store/actions/user';
import { REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { useDispatch, useSelector } from 'react-redux';

const Auth = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    const location = useLocation();
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE;
    const isRegistration = location.pathname === REGISTRATION_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const authClic = async () => {
        try {
            let user;
            if (isLogin) {
                user = await login(email, password);
            } else {
                user = await registration(email, password);
            }
            dispatch(setIsAuth(user));
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.message)
        }
    };

    return (
        <Container
            style={{ height: window.innerHeight - 54 }}
            className="d-flex justify-content-center align-items-center">
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-3"
                        placeholder="Введите ваш email..."
                    />
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-3 mb-3"
                        placeholder="Введите ваш пароль..."
                    />
                </Form>
                <Row className="d-flex justify-content-between">
                    {isLogin ? (
                        <p>
                            Нет аккаунта?
                            <Link
                                style={{ textDecoration: 'none', marginLeft: '5px' }}
                                to={REGISTRATION_ROUTE}>
                                Зарегистрируйтесь
                            </Link>
                        </p>
                    ) : (
                        <p>
                            Есть аккаунт?
                            <Link
                                style={{ textDecoration: 'none', marginLeft: '5px' }}
                                to={LOGIN_ROUTE}>
                                Войдите
                            </Link>
                        </p>
                    )}
                    <Button
                        onClick={authClic}
                        className="align-self-end"
                        variant={'outline-success'}>
                        {isLogin ? 'Войти' : 'Зарегистрироваться'}
                    </Button>
                </Row>
            </Card>
        </Container>
    );
};

export default Auth;
