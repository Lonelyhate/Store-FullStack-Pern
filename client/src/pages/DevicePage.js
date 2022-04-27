import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchCurrentDevice } from '../store/actions/currentDevice';
import { Image } from 'react-bootstrap';
import bigStar from '../assets/img/bigStar.png';

const DevicePage = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const currentDevice = useSelector((state) => state.currentDeviceReducer.device);
    if (!Object.keys(currentDevice).length) {
        const path = location.pathname.split('/');
        const id = path[path.length - 1];
        dispatch(fetchCurrentDevice(id));
    }

    return (
        <Container className="mt-4">
            <Row>
                <Col md={4}>
                    <Image
                        width={300}
                        height={300}
                        src={'http://localhost:5000/' + currentDevice.img}
                    />
                </Col>
                <Col md={4}>
                    <Row>
                        <h2 style={{ textAlign: 'center' }}>{currentDevice.name}</h2>
                        <div
                            style={{
                                background: `url(${bigStar}) center no-repeat`,
                                width: 240,
                                height: 240,
                                backgroundSize: 'cover',
                                margin: '20px auto 0',
                                fontSize: 20,
                            }}
                            className="d-flex align-items-center justify-content-center">
                            {'Рейтинг: ' + currentDevice.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card style={{width: 300, height: 300}} className="justify-content-around d-flex flex-column align-items-center">
                        <h3>{'От ' + currentDevice.price + ' руб.'}</h3>
                        <Button variant="outline-dark">Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default DevicePage;
