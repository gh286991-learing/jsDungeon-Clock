import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ClockContainer from './containers/clock-contaier'
import configureStore from './store/configureStore';

import './styles.css';

const store = configureStore();

function App() {
  return (
    <div className="App">
      <ClockContainer/>
    </div>
  );
}

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  rootElement
);
