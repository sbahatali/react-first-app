import React, { Component } from 'react';
import Input from './input';
import Joi from 'joi-browser';
class Form extends Component {
    state = {
        data: {},
        errors: {}
    };

    handleChange = ({ currentTarget: input }) => {
        let errors = { ...this.state.errors };
        let data = { ...this.state.data };
        data[input.name] = input.value;
        let errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        this.setState({ data, errors });
    };

    validateProperty = ({ name, value }) => {
        let obj = { [name]: value };
        let schema = { [name]: this.schema[name] }
        let { error } = Joi.validate(obj, schema);
        if (!error) return null;
        return error.details[0].message;
    }

    validate = () => {
        let options = { abortEarly: false }
        let { error } = Joi.validate(this.state.data, this.schema, options);
        if (!error) return null;
        let errors = { ...this.state.errors };
        for (let item of error.details) {
            errors[item.path[0]] = item.message;
        }
        return errors;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let errors = this.validate();
        this.setState({ errors: errors || {} })
        this.doSubmit();
    }

    renderButton = (label) => {
        return (
            <button type="submit" disabled={this.validate()} className="btn btn-primary">{label}</button>
        )
    }

    renderInput = (name, label, type = 'text') => {
        let { data, errors } = this.state;
        return (
            <Input name={name} type={type} onChange={this.handleChange} label={label} error={errors[name]} value={data[name]} />
        )
    }

}

export default Form;