import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Map from './components/Map';

function App() {
  return (
    <Router>
      <div className="App">
          </div>
          <Route path='/' exact>
            <Map />
          </Route>
    </Router>
    
  );
}

export default App;
