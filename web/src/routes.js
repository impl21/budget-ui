import React from 'react'
import { Router, Route, Link } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import App from './views/App'
import About from './views/About'
import Login from './views/Login'

import history from './history'

export default function routes(store) {
    let historyInSync = syncHistoryWithStore(history, store);
    return(
        <Router history={historyInSync}>
            <Route path="/" component={App}/>
            <Route path="/about" component={About}/>
            <Route path="/login" component={Login}/>
        </Router>
    )
}