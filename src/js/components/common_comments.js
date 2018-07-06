import React from 'react';
import {Row, Col} from 'antd';
import {
	Menu,
	Icon,
	Tabs,
	Form,
	Input,
	Button,
	Card,
	notification
} from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
class CommonComments extends React.Component {
	constructor() {
		super();
		this.state = {
			comments: ''
		};
	};
	componentDidMount() {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey="+this.props.uniquekey , myFetchOptions).then(response => response.json()).then(json => {
			this.setState({comments: json});
		});
	};
	handleSubmit(e) {
		e.preventDefault();
		var myFetchOptions = {
			method: 'GET'
		};
		var formdata = this.props.form.getFieldsValue();
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formdata.remark, myFetchOptions).then(response => response.json()).then(json => {
			this.componentDidMount();
		})
	};
	addUserCollection() {
		var myFetchOptions = {
			method: 'GET'
		};
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
			//收藏成功以后进行一下全局的提醒
			notification['success']({message: 'DailyNews', description: 'Collect Successful'});
		});
	};
	render() {
		const { getFieldDecorator } = this.props.form;
		const {comments} = this.state;
		const commnetList = comments.length
			? comments.map((comment, index) => (
				<Card key={index} title={comment.UserName} extra={< a href = "#" > Commented at {comment.datetime} </a>}>
					<p>{comment.Comments}</p>
				</Card>
			))
			: 'Loading';
		return (
			<div class="comment">
				<Row>
					<Col span={24}>
						{commnetList}
						<Form onSubmit ={this.handleSubmit.bind(this)}>
							<FormItem label="Your Comments">
								{getFieldDecorator('remark')(<Input type="textarea" placeholder="Write Anything...."/>)}
							</FormItem>
							<Button type="primary" htmlType="submit">Comment</Button>
							&nbsp;&nbsp;
							<Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}>I like this news</Button>
						</Form>
					</Col>
				</Row>
			</div>
		);
	};
}
export default CommonComments = Form.create({})(CommonComments);
