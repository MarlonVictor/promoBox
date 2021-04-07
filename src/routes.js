import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import FormPage from './pages/FormPage';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/create" component={FormPage}/>
            <Route path="/edit/:id" component={FormPage}/>
            <Route path="/" component={MainPage}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;