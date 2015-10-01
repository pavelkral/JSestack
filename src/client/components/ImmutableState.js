
import React from 'react/addons';
import { Map, List } from 'immutable';

class ImmutableState extends React.Component{
 

  constructor(props) {
      super(props);
      this.state = {data: Map({ count: 0, items: List() })};  
  } 

  handleCountClick() {
    this.setState(({data}) => ({
      data: data.update('count', v => v + 1)
    }));
  }

  handleAddItemClick() {
    this.setState(({data}) => ({
      data: data.update('items', list => list.push(data.get('count')))
    }));
  }

  render() {
    var data = this.state.data;
    return (
      <div>
        <button onClick={this.handleCountClick.bind(this)}>Add to count</button>
        <button onClick={this.handleAddItemClick.bind(this)}>Save count</button>
        <div>
          Count: {data.get('count')}
        </div>
        Saved counts:
        <ul>
          {data.get('items').map(item => 
            <li>Saved: {item}</li>
          )}
        </ul>
      </div>
    );
  }

}

export default ImmutableState;
