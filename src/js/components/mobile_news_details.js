import React from 'react';
import {Row, Col, BackTop} from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import CommonComments from './common_comments';
export default class MobileNewsDetails extends React.Component {
	constructor() {
		super();
		this.state = {
			newsItem: ''
		};
	};
	componentDidMount() {
	};
	createMarkup() {
		return {__html: this.state.newsItem.pagecontent};
	};
	render() {
		return (
			<div id="mobileDetailsContainer">
				<MobileHeader></MobileHeader>
				<div class="ucmobileList">
					<Row>
						<Col span={24} className="container">
							<div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
							<hr/>
							<CommonComments uniquekey={this.props.match.params.uniquekey}/>
						</Col>
					</Row>
					<MobileFooter></MobileFooter>
					<BackTop/></div>
			</div>
		);
	};
}
