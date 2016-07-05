import * as Redux from 'redux';
import { createAction } from '../../utils/utils';
export const ADD_EXPENSE = "ADD_EXPENSE";
export const REMOVE_EXPENSE = "REMOVE_EXPENSE";

export const addExpense = (expense) => {
    return(createAction(ADD_EXPENSE, [expense]));
};

export const removeExpense = (id) => {
    return(createAction(REMOVE_EXPENSE, id));
};