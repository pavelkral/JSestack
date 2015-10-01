import React from 'react/addons';



class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
 
  
  tickPlus() {
    this.setState({count: this.state.count + 1});
  }

  tickMinus() {
    this.setState({count: this.state.count - 1});
  }
  render() {
    return (
      <div className="my-component">
      <h1>Count: {this.state.count}</h1>
	     <button onClick={this.tickMinus.bind(this)}>-1</button>
        <button onClick={this.tickPlus.bind(this)}>+1</button>
    </div>
    );
  }
}

//Counter.propTypes = { initialCount: React.PropTypes.number };
//Counter.defaultProps = { initialCount: 0 };



// Prop types validation


export default Counter;
