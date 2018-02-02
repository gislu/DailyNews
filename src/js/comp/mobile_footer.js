import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Manu} from 'antd';
import 'antd/dist/antd.css';


export default class MobileFooter extends React.Component{

		render(){
			return(
				<header>
					<Row>
						<Col span={2}></Col>
						<Col span={20} class='footer'>
							&copy;&nbsp;2018 ReactNews. All Rights Reserved.
						</Col>
						<Col span={2}></Col>
					</Row>
				</header>
				);
		};
	}