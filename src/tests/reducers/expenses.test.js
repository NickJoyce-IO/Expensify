import expensesReducer from '../../reducers/expenses'

import expenses from "../fixtures/expenses"

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test("should NOT remove expenses if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: '-1'
  }

  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const newExpense = {
    description: 'test expense',
    note: '',
    amount: 77,
    createdAt: 0
    }

    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    }

  
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses,newExpense])

})

test('should edit an expense', () => {
    
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1',
        updates: {
            description: 'test'
        }
    }

    const state = expensesReducer(expenses, action)
    expect(state[0].description).toEqual('test')
})

test("should not edit expense if not found", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "5",
    updates: {
      description: "test"
    }
  }

  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

