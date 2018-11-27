import React from 'react';
import ReactDOM from 'react-dom';

console.log('hello world');
console.log('environment variables: %s', JSON.stringify(process.env));

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(<div>{title}</div>, document.getElementById('app'));
