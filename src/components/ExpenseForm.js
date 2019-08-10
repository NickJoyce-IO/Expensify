import 'react-dates/initialize'
import React from "react"
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

export default class ExpenseForm extends React.Component {
  state ={
      description: '',
      note: '',
      amount: '',
      createdAt: moment(),
      calendarFocused: false
  }
  onDescriptionChange = (e) => {
      const description = e.target.value
      this.setState(()=> ({ description }))
  }
  onNoteChange = (e) => {
      const note = e.target.value
      this.setState(() => ({ note }))
  }
  onAmountChange = (e) => {
      const amount = e.target.value

// reg ex to only allow digitswith 1 decimal place and only 2 digits after.
  if(amount.match(/^\d*(\.\d{0,2})?$/)) {
          this.setState(() => ({ amount }))
      }
  }
  onDateChange = (createdAt) => {
      this.setState(()=> ({ createdAt }))
  }
  onFocusChange = ({ focused }) => {
      this.setState(() => ({ calendarFocused: focused }))
  }
  render() {
    return (
      <div>
        <form action="">
          <input
            type="text"
            placeholder="description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />

          <input
            type="text"
            placeholder="amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />

          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />

          <div>
            <textarea
              placeholder="Add a note for your expense"
              value={this.state.note}
              onChange={this.onNoteChange}
            />

            <button>Add Expense</button>
          </div>
        </form>
      </div>
    )
  }
}
