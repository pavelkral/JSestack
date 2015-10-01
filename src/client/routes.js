import React from 'react/addons';
import Counter from './components/counter';
import CommentBox from './components/CommentBox';
import FluxCounter from './components/FluxCounter';
import QCalculator from './components/QCalculator';
import Cart from './components/Cart';
import ImmutableState from './components/ImmutableState';
import Root from './components/Root';
import {
  Route,
  DefaultRoute,
} from 'react-router';

var CommentWrapper = React.createClass({
  render: function () {
    return (
        <CommentBox url="/react/comments"  />
    );
  }
});
//pollInterval={2000}
export default (
    <Route name="Root" path="/" handler={Root}>
     <DefaultRoute handler={Counter} />
      <Route name="Commentbox" handler={CommentWrapper} /> 
      <Route name="FluxCounter" handler={FluxCounter} />  
      <Route name="QCalculator" handler={QCalculator} /> 
      <Route name="Cart" handler={Cart} /> 
       <Route name="ImmutableState" handler={ImmutableState} />     
    </Route>
);
