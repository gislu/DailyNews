import React from 'react';
import {Row, Col, BackTop} from 'antd';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCNewsImageBlock from './pc_news_image_block';
import CommonComments from './common_comments';
export default class PCNewsDetails extends React.Component {
	constructor() {
		super();
		this.state = {
			newsItem: ''
		};
	};
	componentDidMount() {
		// var myFetchOptions = {
		// 	method: 'GET'
		// };
		// fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=161027205327233", myFetchOptions).then(response => response.json()).then(json => {
		// 	this.setState({newsItem: json});
		// 	document.title = this.state.newsItem.title + " - Daily News | Base on React";
		// })
	};

	createMarkup() {
		return {__html: this.state.newsItem.pagecontent};
	};
	render() {
		console.log(decodeURIComponent(this.props.match.params.url));
		document.title = decodeURIComponent(this.props.match.params.title)+ " - Daily News | Base on React";
		return (
			<div>
				<PCHeader></PCHeader>
				<Row>
					<Col span={2}></Col>
					<Col span={14} className="container">
						<div class="articleContainer">
						<iframe src={decodeURIComponent(this.props.match.params.url)}></iframe>	
						</div>
							<CommonComments uniquekey={decodeURIComponent(this.props.match.params.url)}/>
					</Col>
					<Col span={6}>
						<PCNewsImageBlock count={40} type="top" width="100%" cardTitle="Related News" imageWidth="150px"/>
					</Col>
					<Col span={2}></Col>
				</Row>
				<PCFooter></PCFooter>
				<BackTop/>
			</div>
		);
	};
}
