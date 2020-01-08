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
import { StylesProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#273A3C',
    },
    secondary: {
      main: '#FF2600',
    },
    text: {
      color: '#273A3C',
    }
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <div className="App">
          <Router>
            <TopBar routes={routes}></TopBar>
            <Switch>
              {routes.map((route, idx) => (
                <Route path={route.path} key={idx} exact>
                  {route.render()}
                </Route>
              ))}
            </Switch>
            <Footer />
          </Router>
        </div>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
