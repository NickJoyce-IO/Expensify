import React from 'react'
import ExportDashboardPage from '../../components/ExpenseDashboardPage'
import { shallow } from 'enzyme'

test('should render the <ExpenseDashboardPage', () => {
    const wrapper = shallow(<ExportDashboardPage />)
    expect(wrapper).toMatchSnapshot()
})