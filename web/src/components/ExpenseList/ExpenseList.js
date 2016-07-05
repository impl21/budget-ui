import * as React from 'react';
import { connect } from 'react-redux';

export default class ExpenseList extends React.Component {
    render() {
        console.log("props: ", this.props.expenses);
        return (
            <ul>
                {this.props.expenses.map((expense) => {
                    return expense.items.map((item) => {
                        return <li onClick={() => this.props.removeExpense(expense.id)}>{item}</li>
                    });
                })}
            </ul>
        );
    }
}
