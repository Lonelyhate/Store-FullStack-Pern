import React, { useEffect, useState } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setTypes, activeType } from '../store/actions/types';

const TypeBar = () => {
    const dispatch = useDispatch();
    const types = useSelector((state) => state.typesReducer.types);
    const currentType = useSelector((state) => state.typesReducer.typeActive);

    useEffect(() => {
        dispatch(setTypes());
    }, []);

    return (
        <ListGroup>
            {types.map((type) => (
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active={type.id === currentType}
                    onClick={() => dispatch(activeType(type.id))}
                    key={type.name}>
                    {type.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default TypeBar;
