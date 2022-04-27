import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveBrands, setBrands } from '../store/actions/brands';
import { Card, Row } from 'react-bootstrap';

const BrandBar = () => {
    const brands = useSelector((state) => state.brandsReducer.brands);
    const activeBrand = useSelector(state => state.brandsReducer.activeBrand)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setBrands());
    }, []);
    return (
        <Row className="d-flex">
            {brands.map((brand) => (
                <Card
                    style={{
                        display: 'flex',
                        maxWidth: '100px',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        marginRight: '15px'
                    }}
                    onClick={() => dispatch(setActiveBrands(brand.id))}
                    className="p-2"
                    border={brand.id === activeBrand ? "danger" : "light"}
                    key={brand.id}>
                    {brand.name}
                </Card>
            ))}
        </Row>
    );
};

export default BrandBar;
