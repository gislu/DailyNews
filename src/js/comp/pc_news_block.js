import React from 'react';
import {Card} from 'antd';
import {Router, Route, Link, browserHistory} from 'react-router';

export default class PCNewsBlock extends React.Component{

	constructor(){
		super();
		this.state = {
			news:''
		};
	};

	componentWillMount(){
		var myFetch = {
			method:'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetch)
		.then(response => response.json())
		.then(json=>this.setState({news:json}));
	};

	render(){
		const {news}=this.state;
		const newsList = news.length?
		news.map((newsItem,index)=>(
			<li key={index}>
				<Link to={`details/${newsItem.uniquekey}`} target='_blank'>
					{newsItem.title}
				</Link>
			</li>
			))
		:'Loadding News...'
		return(
			<div class='topNewsList'>
				<Card>
					<ul>
						{newsList}
					</ul>
				</Card>

			</div>
		);
	};
}