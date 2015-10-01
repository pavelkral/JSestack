import React from 'react';
import {RouteHandler} from 'react-router';
import Menu from './Menu';

/**
 * Application component
 */
export default class Root extends React.Component {

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    return (
        <div className="container"><Menu />
        <div className="row"><RouteHandler {...this.props}/></div>
        </div>
    );
  }
}
