import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'

import history from './history'
import appReducer from './reducers'

const initialState = {};

export default function configureStore() {
    let store = createStore(appReducer, initialState,
        compose(applyMiddleware(routerMiddleware(history), thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        ));
    window.store = store; //just for dev
    return store;
}
