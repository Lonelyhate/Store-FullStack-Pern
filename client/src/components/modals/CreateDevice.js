import React, { useEffect, useState } from 'react';
import { Form, Modal, Button, Dropdown, Row, Col } from 'react-bootstrap';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import { useDispatch, useSelector } from 'react-redux';
import { setTypes } from '../../store/actions/types';
import { setBrands } from '../../store/actions/brands';
import { createDevice } from '../../store/actions/devices';

const CreateDevice = ({ show, onHide }) => {
    const types = useSelector((state) => state.typesReducer.types);
    const brands = useSelector((state) => state.brandsReducer.brands);
    const dispatch = useDispatch();

    const [info, setInfo] = useState([]);
    const [name, setName] = useState('');
    const [file, setFile] = useState(null);
    const [type, setType] = useState({});
    const [brand, setBrand] = useState({});
    const [price, setPrice] = useState(0);

    useEffect(() => {
        dispatch(setTypes());
        dispatch(setBrands());
    }, []);

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }]);
    };

    const removeInfo = (number) => {
        setInfo(info.filter((i) => i.number !== number));
    };

    const selectFile = (e) => {
        setFile(e.target.files[0]);
    };

    const changeInfo = (key, value, number) => {
        setInfo(info.map((i) => (i.number === number ? { ...i, [key]: value } : i)));
    };

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', price + '')
        formData.append('img', file)
        formData.append('brandId', brand.id)
        formData.append('typeId', type.id)
        formData.append('info', JSON.stringify(info))

        dispatch(createDevice(formData)).then(data => onHide())
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Добавить девайс</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2">
                        <DropdownToggle>{type.name || 'Выберите тип'}</DropdownToggle>
                        <Dropdown.Menu>
                            {types.map((type) => (
                                <Dropdown.Item
                                    onClick={(e) => {
                                        setType(type);
                                    }}
                                    key={type.id}>
                                    {type.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2">
                        <DropdownToggle>{brand.name || 'Выберите бренд'}</DropdownToggle>
                        <Dropdown.Menu>
                            {brands.map((brand) => (
                                <Dropdown.Item
                                    onClick={(e) => {
                                        setBrand(brand);
                                    }}
                                    key={brand.id}>
                                    {brand.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-2"
                        placeholder="Введите название устройства"
                    />
                    <Form.Control
                        value={price}
                        onChange={(e) => setPrice(+e.target.value)}
                        type="number"
                        className="mt-2"
                        placeholder="Введите стоимость устройства"
                    />
                    <Form.Control onChange={selectFile} type="file" className="mt-2" />
                    <hr />
                    <Button onClick={addInfo} variant={'outline-dark'}>
                        Добавить новое свойство
                    </Button>
                    {info.map((i) => (
                        <Row key={i.number} className="mt-3">
                            <Col md={4}>
                                <Form.Control
                                    onChange={e => changeInfo('title', e.target.value, i.number)}
                                    value={i.title}
                                    placeholder="Введите название свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={e => changeInfo('description', e.target.value, i.number)}
                                    placeholder="Введите описание свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                    variant="outline-danger">
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    ))}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Закрыть
                </Button>
                <Button onClick={addDevice} variant="primary">
                    Добавить девайс
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;
