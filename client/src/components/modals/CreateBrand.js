import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createBrand } from '../../store/actions/brands';

const CreateBrand = ({ show, onHide }) => {
    const [brandName, setBrandName] = useState('');
    const dispatch = useDispatch();

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Добавить бренд</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        onChange={(e) => setBrandName(e.target.value)}
                        value={brandName}
                        placeholder="Введите название бренда"
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Закрыть
                </Button>
                <Button
                    onClick={(e) => dispatch(createBrand({ name: brandName }))}
                    variant="primary">
                    Добавить тип
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;
