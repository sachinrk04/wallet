import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Wallet from './containers/Wallet/Wallet';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/wallet" component={Wallet} />
        </Switch>
      </div>
    );
  }
}

export default App;
