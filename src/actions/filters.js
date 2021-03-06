export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

export const sortByDate = () => ({
    type: 'SET_SORT_FILTER_DATE'
})

export const sortByAmount = () => ({
    type: 'SET_SORT_FILTER_AMOUNT'
})

export const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
})

export const setEndDate = (date) => ({
  type: "SET_END_DATE",
  date
})