import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import EditView from './components/EditView';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/edit/:id' component={EditView} />
    </Switch>
)