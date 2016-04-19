import React from 'react'
import { connect } from 'react-redux'

class About extends React.Component {
    render() {
        return <div className="uk-container-center">About site</div>
    }
}

export default connect(null, null)(About)