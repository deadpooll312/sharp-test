import React, { Component, Fragment } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomeContainer from '../Home';
import ScorePageContainer from '../ScorePage';
import Header from '../../components/Header';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Switch>
          <Route path="/" exact component={HomeContainer}/>
        </Switch>
      </Fragment>
    );
  }
}

export default App;