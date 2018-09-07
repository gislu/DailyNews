import React from 'react';
import {Row, Col, BackTop, message} from 'antd';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import CommonComments from './common_comments';
import createHistory from "history/createBrowserHistory";
export default class PCNewsDetails extends React.Component {
	constructor() {
		super();
		this.state = {
			newsItem: ''
		};
	};
    escFunction(event){
        if(event.keyCode === 27) {
          //Do whatever when esc is pressed
          const history = createHistory();
          history.goBack();
        }
      }

    componentDidMount(){
        message.info("Press 'ESC' to back.");
        document.addEventListener("keydown", this.escFunction, false);
      }
    
      componentWillUnmount(){
        document.removeEventListener("keydown", this.escFunction, false);
	  }
	  
	render() {
		console.log(decodeURIComponent(this.props.match.params.url));
		document.title = decodeURIComponent(this.props.match.params.title)+ " - Daily News | Base on React";
		return (
			<div>
				<PCHeader></PCHeader>
				<Row>
					<Col span={3}></Col>
					
					<Col span={16} className="container">
							<div className="articleContainer">
								<iframe className="mainArticle" src={decodeURIComponent(this.props.match.params.url)}></iframe>	
							</div>
							<CommonComments uniquekey={decodeURIComponent(this.props.match.params.url)}/>
					</Col>
					<Col span={3}></Col>
				</Row>
				<PCFooter></PCFooter>
				<BackTop/>
			</div>
		);
	};
}
