import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createType } from '../../store/actions/types';

const CreateType = ({ show, onHide }) => {
    const dispatch = useDispatch();
    const [typeName, setTypeName] = useState('');

    const createTypeFunc = () => {
        dispatch(createType({name: typeName}));
        onHide(false)
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Добавить тип</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={typeName}
                        onChange={(e) => setTypeName(e.target.value)}
                        placeholder="Введите название типа"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Закрыть
                </Button>
                <Button onClick={createTypeFunc} variant="primary">Добавить тип</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;
