import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux'; 
// import rootReducer from './reducers'; 
// const store = createStore(rootReducer);

/**
 * Once redux is needed these imports will be uncommented out
 */

ReactDOM.render(
  // <Provider store={store}>
        <Router>
            <App/>
        </Router>,
    // </Provider>,
  document.getElementById('root')
);