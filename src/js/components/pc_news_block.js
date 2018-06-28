import React from 'react';
import {Card} from 'antd';
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
		//fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions).then(response => response.json()).then(json => this.setState({news: json}));
		let url ="https://newsapi.org/v2/top-headlines?country=us&category="+this.props.type+"&apiKey=8611169f68f94d8582ac555bf7173ec4";
		fetch(url,myFetchOptions)
		.then(response => response.json())
		.then(
			json => {
			console.log((typeof(json)))
			this.setState({news: json.articles})
			console.log(typeof(this.state.news));
		}	
		);
	};
	render() {
		const {newsapi} = this.state;
		const newsList ="";
		// const newsList = newsapi.length
		// 	? newsapi.articles.map((newsItem, index) => (
		// 		<li key={index}>
		// 			<Link to={`details/${newsItem.url}`}>
		// 				{newsItem.title}
		// 			</Link>
		// 		</li>
		// 	))
		// 	: 'Loading.....';
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
