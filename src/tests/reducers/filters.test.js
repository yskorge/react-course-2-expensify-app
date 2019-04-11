import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('should setip default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate:moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount')
})

test('should be sortBy to date', () =>{
    const currentState = {
        text:'',
        startDate: undefined,
        endDate:undefined,
        sortBy: 'amount'
    };

    const action = {type: 'SORT_BY_DATE'}

    const state = filtersReducer(currentState,action);
    expect(state.sortBy).toBe('date')
})


//should set text filter

test('should set text filter correctly', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'search'
    }

    const state =  filtersReducer(undefined,action)
    expect(state.text).toBe('search')

})

test('should set start date filter', () => {
    const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate
    }

    const state = filtersReducer(undefined, action)
    expect(state.startDate).toEqual(startDate)
})

test('should end start date filter', () => {
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate
    }

    const state = filtersReducer(undefined, action)
    expect(state.endDate).toEqual(endDate)
})