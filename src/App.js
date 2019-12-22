import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import routes from './Routes';

import TopBar from './presentational/TopBar/TopBar';

function App() {

  return (
    <div className="App">
      <Router>
        <TopBar routes={routes}></TopBar>
        <Switch>
          {routes.map((route)=>(
            <Route path={route.path} exact>
              {route.render()}
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
