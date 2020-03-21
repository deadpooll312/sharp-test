import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

// local files
import Login from './Login';
import Registration from './Registration';
import Сontainer from './Container';

export default function App() {
  return <div className="container">
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route component={Сontainer} />
      </Switch>
    </BrowserRouter>
  </div>
}
