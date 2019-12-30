import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Firebase, { FirebaseProvider } from './tools/firebase';


import routes from './Routes';

import TopBar from './presentational/TopBar/TopBar';

function App() {

  return (
    <FirebaseProvider value={new Firebase()}>
      <div className="App">
        <Router>
          <TopBar routes={routes}></TopBar>
          <Switch>
            {routes.map((route) => (
              <Route path={route.path} exact>
                {route.render()}
              </Route>
            ))}
          </Switch>
        </Router>
      </div>
    </FirebaseProvider>
  );
}

export default App;
