import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact>
                    <Users />
                </Route>
                <Route path='/places/new' exact>
                    <NewPlace />
                </Route>
                {/* If no route matching, redirect to this path */}
                <Redirect to='/' />
            </Switch>
        </Router>
    );
};

export default App;
