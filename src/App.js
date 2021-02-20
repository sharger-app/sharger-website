import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Map from './components/Map';

import Home from './components/Home';
import Listing from './components/Listing';

function App() {
  const testListingProps = {
    owner: {
      first_name: "Andrew",
      last_name: "Bob",
    },
    name: "My Spare Charger",
    speed: "Rapid", 
    plug: "Type A", 
    wattage: "10kW", 
    address: "1000 Main Street Toronto ON", 
    sessions: {}, 
    housing: true, 
    review: null,
    image: "https://www.ctvnews.ca/polopoly_fs/1.4977370.1591756865!/httpImage/image.jpg_gen/derivatives/landscape_960/image.jpg",
  };

  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>

          <Route path='/listingtest' exact>
            <Listing { ...testListingProps }/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
