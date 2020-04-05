import React, { Component } from 'react';
import Input from './common/input.jsx';

class LoginForm extends Component {
    state = {
        account: {
            username: "",
            password: ""
        },
        errors: {}
    };

    handleChange = ({ currentTarget: input }) => {
        let errors = { ...this.state.errors };
        let account = { ...this.state.account };
        account[input.name] = input.value;
        let errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        this.setState({ account, errors });
    };

    validateProperty = ({ name, value }) => {
        if (name === 'username') {
            if (value === '') {
                return 'Username is required'
            }
        }
        if (name === 'password') {
            if (value === '') {
                return 'Password is required'
            }
        }
    }

    validate = () => {
        let errors = {};
        let { account } = this.state;
        if (account.username.trim() === '') {
            errors.username = 'Username is empty';
        }
        if (account.password.trim() === '') {
            errors.password = 'Password is empty';
        }

        return Object.keys(errors).length === 0 ? null : errors;
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted');
        let errors = this.validate();
        this.setState({ errors: errors || {} })
    }

    render() {
        let { account, errors } = this.state;
        return (
            <React.Fragment>
                <div className="col-6">
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <Input name="username" onChange={this.handleChange} label="Username" error={errors.username} value={account.username} />
                        <Input name="password" onChange={this.handleChange} label="Password" error={errors.password} value={account.password} />
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default LoginForm;