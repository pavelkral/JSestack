import React from 'react/addons';


class QCalculator extends React.Component {
  

  constructor(props) {

    super(props);

      this.state = {a: 1 , b: 3 , c: -4};

  }

  
  handleInputChange(key, event) {
    var partialState = {};
    partialState[key] = parseFloat(event.target.value);
    this.setState(partialState);
  }

  render() {
    
    var a = this.state.a;
    var b = this.state.b;
    var c = this.state.c;

    var x1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    var x2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    return (
      <div><div><h3>Quadratic Calculator</h3></div>
        <strong>
          <em>ax</em><sup>2</sup> + <em>bx</em> + <em>c</em> = 0
        </strong>
        <h4>Solve for <em>x</em>:</h4>
        <p>
          <label>
            a: <input type="number" value={a} onChange={this.handleInputChange.bind(this, 'a')} />
          </label>
          <br />
          <label>
            b: <input type="number" value={b} onChange={this.handleInputChange.bind(this, 'b')} />
          </label>
          <br />
          <label>
            c: <input type="number" value={c} onChange={this.handleInputChange.bind(this, 'c')} />
          </label>
          <br />
          x: <strong>{x1}, {x2}</strong>
        </p>
      </div>
    );
  }

}


export default QCalculator;
