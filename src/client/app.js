import React from 'react/addons';
import Debug from 'debug';
import Counter from './components/counter';
import CommentBox from './components/CommentBox';
import FluxCounter from './components/FluxCounter';
import Cart from './components/Cart';
import ImmutableState from './components/ImmutableState';
import Router from 'react-router';
import routes from './routes';

var debug = Debug('App');
 
class App {

	constructor() {
	  
	}

   render () {
   
		Router.run(routes, function (Handler, state) {
		var params = state.params;
		React.render(<Handler params={params}/>, document.getElementById('app'));
		});
	//	React.render(<ImmutableState/>, document.getElementById('app'));
   	//	React.render(<Cart/>, document.getElementById('app'));
   		//React.render(<CommentBox url="comments.json"/>, document.getElementById('app'));
	 
	}
}

export default App;
