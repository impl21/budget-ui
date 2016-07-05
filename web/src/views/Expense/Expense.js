import * as React from 'react';
import AddExpense from './AddExpense.js';
import ExpenseList from '../../components/ExpenseList/ExpenseList.js';
import { connect } from 'react-redux';
import * as ExpenseActions from './actions';
import { bindActionCreators } from 'redux';

class Expense extends React.Component {
    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <AddExpense />
                <ExpenseList expenses={this.props.expenses}
                             removeExpense={this.props.actions.removeExpense} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {expenses: state.expenses};
};

const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(ExpenseActions, dispatch)}
};

export default connect(mapStateToProps, mapDispatchToProps)(Expense)