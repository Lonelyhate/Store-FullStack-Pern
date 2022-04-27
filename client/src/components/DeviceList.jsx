import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setDevices } from '../store/actions/devices'
import DeviceItem from './DeviceItem';

const DeviceList = () => {
    const devices = useSelector(state => state.devicesReducer.devices)
    const loading = useSelector(state => state.devicesReducer.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setDevices())
    }, [])

    return <Row>
        {devices.map(device => (
            <DeviceItem key={device.id} device={device} />
        ))}
    </Row>;
};

export default DeviceList;
