import React from 'react';
import {Route, HashRouter,Switch} from 'react-router-dom';
import PCNewsDetails from './pc_news_details';
import MobileIndex from './mobile_index';
import MobileUserCenter from './mobile_usercenter';


export default class Mobile_Router extends React.Component{
    render(){
        return(
            <HashRouter>
						<Switch>
							<Route exact path="/" component={MobileIndex}></Route>
							<Route path="/details/:url/:title" component={PCNewsDetails}></Route>
							<Route path="/usercenter" component={MobileUserCenter}></Route>
						</Switch>
			</HashRouter>
        );
    }
}