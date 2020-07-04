import React, { FC } from 'react';
import { Router } from 'react-router';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history'

import { AppRouteProps } from '../interfaces';
import MainLayout from '../layouts/MainLayout';
import Salon from '../components/Salon';

import './App.scss';

function dummyLayout(props: any) {
  return props.children;
}

const history = createBrowserHistory()

// HERE you can customized for differnet routes like private route and public one
const AppRoute: FC<AppRouteProps> = (props: any) => {
  const { children, component, layout, ...rest } = props;

  return (
    <Route
      {...rest}
      render={() => {
        const Layout = layout ? layout : dummyLayout;
        return (<Layout>{component ? React.createElement(component) : children}</Layout>)
      }}
    />
  );
};

const App: FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <AppRoute path="/salon" component={Salon} layout={MainLayout} />
        <Redirect exact path="/*" to={'/salon'} />
      </Switch>
    </Router>
  );
}

export default App;
