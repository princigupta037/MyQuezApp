import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import QuizApp from '../src/QuizService/index';

ReactDOM.render(

  <React.StrictMode>
    <QuizApp />
  </React.StrictMode>,
  document.getElementById('root')
  
);

serviceWorker.unregister();
