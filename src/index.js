import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';
import Landing from './components/landing';

const App = React.createClass({
  render() {
    return (
      <div>
        Hi
        <Link to="landing">Landing</Link>
      </div>
    );
  }
});

const NoMatch = () => (
  <div>404</div>
);


render((
  <Router history={browserHistory}>
    <Route component={App} path="/" />
    <Route component={Landing} path="landing" />
    <Route path="*" component={NoMatch} />
  </Router>
), document.getElementById('app-mount'));
