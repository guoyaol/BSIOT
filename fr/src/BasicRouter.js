import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import { history } from "./utils/history";
import IndexView from "./view/IndexView";
import LoginView from "./view/LoginView";
import RegisterView from "./view/RegiterView";
import OurMap from "./view/MapView";
import Device from "./view/DeviceView";
import Message from "./view/MessageView"


/** 全局路由 **/
class BasicRouter extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            console.log(location, action);
        });
    }

    render() {
        return (
            <Router history={ history }>
                <Switch>
                    <Route exact path="/index" component={ IndexView }/>
                    <Route exact path="/login" component={LoginView}/>
                    <Route exact path="/register" component={RegisterView}/>
                    <Route exact path="/message" component={Message}/>                
                    <Route exact path="/device" component={Device}/>
                    <Route exact path="/map" component={OurMap}/>
                    <Redirect to="/index"/>
                </Switch>
            </Router>
        )
    }
}

export default BasicRouter;