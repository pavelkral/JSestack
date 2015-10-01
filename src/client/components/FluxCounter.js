import React from 'react/addons';
import {EventEmitter} from 'events';
import CounterStore from '../stores/CounterStore';
import CounterActions from '../actions/CounterAction';

// View
class FluxCounter extends React.Component {
  
    constructor() {
        super();
        this.state = CounterStore.getCount();
        this._onChange = this._onChange.bind(this);
    }
    componentDidMount() {
        CounterStore.updateChangeListener(this._onChange);
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <CounterView />
            </div>
        );
    }
    _onChange() {
        this.setState(CounterStore.getCount());
    }
}

FluxCounter.propTypes = {
    count: React.PropTypes.number
};


class CounterView extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <button onClick={this.onClickMinus}>-1</button>
                    <button onClick={this.onClickPlus}>+1</button>
                    
                </div>
            </div>
        );
    }
    onClickPlus() {
        CounterActions.plusCounter();
    }
    onClickMinus() {
        CounterActions.minusCounter();
    }
}


export default FluxCounter;

