import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import PC_Router from './components/pc_router'
import Mobile_Router from './components/mobile_router'
import MediaQuery from 'react-responsive';
import {LocaleProvider} from 'antd';
import en_GB from 'antd/lib/locale-provider/en_GB';

export default class Root extends React.Component {
	render() {
		return (
			
			<LocaleProvider locale={en_GB}>
			<div>
				<MediaQuery query='(min-device-width: 1224px)'>
				<PC_Router/>
				</MediaQuery>
				<MediaQuery query='(max-device-width: 1224px)'>
				<Mobile_Router/>
				</MediaQuery>
			</div>
			</LocaleProvider>
			
		);
	};
}
ReactDOM.render(
	<Root/>, document.getElementById('mainContainer'));


	