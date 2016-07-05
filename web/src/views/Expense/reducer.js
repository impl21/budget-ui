import { ADD_EXPENSE, REMOVE_EXPENSE } from './actions';

const initialState = [
    {
        id: 1,
        total: 50,
        items: ['wodka', 'coca-cola']
    },
    {
        id: 2,
        total: 345,
        items: ['kielbasa', 'grill']
    }
];

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_EXPENSE:
            return state.concat(action.payload);
        case REMOVE_EXPENSE:
            console.log("action: ", action.payload);
            return state.filter(f => f.id !== action.payload);
        default:
            return state;
    }
}