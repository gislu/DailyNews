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


 class MobileHeader extends React.Component{

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
      if(localStorage.userid !=''){
        this.setState({hasLogined:true});
        // this.setState({userNickName:localStorage.userNickName, userid:localStorage.userid});        
      }
    }

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
      localStorage.userid = json.UserId;
      localStorage.userNickName = json.NickUserName;
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

  
  login(){
      this.setModalVisible(true);
  };

		render(){
      const { getFieldDecorator } = this.props.form;
      const userShow = this.state.hasLogined ? 
      <Link>
        <Icon type='inbox'></Icon>
      </Link>:
        <Icon type='setting' onClick={this.login.bind(this)}></Icon>

			return(
      <div id="mobileheader">
        <header>
          <img src="./src/images/logo.png" alt="logo"/>
          <span>ReactNews</span>
          {userShow}
        </header>
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
      </div>
				);
		};
	}

export default MobileHeader = Form.create({})(MobileHeader);