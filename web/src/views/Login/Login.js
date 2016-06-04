import React from 'react'
import LoginForm from '../../components/Login/LoginForm'
import './login.less'
import ModalConfirm from '../../components/Login/ModalConfirm'

export default class Login extends React.Component {
    render() {
        return (
            <div className="login-container">
                <LoginForm/>
            </div>
        )
    }
}