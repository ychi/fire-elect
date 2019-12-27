import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import routes from './Routes';
import TopBar from './presentational/TopBar/TopBar';
import Footer from './presentational/Footer/Footer';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#000000',
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
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
          <Footer/>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
