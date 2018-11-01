import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Modal} from 'antd';
import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import {
	Tabs,
	Form,
	Card,
} from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
export default class MobileUserCenter extends React.Component {

	constructor() {
		super();
		this.state = {
			usercollection: '',
			usercomments: '',
			previewImage: '',
			previewVisible: false
		};
	};

	componentDidMount() {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("https://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=" + localStorage.userid, myFetchOptions)
		.then(response=>response.json())
		.then(json=>{
			this.setState({usercollection:json});
		});

		fetch("https://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=" + localStorage.userid, myFetchOptions)
		.then(response=>response.json())
		.then(json=>{
			this.setState({usercomments:json});
		});
	};

	render() {
		const {usercollection,usercomments} = this.state;
		const usercollectionList = usercollection.length ?
		usercollection.map((uc,index)=>(
				<Card key={index} title={uc.uniquekey} extra={<a href={uc.uniquekey}>View</a>}>
					<p>{uc.Title}</p>
				</Card>
		))
		:
		"You don't have any news in collections so far : (";

		const usercommentsList = usercomments.length ?
		usercomments.map((comment,index)=>(
				<Card key={index} title={`you commented ${comment.uniquekey} at ${comment.datetime}`} extra={<a href={comment.uniquekey}>View</a>}>
					<p>{comment.Comments}</p>
				</Card>
		))
		:
		"You don't have any comment so far : (";

		return (
			<div>
				<MobileHeader/>
				<Row>
					<Col span={24}>
						<Tabs>
							<TabPane tab="My Collections" key="1">
								<Row>
									<Col span={24}>
										{usercollectionList}
									</Col>
								</Row>
							</TabPane>
							<TabPane tab="My Comments" key="2">
							<Row>
								<Col span={24}>
									{usercommentsList}
								</Col>
							</Row>
							</TabPane>
							<TabPane tab="Profile Photo" key="3"></TabPane>
						</Tabs>
					</Col>
				</Row>
				<MobileFooter/>
			</div>
		);
	};
}
