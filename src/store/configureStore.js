import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

// Store creation

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),
        // for redux developer tool ↓
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};