import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import uuid from 'uuid';

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({
            calendarFocused
        }));
    };
    render() {
        return (
            <div>
                <input type='text' value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value));
                }}/>
                <select value={this.props.filters.sortBy} onChange={(e) => {
                    const targetVal = e.target.value;
                    let sortByFunc;
                    if (targetVal === 'date') {
                        sortByFunc = sortByDate;
                    } else if (targetVal === 'amount') {
                        sortByFunc = sortByAmount;
                    }
                    this.props.dispatch(sortByFunc());
                }}>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId={uuid()}
                    endDate={this.props.filters.endDate}
                    endDateId={uuid()}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => {return false;}}
                />
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);