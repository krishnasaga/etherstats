import React from 'react';
import darkTheme from './themes/dark';
import CryptoAssetsInfo from './Cryptoassets';
import CryptoList from './CryptoList';

import { Box, Grid ,ThemeProvider  } from 'theme-ui';
import {
  BrowserRouter as Router,
  Route,Routes
} from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from './Components/ToNav';

export default function App() {
  return (
    <Auth0Provider
    domain="cryptoriver.eu.auth0.com"
    clientId="SrR6EyhiJh25Nyqgi5v5r7Fd6uqkvNaQ"
    cacheLocation='localstorage'
    redirectUri={window.location.origin}
  >
    <ThemeProvider theme={darkTheme}>
    <Router>
      <Layout>
       
          <Routes>
            <Route path={'/'} element={<CryptoList />} />
            <Route path={'/cryptoassets/:id'} element={<CryptoAssetsInfo />} />
          </Routes>
       
      </Layout>       
      </Router>
    </ThemeProvider>
    </Auth0Provider>
  );
}


const Layout = ({children}) => {
  return <Box>
    <Box>
      <Grid>
        <Box>
          <LoginButton/>
        </Box>
      </Grid>
    </Box>
   {children}
  </Box>
}
