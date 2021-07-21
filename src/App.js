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
        <Route path="/">
          <Layout>
            <Switch>
              <Route
                path="/dash"
              >
                <Dashboard>
                  <Switch>
                    <Route
                      exact
                      path="/link"
                      component={LinkDashboard}
                    ></Route>
                  </Switch>
                </Dashboard>
              </Route>
            </Switch>
          </Layout>
        </Route>
        {/*  <Route component={Error404} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
