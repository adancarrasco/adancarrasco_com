import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import Router from './components/Router';

ReactDOM.render(<Router basename={process.env.PUBLIC_URL} />, document.getElementById('root'));
