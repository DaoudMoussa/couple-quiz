import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MainPageContextProvider from './store/MainPageContextProvider'
import TestContextProvider from './store/TestContextProvider'

ReactDOM.render(
  <React.StrictMode>
    <MainPageContextProvider>
      <TestContextProvider>
        <App />
      </TestContextProvider>
    </MainPageContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
