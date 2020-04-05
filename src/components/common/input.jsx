import React from 'react';

const Input = ({ name, label, value, error, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input type="text" value={value} name={name} onChange={onChange}
                className="form-control" id={name} placeholder={label} />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default Input;