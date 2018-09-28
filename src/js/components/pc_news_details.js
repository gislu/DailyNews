import React from 'react';
import {Row, Col, BackTop, Modal, message} from 'antd';
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

	countDown() {
		let secondsToGo = 4;
		const modal = Modal.confirm({
			title: "Wanna see more || Can't load the news?",
			content: `Some news sources don't allow us to use their news directly, so you need view the news via their website.
			(This modal will close after ${secondsToGo} seconds.)`,
			okText : "jump",
			onOk: ()=>{window.open(decodeURIComponent(this.props.match.params.url), "_blank")},
		});
		setInterval(() => {
			secondsToGo -= 1;
			modal.update({
				content: `Some news sources don't allow us to use their news directly, so you need view the news via their website.
				(This modal will close after ${secondsToGo} seconds.)`,
			});
		}, 1000);
		setTimeout(() => modal.destroy(), secondsToGo * 1000);
	}

	
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
				setTimeout(() => {this.countDown()},3500);
			
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
