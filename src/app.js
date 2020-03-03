import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


import { addExpense, removeExpense, editExpense} from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

console.log(store.getState());

const waterBill = store.dispatch(addExpense({ description: 'water bill', amount: 3000, createdAt: 100 }));
const gasBill = store.dispatch(addExpense({ description: 'gas bill', amount: 2000, createdAt: 300 }));
const rent = store.dispatch(addExpense({ description: 'rent', amount: 109500, createdAt: 800 }));


console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
