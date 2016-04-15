import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'

import history from './history'
import appReducer from './reducers'

export default function configureStore() {
    let store = createStore(appReducer, applyMiddleware(routerMiddleware(history), thunk));
    window.store = store; //just for dev
    return store;
}
