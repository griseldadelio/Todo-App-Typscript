import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AddUsersForm } from './Add';
import { User } from './List'

export const Users: FC = () => {
    return (

        <Switch>
            <Route path='/users/add' component={AddUsersForm} />
            <Route path='/users/edit/:id' component={AddUsersForm} />
            <Route path='/users/' component={User} />
        </Switch>

    )
}
