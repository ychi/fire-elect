import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Shoegaze from './presentational/Shoegaze/Shoegaze';
import Dummy from './presentational/Dummy/Dummy';


function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/predict">You predict it</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <Dummy text="About" />
          </Route>
          <Route path="/predict">
            <Dummy text="You predict it."/>
          </Route>
          <Route path="/">
            <Shoegaze />
          </Route>
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
