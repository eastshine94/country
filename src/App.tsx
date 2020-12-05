import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import {PAGE_PATHS} from '~/constants';
import { Home } from '~/pages';

class App extends Component {
    render(){
        return(
            <Router>
                <Switch>
                    <Route path={PAGE_PATHS.HOME} component={Home}/>
                </Switch>
            </Router>
        )
    }
}


export default App;