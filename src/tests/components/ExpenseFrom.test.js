import React from 'react'
import {shallow} from 'enzyme'
import ExpenseFrom from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'
import moment from 'moment'


test('should render ExpenseFrom correclty', () => {
    const wrapper = shallow(<ExpenseFrom />);
    expect(wrapper).toMatchSnapshot();
})

test('should render expenseFrom with expense data', () => {
    const wrapper = shallow(<ExpenseFrom expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
})

test('should render error for invalid from submission', () => {
    const wrapper = shallow(<ExpenseFrom />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
})


test('should set description on input change', () => {
    const value = 'new description'
    const wrapper= shallow (<ExpenseFrom />);
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('description')).toBe(value);
})


test('should set note on textarea change', () => {
    const value = "new note"
    const wrapper = shallow(<ExpenseFrom />);
    wrapper.find('textarea').at(0).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('note')).toBe(value)
})

test('should set amout if valid input', () => {
    const value = '1.23'
    const wrapper = shallow(<ExpenseFrom />)
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('amount')).toBe(value)
})

test('should set amout if invalid input', () => {
    const value = '1.233'
    const wrapper = shallow(<ExpenseFrom />)
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('amount')).toBe('')
})

test('should call onSubmit prop for vaild form submission', () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseFrom expense={expenses[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });
})

test('should set new date on date cahgne', () => {
    const wrapper = shallow(<ExpenseFrom />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(moment())
    expect(wrapper.state('createdAt')).toEqual(moment());
})


test('should set calender focus on change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseFrom />)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
    expect(wrapper.state('calendarFocused')).toBe(focused)
})