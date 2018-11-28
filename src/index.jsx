import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';

console.log('hello world');
console.log('environment variables: %s', JSON.stringify(process.env));

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(<App />, document.getElementById('app'));
