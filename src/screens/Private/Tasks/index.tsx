import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Add } from './Add';
import { List } from './List'

export const Tasks = () => {
    return (
        <Router>
            <Switch>
                <Route path='/tasks/add' component={Add} />
                <Route path='/tasks/edit/:id' component={Add} />
                <Route path='/tasks' component={List} />
            </Switch>
        </Router>
    )
}
