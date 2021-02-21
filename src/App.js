import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Map from './components/Map';

function App() {
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
    sessions: {}, 
    housing: true, 
    review: null,
    image: "https://www.ctvnews.ca/polopoly_fs/1.4977370.1591756865!/httpImage/image.jpg_gen/derivatives/landscape_960/image.jpg",
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
          {/* <Route path='/' exact>
            <Home />
          </Route> */}

          {/* <Route path='/listingprops' exact>
            <Listing { ...testListingProps}/>
          </Route>  */}

          <Route path='/' exact>
            <Map />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
