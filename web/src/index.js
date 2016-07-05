import "../../modules/uikit/less/uikit.less"
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store'
import routes from './routes'

import './index.less';

let store = configureStore();


ReactDOM.render((
    <Provider store={store}>
        {routes(store)}
    </Provider>
), document.getElementById('app'));