import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import starImg from '../assets/img/star.svg';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';
import { fetchCurrentDevice } from '../store/actions/currentDevice';
import { useDispatch } from 'react-redux';

const DeviceItem = ({ device }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toPageHandler = (id) => {
        dispatch(fetchCurrentDevice(id))
        navigate(DEVICE_ROUTE + '/' + id);
    };

    return (
        <Col onClick={() => toPageHandler(device.id)} className="mt-3" md={3}>
            <Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
                <Image width={150} src={'http://localhost:5000/' + device.img} />
                <div className="d-flex align-items-center justify-content-between mt-2">
                    <p style={{ margin: 0, opacity: 0.5 }}>category</p>
                    <div className="d-flex align-items-center">
                        <span>{device.rating}</span>
                        <Image width={18} src={starImg} />
                    </div>
                </div>
                <h4 style={{ fontWeight: 400, fontSize: 16 }}>{device.name}</h4>
            </Card>
        </Col>
    );
};

export default DeviceItem;
