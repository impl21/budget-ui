import React from 'react'
import { Router, Route, Link } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import history from './history'

export default function routes(store) {
    let historyInSync = syncHistoryWithStore(history, store);

    return(
        <Router history={historyInSync}>
            <Route path="/" component={App}/>
        </Router>
    )
}