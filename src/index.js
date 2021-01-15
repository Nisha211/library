import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reportWebVitals from './reportWebVitals';

const fetchValue = () => {
  return {
    type: 'Fetch_value',
  }
}

const increment = () => {
  return {
    type: 'INCREMENT',
  }
}
const decrement = () => {
  return {
    type: 'DECREMENT',
  }
}
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'Fetch_value':
      return state;
      break;
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
      break;
  }
}
let store = createStore(counterReducer);
store.subscribe(() => { console.log("redux values " + store.getState()) })
store.dispatch(fetchValue());
store.dispatch(increment());


ReactDOM.render(
 
    <React.StrictMode>
       <Provider  store={store}>
      <App />
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();