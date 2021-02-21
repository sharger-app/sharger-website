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
    wattage: "30kW", 
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

  const testListingProps1 = {
    owner: {
      first_name: "Jackson",
      last_name: "Smith",
    },
    name: "Smith Fam Charger",
    speed: "Fast", 
    plug: "Type C", 
    wattage: "7kW", 
    address: "80 Upper Canada Dr North York ON", 
    sessions: {}, 
    housing: true, 
    review: null,
    image: "https://www.homestratosphere.com/wp-content/uploads/2018/09/house-with-concrete-driveway-50-090318.jpg",
  };

  const testListingProps2 = {
    owner: {
      first_name: "Emily",
      last_name: "Williams",
    },
    name: "Emily's Fast Charger",
    speed: "Fast", 
    plug: "Type B", 
    wattage: "20kW", 
    address: "26 Markham Road Scarborough Toronto ON", 
    sessions: {}, 
    housing: true, 
    review: null,
    image: "https://14av231vas55424hmywyupd1-wpengine.netdna-ssl.com/blog/wp-content/uploads/2020/02/23W410-Woodcrest-Ctm_2.jpg",
  };

  const testListingProps3 = {
    owner: {
      first_name: "David",
      last_name: "Hall",
    },
    name: "The Flash",
    speed: "Rapid", 
    plug: "Type A", 
    wattage: "50kW", 
    address: "5 Leuty Ave Toronto, ON", 
    sessions: {}, 
    housing: true, 
    review: null,
    image: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2015/8/5/1/CI_Colorado%20ASLA_Ways%20to%20Enhance%20Your%20Driveway.jpg.rend.hgtvcom.966.725.suffix/1438820794470.jpeg",
  };

  const testListingProps4 = {
    owner: {
      first_name: "Katie",
      last_name: "Wu",
    },
    name: "Favourite EVC",
    speed: "Fast", 
    plug: "Type B", 
    wattage: "15kW", 
    address: "36 Tullamore Dr North York ON", 
    sessions: {}, 
    housing: true, 
    review: null,
    image: "https://www.readersdigest.ca/wp-content/uploads/2019/01/a-heated-driveway-is-it-actually-worth-it.jpg",
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

          <Route path='/map' exact>
            <Map />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
