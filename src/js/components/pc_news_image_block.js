import React from 'react';
import {Card} from 'antd';
import {Link} from 'react-router-dom';
export default class PCNewsImageBlock extends React.Component {
	constructor() {
		super();
		this.state = {
			news: ''
		};
	}
	componentWillMount() {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions)
		.then(response => response.json())
		.then(
			json => {
				
				//console.log(json)
				this.setState({news: json});
				//console.log(typeof(this.state.news));
			});
				
				
	};
	render() {
		const styleImage = {
			display: "block",
			width: this.props.imageWidth,
			height: "90px"
		};
		const styeH3 = {
			width: this.props.imageWidth,
			whiteSpace: "nowrap",
			overflow: "hidden",
			textOverflow: "ellipsis"
		};
		const {news} = this.state;
		const newsList = news.length
			? 
			news.map((newsItem, index) => (
				<div key={index} class="imageblock">
					<Link to={`/details/${newsItem.uniquekey}`}>
						<div class="custom-image">
							<img alt="" style={styleImage} src={newsItem.thumbnail_pic_s}/>
						</div>
						<div class="custom-card">
							<h3 style={styeH3}>{newsItem.title}</h3>
							<p>{newsItem.author_name}</p>
						</div>
					</Link>
				</div>
			))
			: 'Loading....';
		return (
			<div class="topNewsList">
				<Card title={this.props.cartTitle} bordered={true} style={{
					width: this.props.width
				}}>
					{newsList}
				</Card>
			</div>
		);
	};
}
