import React from 'react';
import { Row, Col, Manu, BackTop } from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import PCNewsImgBlock from './pc_news_img_block';
import CommonComments from './common_commits'

export default class MobileNewsDetails extends React.Component {
		
	constructor(){
		super();
		this.state={
			newsItem:''
		};
	};

	componentDidMount() {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
			this.setState({newsItem: json});
			document.title = this.state.newsItem.title + " - React News | Lu's News Demo";
		})
	};

	createMarkup(){
		return {__html: this.state.newsItem.pagecontent};
	};
	
	render(){

		return(
			<div id='mobileDetailContainer'>
				<MobileHeader></MobileHeader>
				<div class='ucmobileList'></div>
				<Row>
					<Col span={24} className='container'>
						<div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
						<hr/>
						<CommonComments uniquekey={this.props.params.uniquekey}></CommonComments>
					</Col>
				</Row>
				<MobileFooter></MobileFooter>
				<BackTop></BackTop>
			</div>



			);
	}

}