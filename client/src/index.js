import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// defines our url and our backend in the proxy (package.json)
// "proxy": "http:///localhost:5000" - allows us to not have to put url in fetch request
// cd into client and run npm start

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
