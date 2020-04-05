import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form.jsx';

class LoginForm extends Form {
    state = {
        data: {
            username: "",
            password: ""
        },
        errors: {}
    };
    schema = {
        username: Joi.string().required().email().label('Username'),
        password: Joi.string().required().label('Password')
    }



    doSubmit = () => {
        //call server
        console.log('Form submitted');
    }

    render() {

        return (
            <React.Fragment>
                <div className="col-6">
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput('username', 'Username')}
                        {this.renderInput('password', 'Password', 'password')}
                        {this.renderButton('Login')}
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default LoginForm;