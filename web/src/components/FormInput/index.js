import React from 'react';

import { Label, Input } from './styles';

const SearchField = ({ id, type, label, func, value }) => {
    return (
        <div className="d-flex flex-column">
            <Label htmlFor={id}>{label}</Label>
            <Input 
                id={id} 
                name={id} 
                type={type} 
                onChange={func}
                value={value}
                className="border-0 rounded w-100 p-2"
                required
            />
        </div>
    )
};

export default SearchField;