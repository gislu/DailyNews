import React from 'react';
import { Row, Col, Manu, BackTop, Card} from 'antd';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import PCNewsImgBlock from './pc_news_img_block';

import { Modal, Menu, Icon, Tabs, message, Form, Input, Button, ChexkBox } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class CommonComments extends React.Component {
		
	constructor(){
		super();
		this.state={
			comments:''
		};
	};

	componentDidMount() {
		var myFetchOptions = {
				method: 'GET'
			};
			fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
				this.setState({comments: json});
			})
	};

	handleSubmit(e){
		e.preventDefault();
		var myFetchOptions = {
			method: 'GET'
		};
		var formData= this.props.form.getFieldsValue();
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formData.remark, myFetchOptions).then(response => response.json()).then(json => {
			this.componentDidMount();
		})
	};	
	
	render(){
		const { getFieldDecorator } = this.props.form;
		const {comments} = this.state;
		const commnetList = comments.length
			? comments.map((comment, index) => (
				<Card key={index} title={comment.UserName} extra={<a href = "#"> Commented by {comment.datetime} </a>}>
					<p>{comment.Comments}</p>
				</Card>
			))
			:
			'No one has commented yet!';
		return(
			<div class='comment'>
				<Row>					
					<Col span={24} className='container'>
					<hr/>
					{commnetList}
						<Form onSubmit ={this.handleSubmit.bind(this)}>
							<FormItem label="Your Comment:">
								{getFieldDecorator('remark', {initValue:''})(<Input type='textarea' placeholder="Say something..."></Input>)}				
							</FormItem>
							<Button type='primary' htmlType='submit'>Submit</Button>
						</Form>
					</Col>
				</Row>

			</div>

		);
	}

}

export default CommonComments = Form.create({})(CommonComments);