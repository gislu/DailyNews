import React from 'react';

import { Row, Col, Manu } from 'antd';
import { Menu, Icon, Tabs, Carousel} from 'antd';
import PCNewsBlock from './pc_news_block';
import PCNewsImgBlock from './pc_news_img_block';
const TabPane = Tabs.TabPane;

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

	createMark(){
		return {_html:this.state.newsItem.pagecontent};
	};
	
	render(){

		return(
			<div>
				<Row>
					<Col span={2}></Col>
					<Col span={14} className='container'>
						<div class='articleContainer' dangerouslySetInnerHTML={this.createMark.bind(this)}>
							
						</div>
					</Col>
					<Col span={6}></Col>
					<Col span={2}></Col>
				</Row>
			</div>



			);
	}

}