import React from 'react';
import {Card} from 'antd';
import {Link} from 'react-router-dom';
export default class PCNewsBlock extends React.Component {
	constructor() {
		super();
		this.state = {
			news: '',
			newsapi:''
		};
	}
	componentWillMount() {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions).then(response => response.json()).then(json => this.setState({news: json}));
		const NewsAPI = require('newsapi');
		const newsapi = new NewsAPI('8611169f68f94d8582ac555bf7173ec4');
		newsapi.v2.sources({
			category: 'technology',
			language: 'en',
			country: 'us'
		  }).then(response =>{
			console.log(response);  
			this.setState({newsapi:response})});
	};
	render() {
		const {news} = this.state;
		const newsList = news.length
			? news.map((newsItem, index) => (
				<li key={index}>
					<Link to={`details/${newsItem.uniquekey}`}>
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
