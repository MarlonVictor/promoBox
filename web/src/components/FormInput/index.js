import React from 'react';
import { Field } from 'formik';

import { Container, Label } from './styles';

const SearchField = ({ id, type, error, label }) => (
    <Container className="d-flex flex-column">
        <Label htmlFor={id}>{label}</Label>
        <Field 
            id={id} 
            name={id} 
            type={type} 
            className="border-0 rounded w-100 p-2"
        />
        {error && (
            <span className="error">{error}</span>
        )}
    </Container>
);

export default SearchField;