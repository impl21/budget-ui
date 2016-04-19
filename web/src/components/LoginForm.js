import React from 'react'
import { reduxForm } from 'redux-form'
class LoginForm extends React.Component {
    render() {
        const {fields: {email, password}, handleSubmit} = this.props;

        return (
            <form className="uk-form">
                <div className="uk-form-row">
                    <input type="text" {...email}/>
                </div>
                <div className="uk-form-row">
                    <input type="password" {...password}/>
                </div>
                <div className="uk-form-row">
                    <button className="uk-button-danger" type="submit" onClick={handleSubmit(this.validate)}>
                        Login
                    </button>
                </div>
            </form>
        )
    }

    validate() {
        console.log("validation success!!!");
    };
}

export default reduxForm({
    form: 'LoginForm',
    fields: ['email', 'password']
})(LoginForm)