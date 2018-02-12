import React from 'react';
import { Row, Col, Manu, BackTop } from 'antd';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCNewsImgBlock from './pc_news_img_block';
import CommonComments from './common_commits'

export default class PCNewsDetails extends React.Component {
		
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
			<div>
				<PCHeader></PCHeader>
				<Row>
					<Col span={2}>
					</Col>
					<Col span={14} className='container'>
						<div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
						<CommonComments uniquekey={this.props.params.uniquekey}></CommonComments>
					</Col>
					<Col span={6}>
						<PCNewsImgBlock count={30} type='top' width='100%' cardTitle='RelatedNews' imageWidth='150px'></PCNewsImgBlock>
					</Col>
					<Col span={2}>
					</Col>
				</Row>
				<PCFooter></PCFooter>
				<BackTop></BackTop>
			</div>



			);
	}

}