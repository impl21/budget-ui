import React from 'react'
import { Router, Route, Link } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import App from './containers/App'
import About from './containers/About'

import history from './history'

export default function routes(store) {
    let historyInSync = syncHistoryWithStore(history, store);
    return(
        <Router history={historyInSync}>
            <Route path="/" component={App}/>
            <Route path="/about" component={About}/>
        </Router>
    )
}