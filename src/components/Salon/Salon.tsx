import React, { FC } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router';

import ListSalon from './ListSalon';
import DetailSalon from './DetailSalon';

import styles from './Salon.module.scss';


export const Salon: FC = () => {
  const { path } = useRouteMatch();
  
  return (
    <div className={styles.root}>
      <Switch>
        <Route exact path={`${path}/list`} component={ListSalon} />        
        <Route path={`${path}/list/:id`} component={DetailSalon} />
        <Redirect path={`${path}/*`} to={`${path}`} />
        <Redirect exact from={path} to={`${path}/list`} />
      </Switch>
    </div>
  );
};
