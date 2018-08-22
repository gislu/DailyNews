import React from 'react';
import {Route, HashRouter ,Switch} from 'react-router-dom';
import PCIndex from './pc_index';
import PCNewsDetails from './pc_news_details';
import PCUserCenter from './pc_usercenter';
import PCVideoDemo from './pc_videodemo';


export default class PC_Router extends React.Component{    
    render(){
        return(
            <HashRouter>
						<Switch>
							<Route exact path="/" component={PCIndex}></Route>
							<Route path="/details/:url/:title" component={PCNewsDetails}></Route>
							<Route path="/usercenter" component={PCUserCenter}></Route>
							<Route path="/videodemo" component={PCVideoDemo}></Route>
						</Switch>
					</HashRouter >
        );
    };

}