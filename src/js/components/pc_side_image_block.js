import React from 'react';
import {Card} from 'antd';
import {Link} from 'react-router-dom';
export default class PCSideImageBlock extends React.Component {
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
		let count = this.props.count + 0;
		let url ="https://newsapi.org/v2/top-headlines?country=us&category="+this.props.type+"&pageSize="+ count +"&apiKey=8611169f68f94d8582ac555bf7173ec4";
		fetch(url,myFetchOptions)
		.then(response => response.json())
		.then(
			json => {
			this.setState({news: json.articles})
			//console.log(this.state.news);
		}	
		);
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
					<Link to={`/details/${newsItem.url}`}>
						<div class="custom-image">
							<img alt="Load Failed" style={styleImage} src={newsItem.urlToImage}/>
						</div>
						<div class="custom-card ">
							<h3 style={styeH3}>{newsItem.title}</h3>
							<p>{newsItem.source.name}</p>
						</div>
					</Link>
				</div>
			))
			: 'Loading....';
		return (
			<div class="topNewsList">
				<Card title={this.props.cartTitle} bordered={true} style={{
					width: this.props.widthx
				}}>
					{newsList}
				</Card>
			</div>
		);
	};
}
