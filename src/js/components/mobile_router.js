import React from 'react';
import {Route, BrowserRouter,Switch} from 'react-router-dom';
import MobileNewsDetails from './mobile_news_details';
import MobileIndex from './mobile_index';
import MobileUserCenter from './mobile_usercenter';

export default class Mobile_Router extends React.Component{
    render(){
        return(
            <BrowserRouter>
						<Switch>
							<Route exact path="/" component={MobileIndex}></Route>
							<Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
							<Route path="/usercenter" component={MobileUserCenter}></Route>
						</Switch>
					</BrowserRouter>
        );
    }
}