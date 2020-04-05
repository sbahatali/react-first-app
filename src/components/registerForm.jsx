import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form.jsx';
import Input from './common/input.jsx';

class RegisterForm extends Form {
    state = {
        data: {
            username: '',
            password: '',
            name: ''
        },
        errors: {}
    }

    schema = {
        username: Joi.string().required().email(),
        password: Joi.string().required().min(5).label('Password'),
        name: Joi.string().required()
    }

    doSubmit = () => {
        //call server
        console.log('Register Form Submitted');
    }

    render() {
        return (<React.Fragment>
            <h1>Register</h1>
            <form onSubmit={this.handleSubmit}>
                {this.renderInput('username', 'Username')}
                {this.renderInput('password', 'Password', 'password')}
                {this.renderInput('name', 'Name')}
                {this.renderButton('REGISTER')}
            </form>
        </React.Fragment>);
    }
}

export default RegisterForm;