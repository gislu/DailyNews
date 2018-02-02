import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Manu } from 'antd';
import { Modal, Menu, Icon, Tabs, message, Form, Input, Button, ChexkBox } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
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

    setModelVisible(value){
    	this.setState({modalVisible : value});
    };

    handleClick(e){
 		if(e.key =='register'){
    		this.setState({current:'register'});
    		this.setModelVisible(true);
    	}else{
    		this.setState({current:e.key});
    	}
    };

    handleSubmit(e){

    }

    render() {
        let { getFieldProps } = this.props.form;
        const userShow = this.state.hasLogined ?
            <Menu.Item key="logout" class='register'>
				<Button type='primary' htmlType=''>{this.state.userNickName}</Button>
				&nbsp;&nbsp;
				<Link target='_blank'>
					<Button type='dashed' htmlType='button'>Personal Profile</Button>
				</Link>
				&nbsp;&nbsp;
				<Button type='ghost' htmlType='button'>Log out</Button>
			</Menu.Item> :
            <Menu.Item key="register" class='register'>
				<Icon type='appstore'></Icon> Sign in/Sign Up
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
									onCancel={()=>this.setModelVisible(false)} cancelText='cancel'
									onOk={()=>this.setModelVisible(false)} okText='closed'>
								<Tabs type='card'>
									<TabPane tab='sign up' key='2'>
										<Form horizontal onSubmit={this.handleSubmit.bind(this)}>
											<FormItem label='Account'>
												<Input placeholder='Please input your account' {...getFieldProps('r_username')}></Input>
											</FormItem>											
											<FormItem label='Password'>
												<Input type='password' placeholder='Please input your password' {...getFieldProps('r_password')}></Input>
											</FormItem>
											<FormItem label='Re-enter Password'>
												<Input type='password' placeholder='Please input your password again' {...getFieldProps('r_comfirmPassword')}></Input>
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