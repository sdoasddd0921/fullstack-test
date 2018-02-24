import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Add from './components/Add';
import Loadable from 'react-loadable';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// import Test from './components/test';

const AsyncTest = Loadable({
  loader: () => import('./components/test'),
  loading: () => null

});

const Load = (component) => !component
  ? null
  : Loadable({
  loader: () => import(`./components/${component}`),
  loading: () => null
});

const Home = () => (
  <div>
    <h2 className="text-center">This is Home page.</h2>
  </div>
);

ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">Add info</Link></li>
        <li><Link to="/test">Test</Link></li>
      </ul>

      <hr/>

      <div className="container">
        <Route exact path="/" component={App}/>
        <Route path="/add" component={Add}/>
        <Route path="/test" component={Load('test')}/>
      </div>
    </div>
  </Router>,
  document.getElementById('root')
);

// registerServiceWorker();
