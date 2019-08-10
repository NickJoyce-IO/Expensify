import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()



store.dispatch(addExpense({description: 'Water bill', amount: 4500, createdAt: 4500}))
store.dispatch(addExpense({ description: "Gas bill", amount: 200, createdAt: -1000 }))
store.dispatch(
  addExpense({ description: "rent", amount: 109500, createdAt: -1000 })
)

// store.dispatch(setTextFilter('water'))

const state = store.getState()

// visibleExpenses takes 2 arguments, one is expenses and the other is filters, both available from state
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'))
// }, 3000);

// console.log(visibleExpenses)

const jsx = (

    <Provider store={store}>
      <AppRouter />
    </Provider>
    
)

ReactDOM.render(jsx, document.getElementById('app'))