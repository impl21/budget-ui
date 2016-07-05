import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import expenseReducer from '../views/Expense/reducer';

const appReducer = combineReducers({
    routing: routerReducer,
    form: formReducer,
    expenses: expenseReducer
});

export default function resetStateReducer(state, action) {
    return appReducer(state, action);
}