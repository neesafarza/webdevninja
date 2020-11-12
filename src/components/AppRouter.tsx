import React from 'react';
import { Route, Router, useHistory, Switch, BrowserRouter } from 'react-router-dom';
import CardPage from './CardPage';
import CardsCollection from './CardsCollection';
import Topbar from './Topbar';

const AppRouter = () => {
  return (
  <BrowserRouter>
    <Topbar></Topbar>
    <Switch>
    <Route exact path='/' component={CardsCollection}></Route>
    <Route path = '/topic/:id' component={CardPage}></Route>
    </Switch>
  </BrowserRouter>
  )
}

export default AppRouter;