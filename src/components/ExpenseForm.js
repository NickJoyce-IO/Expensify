import 'react-dates/initialize'
import React from "react"
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'


export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          description: props.expense ? props.expense.description : '',
          note: props.expense ? props.expense.note : '',
          amount: props.expense ? (props.expense.amount / 100).toString() : '',
          createdAt: props.expense ? moment(props.expense.createdAt): moment(),
          calendarFocused: false,
          error: false
        }
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
  if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
          this.setState(() => ({ amount }))
      }
  }
  onDateChange = (createdAt) => {
      if (createdAt) {
          this.setState(() => ({ createdAt }))
      }
      
  }
  onFocusChange = ({ focused }) => {
      this.setState(() => ({ calendarFocused: focused }))
  }
  onSubmit = (e) => {
      e.preventDefault()

      if (!this.state.description || !this.state.amount) {
        this.setState(() => ({error: 'Please provide description and amount'}))
      } else {
        this.setState(() => ({error: false }))
          this.props.onSubmit({
              description: this.state.description,
              amount: parseFloat(this.state.amount, 10) * 100,
              createdAt: this.state.createdAt.valueOf(),
              note: this.state.note
          })
      }
  }
  render() {
    return (
      <div>
        <form 
        onSubmit={this.onSubmit}
        action="">

        {this.state.error && <p>{this.state.error}</p>}

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
