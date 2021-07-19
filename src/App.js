import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// Components

import ScrollToTop from './components/scrollToTop/ScrollToTop'
import Layout from './components/layout/Layout'
import Dashboard from './dashboard/Dashboard'
import LinkDashboard from './dashboard/linkDashboard/LinkDashboard'
import SettingsDashboard from './dashboard/settingsDashboard/SettingsDashboard'
import AppearanceDashboard from './dashboard/appearanceDashboard/AppearanceDashboard'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        {/** Rutas que necesitan el layout **/}
        <Route path="/:path?">
          <Layout>
            <Switch>
              <Route path="/dash">
                <Dashboard>
                  <Switch>
                    <Route
                      exact
                      path="/link"
                      component={LinkDashboard}
                    ></Route>
                    <Route
                      exact
                      path="/settings"
                      component={SettingsDashboard}
                    ></Route>
                    <Route
                      exact
                      path="/appearance"
                      component={AppearanceDashboard}
                    ></Route>
                  </Switch>
                </Dashboard>
              </Route>
              {/* <Route
                exact
                path="/"
                component={LinkDashboard}
                user={{}}
                instance={'primary'}
              ></Route> */}
            </Switch>
          </Layout>
        </Route>
        {/*  <Route component={Error404} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
