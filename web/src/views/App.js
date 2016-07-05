import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class App extends React.Component {

    render() {
        return (
            <div className="uk-container uk-container-center">Hello from Budget App
                <ul className="uk-list uk-list-striped">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/expenses">Expenses</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {}
}
const availableActions = {};

export default connect(mapStateToProps, availableActions)(App)