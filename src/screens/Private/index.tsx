import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Tasks } from './Tasks';
import { Users } from './Users';
import { Home } from './Home';

export const Private = () => {
    return (
        <Router>
            <Switch>
                <Route path='/tasks' component={Tasks} />
                <Route path='/users' component={Users} />
                <Route path='/' component={Home} />
            </Switch>
        </Router>
    )
}
