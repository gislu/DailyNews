import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter,Switch} from 'react-router-dom';
import PCIndex from './components/pc_index';
import PCNewsDetails from './components/pc_news_details';
import MobileNewsDetails from './components/mobile_news_details';
import MobileIndex from './components/mobile_index';
import PCUserCenter from './components/pc_usercenter';
import MobileUserCenter from './components/mobile_usercenter';
import PC_VideoDemo from './components/pc_videodemo';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
import {LocaleProvider} from 'antd';
import en_GB from 'antd/lib/locale-provider/en_GB';

export default class Root extends React.Component {
	render() {
		return (
			
			<LocaleProvider locale={en_GB}>
			<div>
				<MediaQuery query='(min-device-width: 1224px)'>
					<BrowserRouter>
						<Switch>
							<Route exact path="/" component={PCIndex}></Route>
							<Route path="/details/:url" component={PCNewsDetails}></Route>
							<Route path="/usercenter" component={PCUserCenter}></Route>
							<Route path="/videodemo" component={PC_VideoDemo}></Route>
						</Switch>
					</BrowserRouter>
				</MediaQuery>
				<MediaQuery query='(max-device-width: 1224px)'>
					<BrowserRouter>
						<Switch>
							<Route exact path="/" component={MobileIndex}></Route>
							<Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
							<Route path="/usercenter" component={MobileUserCenter}></Route>
						</Switch>
					</BrowserRouter>
				</MediaQuery>
			</div>
			</LocaleProvider>
			
		);
	};
}
ReactDOM.render(
	<Root/>, document.getElementById('mainContainer'));


	