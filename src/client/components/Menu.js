import React from 'react/addons';
import {Link} from 'react-router';

/**
 * nav Component
 */
export default class Menu extends React.Component {

  render() {
   
    return (
     <div className="row"><ul className="nav navbar-nav">
        <li><Link to="/">Counter</Link></li>
        <li><Link to="Commentbox">Chat</Link></li>
        <li><Link to="FluxCounter">FluxCounter</Link></li>
        <li><Link to="QCalculator">QCalculaor</Link></li>
        <li><Link to="Cart">Cart</Link></li>
        <li><Link to="ImmutableState">ImmutableState</Link></li>
      </ul>
      </div>
    );
  }
}
