import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import MediaQuery from 'react-responsive';
import 'antd/dist/antd.css';
import PCIndex from './comp/pc_index'
import MobileIndex from './comp/mobile_index';
 

export default class Root extends React.Component{
  render(){
    return (
      //这里替换了之前的 Index，变成了程序的入口
      <div>
      	<MediaQuery query='(min-device-width:1224px)'>
      	<PCIndex/>
      	</MediaQuery>

      	<MediaQuery query='(max-device-width:1224px)'>
      	<MobileIndex/>
      	</MediaQuery>
    </div>
    );
  };	
}

ReactDOM.render(<Root/>, document.getElementById('example'));