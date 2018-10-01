import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import 'antd/lib/style/v2-compatible-reset';
import PC_Router from './components/pc_router'
import Mobile_Router from './components/mobile_router'
import MediaQuery from 'react-responsive';

export default class Root extends React.Component {
	render() {
		return (
			
			<div>
				<MediaQuery query='(min-device-width: 1224px)'>
				<PC_Router/>
				</MediaQuery>
				<MediaQuery query='(max-device-width: 1224px)'>
				<Mobile_Router/>
				</MediaQuery>
			</div>
			
		);
	};
}
ReactDOM.render(
	<Root/>, document.getElementById('mainContainer'));


	