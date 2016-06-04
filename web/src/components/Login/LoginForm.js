import React from 'react'
import { reduxForm } from 'redux-form'

class LoginForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            user: '',
            password: ''
        };
        this.onUserChange = this.onUserChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    onUserChange(e) {
        this.setState({user: e.target.value});
    }

    onPasswordChange(e) {
        this.setState({password: e.target.value});
    }

    render() {
        const {fields: {email, password}, handleSubmit} = this.props;

        return (
            <form className="uk-form form">
                <h1>Login</h1>
                <div className="uk-form-row">
                    <input type="text" {...email} onChange={this.onUserChange} value={this.state.user}
                           placeholder="USERNAME"/>
                </div>
                <div className="uk-form-row">
                    <input type="password" {...password} onChange={this.onPasswordChange} value={this.state.password}
                           placeholder="PASSWORD"/>
                </div>
                <div className="uk-form-row">
                    <button className="uk-button" type="button" onClick={this.validate}>
                        Login
                    </button>
                </div>
            </form>
        )
    }

    validate() {
        UIkit.modal.confirm('are you sure?', () => {
            console.log("confirmed.")
        });
    };
}

export default reduxForm({
    form: 'LoginForm',
    fields: ['email', 'password']
})(LoginForm)