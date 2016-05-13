import { ADD_EXPENSE } from './actions.js';

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_EXPENSE:
            console.log("Reducer: ADD_EXPENSE");
            return Object.assign({}, action.payload.expense);
        default:
            return state;
    }
}