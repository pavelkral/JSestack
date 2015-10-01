import AppDispatcher from '../dispatcher/CounterDispatcher';
import COUNTER_CONST from '../constants/CounterConstants';

let CounterActions = {
    plusCounter: function() {
        AppDispatcher.dispatch({
            actionType: COUNTER_CONST.UPDATE_COUNTER,
            count: 1
        });
    },
    minusCounter: function() {
        AppDispatcher.dispatch({
            actionType: COUNTER_CONST.UPDATE_COUNTER,
            count: -1
        });
    }
};


export default CounterActions;
