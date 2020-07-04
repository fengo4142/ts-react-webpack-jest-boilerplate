import React, { FC } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import CustomLayout from '../layouts/MobileLayout';
import './App.scss';

const App: FC = () => {
  return (
      <Router>
        <Switch>
          {/* <Route exact path="/list" component={ListSalon} />         
          <CustomLayout>
              <Route exact path="/detail" component={DetailSalon} />
          </CustomLayout> */}
        </Switch>
    </Router>
  );
}

export default App;
