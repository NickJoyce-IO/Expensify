import React from 'react'

import { Link } from 'react-router-dom'


// description, amount, createdAt
const ExpenseListItem = ({ description, amount, createdAt, id}) => (
  <div>
  <Link to={`/edit/${id}`}>
    <h3>{description}</h3>
  </Link>
    <p>Amount: {amount} </p>
    <p>Created At: {createdAt} </p>
   
    
  </div>
)


export default ExpenseListItem

