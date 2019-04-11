import React from 'react'
import {shallow} from 'enzyme'
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'

//react-test-renderer

test('should render header correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />)
    expect(wrapper).toMatchSnapshot();
})
