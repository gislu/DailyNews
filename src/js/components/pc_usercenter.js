import React from 'react';
import {Row, Col, Modal} from 'antd';
import {Icon} from 'antd';
import {
	Tabs,
	Form,
	Card,
	Upload
} from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
export default class PCUserCenter extends React.Component {
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

		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid=" + localStorage.userid, myFetchOptions)
		.then(response=>response.json())
		.then(json=>{
			this.setState({usercollection:json});
		});

		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid=" + localStorage.userid, myFetchOptions)
		.then(response=>response.json())
		.then(json=>{
			this.setState({usercomments:json});
		});

	};
	render() {
		const props = {
			action: 'http://newsapi.gugujiankong.com/handler.ashx',
			headers: {
				"Access-Control-Allow-Origin": "*"
			},
			listType: 'picture-card',
			defaultFileList: [
				{
					uid: -1,
					name: 'xxx.png',
					state: 'done',
					url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
					thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'
				}
			],
			onPreview: (file) => {
				this.setState({previewImage: file.url, previewVisible: true});
			}
		};

		const {usercollection,usercomments} = this.state;
		const usercollectionList = usercollection.length ?
		usercollection.map((uc,index)=>(
				<Card key={index} title={uc.uniquekey} extra={<a href={`/details/${uc.uniquekey}`}>View</a>}>
					<p>{uc.Title}</p>
				</Card>
		))
		:
		"You don't have any news in collections so far : (";

		const usercommentsList = usercomments.length ?
		usercomments.map((comment,index)=>(
				<Card key={index} title={`you commented ${comment.uniquekey} at ${comment.datetime}`} extra={<a href={`/details/${comment.uniquekey}`}>View</a>}>
					<p>{comment.Comments}</p>
				</Card>
		))
		:
		"You don't have any comment so far : (";

		return (
			<div>
				<PCHeader/>
				<Row>
					<Col span={2}></Col>
					<Col span={20}>
						<Tabs>
							<TabPane tab="My Collections" key="1">
								<div class="comment">
									<Row>
										<Col span={24}>
											{usercollectionList}
										</Col>
									</Row>
								</div>
							</TabPane>
							<TabPane tab="My Comments" key="2">
							<div class="comment">
								<Row>
									<Col span={24}>
										{usercommentsList}
									</Col>
								</Row>
							</div>
							</TabPane>
							<TabPane tab="Profile Photo" key="3">
								<div class="clearfix">
									<Upload {...props}>
										<Icon type="plus"/>
										<div className="ant-upload-text">Upload</div>
									</Upload>
									<Modal visible ={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
										<img alt="Preview" src={this.state.previewImage}/>
									</Modal>
								</div>
							</TabPane>
						</Tabs>
					</Col>
					<Col span={2}></Col>
				</Row>
				<PCFooter/>
			</div>
		);
	};
}
