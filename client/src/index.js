import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import Add from './components/Add';
import Loadable from 'react-loadable';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import Popup from './components/popup';
import reducer from './redux/reducer';

// 开启hot reload
if (module.hot) {
  // module.hot.accept();
}
//
// const defaultState = {
//   testdata: 'this is a test data',
//   showPopup: true
// };
//
// const reducer = (state=defaultState, action) => {
//   switch (action.type) {
//     case 'test':
//       return {...state, testdata: 'test success'};
//     default:
//       return state;
//   }
// };
//
// const rootReducer = combineReducers({
//   reducer,
//   form: formReducer
// })

// redux store
const store = createStore(reducer);


// import Test from './components/test';

const AsyncTest = Loadable({
  loader: () => import('./components/test'),
  loading: () => null

});

// 按需异步加载组件
const Load = (component) => !component
  ? null
  : Loadable({
  loader: () => import(`./components/${component}`),
  loading: () => <div>Loading...</div>
});

const Home = () => (
  <div>
    <h2 className="text-center">This is Home page.</h2>
  </div>
);

ReactDOM.render(
  <Provider store={store}>
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
        <Popup/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// registerServiceWorker();
