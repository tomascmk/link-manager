import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

// Components

import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import Layout from "./components/layout/Layout";
import Dashboard from "./dashboard/Dashboard";
import LinkDashboard from "./dashboard/linkDashboard/LinkDashboard";
import SettingsDashboard from "./dashboard/settingsDashboard/SettingsDashboard";
import styleDashboard from "./dashboard/styleDashboard/styleDashboard";

const routes = [
  {
    path: "/",
    component: LayoutContainer,
    routes: [
      {
        path: "/dash",
        component: DashboardContainer,
        routes: [
          {
            path: "/dash/links",
            component: LinkDashboard,
          },
          {
            path: "/dash/appearance",
            component: styleDashboard,
          },
          {
            path: "/dash/settings",
            component: SettingsDashboard,
          },
        ],
      },
    ],
  },
];

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
        {/*  <Route component={Error404} /> */}
      </Switch>
    </BrowserRouter>
  );
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}

function LayoutContainer({ routes }) {
  return (
    <>
      <Layout>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Layout>
    </>
  );
}

function DashboardContainer({ routes }) {
  return (
    <>
      <Dashboard>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </Dashboard>
    </>
  );
}

export default App;
