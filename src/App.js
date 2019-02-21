import React, { Component } from 'react';
import TestComponent from './components/test_component'


const income_groups = {
  '50' : {
    'group_population' : 13829,
    'home_owner_population' : 2865,
    'family_home_owner_population' : 1331,
    'nonfamily_home_owner_population' : 1534,
    'renter_population' : 10964,
    'family_renter_population' : 1588,
    'nonfamily_renter_population' : 9376,
    'market_size' : 9376
  },
  '75' : {
    'group_population' : 7710,
    'home_owner_population' : 1896,
    'family_home_owner_population' : 880,
    'nonfamily_home_owner_population' : 1016,
    'renter_population' : 5814,
    'family_renter_population' : 842,
    'nonfamily_renter_population' : 4972,
    'market_size' : 4972
  },
  '100' : {
    'group_population' : 4728,
    'home_owner_population' : 1475,
    'family_home_owner_population' : 685,
    'nonfamily_home_owner_population' : 790,
    'renter_population' : 3253,
    'family_renter_population' : 471,
    'nonfamily_renter_population' : 2782,
    'market_size' : 2782
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <TestComponent 
          segment_number={2}
          segment_age_group={'25-34'}
          segment_population={32219}
          total_population={120448}
          income_groups={income_groups} />
      </div>
     
    );
  }
}

export default App;
