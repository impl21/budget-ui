import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class App extends React.Component {

    render() {
        return (
            <div>Hello from Budget App
                <ul><li><Link to="/about">About</Link></li></ul>
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