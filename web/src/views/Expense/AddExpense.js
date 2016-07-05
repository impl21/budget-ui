import * as React from 'react';
import { connect } from 'react-redux';
import { addExpense } from './actions';

class AddExpense extends React.Component {
    render() {
        return(
            <div>
                <input ref="amount" type="number"/>
                <button type="button" onClick={() =>
                    this.props.dispatch(addExpense({id: 3, total: this.refs['amount'].value, items: ['kubki', 'zapojka']}))}>Add expense</button>
            </div>
        );
    }
}

export default AddExpense = connect()(AddExpense)