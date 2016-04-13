import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store'
let store = configureStore();


ReactDOM.render((
    <Provider store={store}>
        {routes(store)}
    </Provider>
), document.getElementById('app'));