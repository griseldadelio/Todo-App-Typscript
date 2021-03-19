import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AddUsersForm } from './Add';
import { User } from './List'

export const Users: FC = () => {
    return (
        <Router>
            <Switch>
                <Route path='/users/add' component={AddUsersForm} />
                <Route path='/users/' component={User} />
            </Switch>
        </Router>
    )
}
