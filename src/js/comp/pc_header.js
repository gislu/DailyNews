import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Manu } from 'antd';
import { Modal, Menu, Icon, Tabs, message, Form, Input, Button, ChexkBox } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
import {Router, Route, Link, browserHistory} from 'react-router'
import 'antd/dist/antd.css';

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

    setModalVisible(value){
    	this.setState({modalVisible : value});
    };

    handleClick(e){
 		if(e.key =='register'){
    		this.setState({current:'register'});
    		this.setModalVisible(true);
    	}else{
    		this.setState({current:e.key});
    	}
    };

	handleSubmit(e)
	{
		//页面开始向 API 进行提交数据
		e.preventDefault();
		var myFetchOptions = {
			method: 'GET'
		};
		this.props.form.validateFields((err, values) => {
      	if (!err) {
        	console.log('Received values of form: ', values);
      		}
    	});
		var formData= this.props.form.getFieldsValue();
		//var formData = this.props.form.validateFields();
		console.log(formData);
		fetch("http://newsapi.gugujiankong.com/Handler.ashx?action="+this.state.action+"&username="+formData.userName+"&password="+formData.password+"&r_userName="+formData.r_userName+"&r_password="+formData.r_password+"&r_confirmPassword="+formData.r_comfirmPassword,myFetchOptions).
		then(response=>response.json()).then(json=>{
			this.setState({userNickName:json.NickUserName,userid:json.UserId});

		});
		if(this.state.action=='login'){
			this.setState({hasLogined:true});
		}
		message.success("请求成功！");
		this.setModalVisible(false);
	};

		callback(key){
			if(key==1){
				this.setState({action:'login'});
			}else if(key==2){
				this.setState({action:'register'});
			}
		};

    render() {
        const { getFieldDecorator } = this.props.form;
		const userShow = this.state.hasLogined
			? <Menu.Item key="logout" class="register">
					<Button type="primary" htmlType="button">{this.state.userNickName}</Button>
					&nbsp;&nbsp;
					<Link target="_blank">
						<Button type="dashed" htmlType="button">个人中心</Button>
					</Link>
					&nbsp;&nbsp;
					<Button type="ghost" htmlType="button">退出</Button>
				</Menu.Item>
			: <Menu.Item key="register" class="register">
				<Icon type="appstore"/>注册/登录
			</Menu.Item>;

        return (
            <header>
					<Row>
						<Col span={2}></Col>
						<Col span={4}>
							<a href='/' class='logo'>
								<img src='./src/images/logo.png' alt='logo' />
								<span>React News</span>
							</a>	
						</Col>
						
						<Col span={16}>
							<Menu mode="horizontal" selectedKey={this.state.current} onClick={this.handleClick.bind(this)}>
							<Menu.Item key="top">
								<Icon type="appstore"/>头条
							</Menu.Item>
							<Menu.Item key="shehui">
								<Icon type="appstore"/>社会
							</Menu.Item>
							<Menu.Item key="guonei">
								<Icon type="appstore"/>国内
							</Menu.Item>
							<Menu.Item key="guoji">
								<Icon type="appstore"/>国际
							</Menu.Item>
							<Menu.Item key="yule">
								<Icon type="appstore"/>娱乐
							</Menu.Item>
							<Menu.Item key="tiyu">
								<Icon type="appstore"/>体育
							</Menu.Item>
							<Menu.Item key="keji">
								<Icon type="appstore"/>科技
							</Menu.Item>
							<Menu.Item key="shishang">
								<Icon type="appstore"/>时尚
							</Menu.Item>
							{userShow}														
							</Menu>
								<Modal title='user center' warpClassName='vertical-canter-model' visible={this.state.modalVisible} 
									onCancel={()=>this.setModalVisible(false)} cancelText='cancel'
									onOk={()=>this.setModalVisible(false)} okText='closed'>
								<Tabs type='card' onChange={this.callback.bind(this)}>
									<TabPane tab='login' key='1'>
										<Form horizontal onSubmit={this.handleSubmit.bind(this)}>
											<FormItem label='Account'>
												{getFieldDecorator('userName')(<Input placeholder='Please input your account'/>)}
											</FormItem>											
											<FormItem label='Password'>
												 {getFieldDecorator('password')(<Input type='password' placeholder='Please input your password'/>)}
											</FormItem>
											<Button type='primary' htmlType='submit'>Login</Button>
										</Form>
									</TabPane>
									<TabPane tab='sign_up' key='2'>
										<Form horizontal onSubmit={this.handleSubmit.bind(this)}>
											<FormItem label='Account'>
												{getFieldDecorator('r_userName')(<Input placeholder='Please input your account'/>)}
											</FormItem>											
											<FormItem label='Password'>
												 {getFieldDecorator('r_password')(<Input type='password' placeholder='Please input your password'/>)}
											</FormItem>
											<FormItem label='Re-enter Password'>
												{getFieldDecorator('r_comfirmPassword')(<Input type='password' placeholder='Please input your password again'/>)}
											</FormItem>
											<Button type='primary' htmlType='submit'>Sign Up</Button>
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