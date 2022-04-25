import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import "bootstrap/dist/css/bootstrap.css";
// Bootstrap bu şekilde import ediliyor

import Counter from "./components/counter"; 
// Counter class'ı default export (dosya içine bakınız) bu nedenle {} kullanmıyoruz.

ReactDOM.render(<Counter />, document.getElementById('root'));
registerServiceWorker();
