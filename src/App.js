import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  useHistory,
} from "react-router-dom";


import Map from './components/Map';

import Home from './components/Home';
import Listing from './components/Listing';
import AddListing from './components/AddListing';
import Signin from './components/Signin';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

function App(props) { 

  const forceUpdate = useForceUpdate();

  const login = (username, password) => {
    if (username == "host" && password == "host") {
      cookies.set('id', '1', { path: '/' });
      cookies.set('first_name', 'Host', { path: '/' });
      cookies.set('last_name', 'Person', { path: '/' });
    } else if (username == "guest" && password == "guest") {
      cookies.set('id', '2', { path: '/' });
      cookies.set('first_name', 'Guest', { path: '/' });
      cookies.set('last_name', 'Person', { path: '/' });
    }
    forceUpdate();
  };

  const logout = () => {
    cookies.remove('id');
    cookies.remove('first_name');
    cookies.remove('last_name');
    forceUpdate();
  };

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
    sessions: [
      {start: new Date('December 17, 1995 03:24:00'), end: new Date('December 17, 1998 03:24:00')}, 
      {start: new Date('December 17, 1995 03:24:00'), end: new Date('December 17, 1998 03:24:00')}, 
      {start: new Date('December 17, 1995 03:24:00'), end: new Date('December 17, 1998 03:24:00')}, 
    ], 
    housing: true, 
    review: null,
    image: "https://www.ctvnews.ca/polopoly_fs/1.4977370.1591756865!/httpImage/image.jpg_gen/derivatives/landscape_960/image.jpg",
    rate: 0.07,
  };

  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home login={login} logout={logout}/>
          </Route>

          <Route path='/listingaddtest' exact>
            <AddListing login={login} logout={logout}/>
          </Route>

          <Route path='/listingtest' exact>
            <Listing { ...testListingProps } login={login} logout={logout}/>
          </Route>

          <Route path='/signin' exact>
            <Signin login={login} logout={logout}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
