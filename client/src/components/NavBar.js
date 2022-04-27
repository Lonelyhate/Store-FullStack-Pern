import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../store/actions/user';

const NavBar = () => {
    const isAuth = useSelector((state) => state.userReducer.isAuth);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(logoutUser())
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link
                    style={{ color: '#fff', textDecoration: 'none', fontSize: 23, marginRight: 30 }}
                    to={SHOP_ROUTE}>
                    СуперСтор
                </Link>
                {isAuth ? (
                    <Nav className="ml-auto">
                        <Button onClick={() => navigate(ADMIN_ROUTE)} variant={'outline-light'}>
                            Админ панель
                        </Button>
                        <Button
                            onClick={() => logout()}
                            variant={'outline-light'}
                            className="ml-2"
                            style={{marginLeft: 20}}
                            >
                            Выйти
                        </Button>
                    </Nav>
                ) : (
                    <Nav className="ml-auto">
                        <Button onClick={() => navigate(LOGIN_ROUTE)} variant={'outline-light'}>Авторизация</Button>
                    </Nav>
                )}
            </Container>
        </Navbar>
    );
};

export default NavBar;
