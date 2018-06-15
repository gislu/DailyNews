import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import {Button} from 'antd';
import MediaQuery from 'react-responsive';
import 'antd/dist/antd.css';
import PCIndex from './comp/pc_index'
import MobileIndex from './comp/mobile_index';
import PCNewsDetails from './comp/pc_news_details';
import PCUserCenter from './comp/pc_usercenter';
import MobileUserCenter from './comp/mobile_usercenter';
import MobileNewsDetails from './comp/mobile_news_details';
 

export default class Root extends React.Component{
  render(){
    return (
      //这里替换了之前的 Index，变成了程序的入口
      <div>
      	<MediaQuery query='(min-device-width:1224px)'>
          <Router history={hashHistory}>
            <Route path="/" component={PCIndex}></Route>
            <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
            <Route path="/usercenter" component={PCUserCenter}></Route>
          </Router>
      	
      	</MediaQuery>

      	<MediaQuery query='(max-device-width:1224px)'>
        <Router history={hashHistory}>
            <Route path="/" component={MobileIndex}></Route>
            <Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
            <Route path="/usercenter" component={MobileUserCenter}></Route>
          </Router>
      	</MediaQuery>
    </div>
    );
  };	
}

ReactDOM.render(<Root/>, document.getElementById('example'));