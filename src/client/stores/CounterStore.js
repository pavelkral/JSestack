import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher/CounterDispatcher';
import COUNTER_CONST from '../constants/CounterConstants';

// Store
let SINGLETON = Symbol();
let SINGLETON_ENFORCER = Symbol();


class CounterStoreSingleton extends EventEmitter {
    
    constructor(enforcer) {
        super();

        if (enforcer !== SINGLETON_ENFORCER) {
            throw "Cannot construct singleton";
        }

        AppDispatcher.register(this._onAction.bind(this));

        this.counter = 0;
        this.CHANGE_EVENT = 'change';
    }

    static get instance() {
        if (!this[SINGLETON]) {
            this[SINGLETON] = new CounterStoreSingleton(SINGLETON_ENFORCER);
        }
        return this[SINGLETON];
    }
    _onAction(action) {
        switch(action.actionType) {
            case COUNTER_CONST.UPDATE_COUNTER:
                CounterStore.onUpdateCounter(action.count);
                CounterStore.emitChange();
                break;
            default:
                // no op
        }
    }
    emitChange() {
        this.emit(this.CHANGE_EVENT);
    }
    updateChangeListener(callback) {
        this.on(this.CHANGE_EVENT, callback);
    }
    getCount() {
        return {count: this.counter};
    }
    onUpdateCounter(count) {
        this.counter += count;
    }
}

let CounterStore = CounterStoreSingleton.instance;

export default CounterStore;
