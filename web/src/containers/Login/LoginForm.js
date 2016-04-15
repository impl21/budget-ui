import React from 'react'
import { reduxForm } from 'redux-form'
class LoginForm extends React.Component {
    render() {
        const {fields: {email, password}, handleSubmit} = this.props;

        return (
            <form>
                <input type="text" {...email}/>
                <input type="password" {...password}/>
                <button type="submit" onClick={handleSubmit(this.validate)}>
                    Login
                </button>
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