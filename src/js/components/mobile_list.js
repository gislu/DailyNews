import React from 'react';
import {Row,Col} from 'antd';
import {Link} from 'react-router-dom';
export default class MobileList extends React.Component {
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
		let count = this.props.count + 15;
		let url ="https://newsapi.org/v2/top-headlines?country=us&category="+this.props.type+"&pageSize="+ count +"&apiKey=8611169f68f94d8582ac555bf7173ec4";
		fetch(url,myFetchOptions)
		.then(response => response.json())
		.then(
			json => {
			let artpool = json.articles;
			let articles = [];
			let num = 0;
			for(let item in artpool){
				if(artpool[item].urlToImage == null){
					continue;
				}
				if(num < this.props.count){
					num++;
					articles.push(artpool[item]);
				}
				
			}
			console.log("url is: " + url);
			console.log(articles);
			this.setState({news: articles})
		}	
		);
	};
	render() {
		const {news} = this.state;
		const newsList = news.length
			? news.map((newsItem, index) => (
        <section key={index} className="m_article list-item special_section clearfix">
					<Link to=
					{{
						pathname: `details/${encodeURIComponent(newsItem.url)}/${encodeURIComponent(newsItem.title)}`
					  }}>
            <div className="m_article_img">
              <img src={newsItem.urlToImage} alt={newsItem.title} />
            </div>
            <div className="m_article_info">
              <div className="m_article_title">
                <span>{newsItem.title}</span>
              </div>
              <div className="m_article_desc clearfix">
                <div className="m_article_desc_l">
                  <span className="m_article_channel">{this.props.type}</span>
                  <span className="m_article_time">{newsItem.publishedAt}</span>
                </div>
              </div>
            </div>
          </Link>
        </section>
			))
			: 'Loading....';
		return (
			<div>
				 <Row>
           <Col span={24}>
             {newsList}
           </Col>
         </Row>
			</div>
		);
	};
}
