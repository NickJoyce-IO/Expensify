import React from 'react'
import { connect } from 'react-redux'

import { removeExpense } from '../actions/expenses'


// description, amount, createdAt
const ExpenseListItem = ({dispatch, description, amount, createdAt, id}) => (
  <div>
    <h3>Description:  {description} </h3>
    <p>Amount: {amount} </p>
    <p>Created At: {createdAt} </p>
    <button onClick={(e) => {
      dispatch(removeExpense({id}))
    }}>Remove</button>
  </div>
)



export default connect()(ExpenseListItem)

