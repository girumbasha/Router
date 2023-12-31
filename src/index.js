// import React from 'react';
// import ReactDom from 'react-dom'
// import App from './App';

// ReactDom.render(<App/>,document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
