import React from 'react';
import './App.css';

import Dashboard from './components/Dashboard'

function App() {
  return (
    <div>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </head>
      <body>
        <div className="App">
          <Dashboard />
        </div>
      </body>
    </div>
  );
}

export default App;
