import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import routes from './Routes';
import TopBar from './presentational/TopBar/TopBar';
import Footer from './presentational/Footer/Footer';

import Firebase, {FirebaseProvider} from './container/Firebase';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/core/styles';

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
      <StylesProvider injectFirst>
      <FirebaseProvider value={ new Firebase() }>
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
      </FirebaseProvider>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
