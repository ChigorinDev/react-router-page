import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';


// #1 Importing and creating store #2 give it reducer which will interract with the store
const store = createStore(rootReducer);

// #3 Put my app into Provider so that to provide data from redux store
// #4 Somehow conect components with the data in the store
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

