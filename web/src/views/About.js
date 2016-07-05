import React from 'react'
import { connect } from 'react-redux'
import './about.less'

class About extends React.Component {
    render() {
        return <div className="uk-container about">About site</div>
    }
}

export default connect(null, null)(About)