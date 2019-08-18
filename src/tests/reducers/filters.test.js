import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('should set up default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SET_SORT_FILTER_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }

    const action = { type: 'SET_SORT_FILTER_DATE'}
    const state = filtersReducer(currentState, action)

    expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
    const text = 'this is my filter'
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }
    const state = filtersReducer(undefined, action)
    expect(state.text).toBe(action.text)
})

test('should set startDate filter', () => {
    const startDate = moment()
    const action = {
        type:'SET_START_DATE',
        date: startDate
    }
    const state = filtersReducer(undefined, action)
    expect(state.date).toEqual(action.startDate)

})

test('should set endDate filter', () => {
    const endDate = moment()
    const action = {
        type:'SET_END_DATE',
        date: endDate
    }
    const state = filtersReducer(undefined, { type: 'SET_END_DATE'})
    expect(state.date).toBe(action.endDate)
})