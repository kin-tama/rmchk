import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './components/App';
import thunk from "redux-thunk";
import { createStore, applyMiddleware} from 'redux';
import { createApi } from './api/api'; 
import rootReducer from './root-reducer';
import { composeWithDevTools } from "redux-devtools-extension";

const api = createApi();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
);
