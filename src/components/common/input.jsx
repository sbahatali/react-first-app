import React from 'react';

const Input = ({ name, label, error, ...rest }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input name={name} {...rest}
                className="form-control" id={name} placeholder={label} />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default Input;