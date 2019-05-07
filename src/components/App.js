import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './Navigation';
import Home from './Home/';
import SignUp from './SignUp/';
import SignIn from './SignIn/';
import Profile from './Profile/';
import Result from './Result/';
import Rent from './Rent/';
import FindBooking from './FindBooking/';
import RentOut from './RentOut/';
import Reciept from './Reciept/';

const App = () => (
  <Router>
    <div className="main-container">
      <Navigation signedIn={false} />
      <div className="page-container">
        <Switch>
          <Route exact path="/result" render={Result} />
          <Route exact path="/rentout" render={RentOut} />
          <Route exact path="/rent" render={Rent} />
          <Route exact path="/reciept" render={Reciept} />
          <Route exact path="/signin" render={SignIn} />
          <Route exact path="/signup" render={SignUp} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/booking/find" component={FindBooking} />
          <Route exact path="/" render={Home} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
