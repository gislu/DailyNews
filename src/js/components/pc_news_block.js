import React from 'react';
import {Card} from 'antd';
import {Link} from 'react-router-dom';
export default class PCNewsBlock extends React.Component {
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
		let url ="https://newsapi.org/v2/top-headlines?country=us&category="+this.props.type+"&pageSize="+this.props.count+"&apiKey=8611169f68f94d8582ac555bf7173ec4";
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
		const {news} = this.state;
		const newsList = news.length
			? news.map((newsItem, index) => (
				<li key={index}>
					<Link to=
					{{
						pathname: `details/${encodeURIComponent(newsItem.url)}/${encodeURIComponent(newsItem.title)}`
					  }} title={newsItem.title}>
						{newsItem.title}
					</Link>
				</li>
			))
			: 'Loading.....';
		return (
			<div class="topNewsList">
				<Card>
					<ul>
						{newsList}
					</ul>
				</Card>
			</div>
		);
	};
}
