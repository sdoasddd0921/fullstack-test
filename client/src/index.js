import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
// import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Popup from './components/popup';
import reducer from './redux/reducer';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';

// 开启hot reload
if (module.hot) {
  // module.hot.accept();
}

// redux store
const store = createStore(reducer);

// const AsyncTest = Loadable({
//   loader: () => import('./components/test'),
//   loading: () => null

// });

// 按需异步加载组件
const Load = (component) => !component
  ? null
  : Loadable({
  loader: () => import(`./components/${component}`),
  loading: () => <div>Loading...</div>
});

// const Home = () => (
//   <div>
//     <h2 className="text-center">This is Home page.</h2>
//   </div>
// );

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <ul className="home-nav">
          <li><NavLink exact activeClassName="home-nav-active" to="/">Home</NavLink></li>
          <li><NavLink exact activeClassName="home-nav-active" to="/add">Add info</NavLink></li>
          <li><NavLink exact activeClassName="home-nav-active" to="/test">Test</NavLink></li>
          <li><NavLink exact activeClassName="home-nav-active" to="/edit/:id">Edit</NavLink></li>
        </ul>

        <hr/>

        <div className="container">
          <Route exact path="/" component={App}/>
          <Route path="/add" component={Load('Add')}/>
          <Route path="/test" component={Load('test')}/>
          <Route path="/edit" component={Load('editStudent')}/>
        </div>
        <Popup/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// registerServiceWorker();
