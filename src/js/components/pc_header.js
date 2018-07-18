import React from 'react';
import {Row, Col} from 'antd';
import {
	Menu,
	Icon,
	Tabs,
	message,
	Form,
	Input,
	Button,
	Modal
} from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
import {Link} from 'react-router-dom';
class PCHeader extends React.Component {
	constructor() {
		super();
		this.state = {
			current: 'top',
			modalVisible: false,
			action: 'login',
			hasLogined: false,
			userNickName: '',
			userid: 0
		};
	};

 
	componentWillMount(){
		if (localStorage.userid!='') {
			this.setState({hasLogined:true});
			this.setState({userNickName:localStorage.userNickName,userid:localStorage.userid});
		}
	};

	setModalVisible(value)
	{
		this.setState({modalVisible: value});
	};
	handleClick(e) {
		if (e.key == "register") {
			this.setState({current: 'register'});
			this.setModalVisible(true);
		} else {
			{
				this.setState({current: e.key});
			}
		}
	};
	handleSubmit(e)
	{
		e.preventDefault();
		var myFetchOptions = {
			method: 'GET'
		};
		var formData = this.props.form.getFieldsValue();
		console.log(formData);
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
		+ "&username="+formData.userName+"&password="+formData.password
		+"&r_userName=" + formData.r_userName + "&r_password="
		+ formData.r_password + "&r_confirmPassword="
		+ formData.r_confirmPassword, myFetchOptions)
		.then(response => response.json())
		.then(json => {
			console.log("json is :" + JSON.stringify(json));
			if(JSON.stringify(json) == "null"){
				message.warn("Sorry,username/password is wrong!");
				setTimeout(() => {
					window.location.reload();
				}, 1500);
			}else if(JSON.stringify(json)=="true"){
				message.success("sign-in successful! Please login!");
				setTimeout(() => {
					window.location.reload();
				}, 1500);
			}else{
				this.setState({userNickName: json.NickUserName, userid: json.UserId});
				localStorage.userid= json.UserId;
				localStorage.userNickName = json.NickUserName;
				message.success("login successful!");
			}
		});
		if (this.state.action=="login") {
			this.setState({hasLogined:true});
		}
		this.setModalVisible(false);
	};
	callback(key) {
		if (key == 1) {
			this.setState({action: 'login'});
		} else if (key == 2) {
			this.setState({action: 'register'});
		}
	};
	logout(){
		localStorage.userid= '';
		localStorage.userNickName = '';
		this.setState({hasLogined:false});
		message.success("you have already logout!");
	};
	render() {
		const { getFieldDecorator } = this.props.form;
		const userShow = this.state.hasLogined
			? <Menu.Item key="logout" class="register">
					&nbsp;&nbsp;
					<Link target="_blank" to={`/usercenter`}>
					<Button type="primary" htmlType="button">{this.state.userNickName}</Button>
					</Link>
					&nbsp;&nbsp;
					<Button type="ghost" htmlType="button" onClick={this.logout.bind(this)}>LogOut</Button>
				</Menu.Item>
			: <Menu.Item key="register" class="register">
				<Icon type="appstore"/>Register/Login
			</Menu.Item>;
		return (
			<header>
				<Row>
					<Col span={2}></Col>
					<Col span={4}>
						<a href="/" class="logo">
							<img src="/src/images/logo.png" alt="logo"/>
							<span>DailyNews</span>
						</a>
					</Col>
					<Col span={16}>
						<Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
							<Menu.Item key="top">
								<Icon type="appstore"/>Headline
							</Menu.Item>
							<Menu.Item key="guonei">
								<Icon type="appstore"/>U.S.
							</Menu.Item>
							<Menu.Item key="guoji">
								<Icon type="appstore"/>WORLD
							</Menu.Item>
							<Menu.Item key="yule">
								<Icon type="appstore"/>ENTERTAINMENT
							</Menu.Item>
							<Menu.Item key="keji">
								<Icon type="appstore"/>TECH
							</Menu.Item>
							{userShow}
						</Menu>
						<Modal title="UserCenter" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel= {()=>this.setModalVisible(false)} onOk={() => this.setModalVisible(false)} okText="Close">
							<Tabs type="card" onChange={this.callback.bind(this)}>
								<TabPane tab="Login" key="1">
									<Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
										<FormItem label="Accound">
											{getFieldDecorator('userName',{rules: [{required: true, message: 'Please input your username!',}],})
											(<Input placeholder="*Account" />)}
										</FormItem>
										<FormItem label="Password">
											{getFieldDecorator('password',{rules: [{required: true, message: 'Please input your password!',}],})
											(<Input type="password" placeholder="*Passowrd" />)}
										</FormItem>
										<Button type="primary" htmlType="submit">Login</Button>
									</Form>
								</TabPane>
								<TabPane tab="SignUp" key="2">
									<Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
										<FormItem label="Account">
											{getFieldDecorator('r_userName',{rules: [{required: true, message: 'Please input your username!',}],})
											(<Input placeholder="*Account"/>)}
										</FormItem>
										<FormItem label="Password">
										{getFieldDecorator('r_password',{rules: [{required: true, message: 'Please input your username!',}],})
											(<Input type="password" placeholder="*Passowrd" />)}
										</FormItem>
										<FormItem label="Re-Enter Password">
											{getFieldDecorator('r_confirmPassword',{rules: [{required: true, message: 'Please input your username!',}],})
											(<Input type="password" placeholder="*Re-Passowrd" />)}
										</FormItem>
										<Button type="primary" htmlType="submit">SignUp</Button>
									</Form>
								</TabPane>
							</Tabs>
						</Modal>
					</Col>
					<Col span={2}></Col>
				</Row>
			</header>
		);
	};
}
export default PCHeader = Form.create({})(PCHeader);
