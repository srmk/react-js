import React, { Component, Fragment } from 'react'; 
import { BrowserRouter as Router,
    Route,
    Switch } from "react-router-dom";

import Home from '../modules/home_page';
import NoMatch from './no_match';
import MensOuterwear from '../modules/mens_outerwear';
import LadiesOuterwear from '../modules/ladies_outerwear';
import MensTshirts from '../modules/mens_tshirts';
import LadiesTshirts from '../modules/ladies_tshirts';
import NavigationLink from '../components/navigation_link';

class MainRouter extends Component {
    render() {
        // console.log(this.props);
        // const { history: { location: { pathname } } } = this.props;
        
        return (
            <Router>
                <Fragment>
                    <NavigationLink />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route
                            path="/mens_outerwear"
                            render={(props) => <MensOuterwear {...props}/>}
                        />
                        <Route
                            path="/ladies_outerwear"
                            render={(props) => <LadiesOuterwear {...props}/>}
                        />
                        <Route
                            path="/mens_tshirts"
                            render={(props) => <MensTshirts {...props}/>}
                        />
                        <Route
                            path="/ladies_tshirts"
                            render={(props) => <LadiesTshirts {...props}/>}
                        />
                        <Route path="*" component={NoMatch} />
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default MainRouter;