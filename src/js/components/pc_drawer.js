import React from 'react';
import { List, Avatar, Form, Input, Button, message} from 'antd';
import InfiniteScroll from 'react-infinite-scroller';


const fakeDataUrl = 'https://randomuser.me/api/?results=7';	
const FormItem = Form.Item;
class PC_Drawer extends React.Component{
  constructor(){
    super();
    this.state={    
      data: [],
      loading: true,
      hasMore: true,
    };
  }

  componentDidMount() {
    this.getData((res) => {
      this.setState({
        data: res.results,
        loading:false
      });
    });
    
  }
  // getData(callback) {
  //   reqwest({
  //     url: fakeDataUrl,
  //     type: 'json',
  //     method: 'get',
  //     contentType: 'application/json',
  //     success: (res) => {
  //       callback(res);
  //     },
  //   });
  // }

  // getData = (callback) => {
  //   reqwest({
  //     url: fakeDataUrl,
  //     type: 'json',
  //     method: 'get',
  //     contentType: 'application/json',
  //     success: (res) => {
  //       callback(res);
  //     },
  //   });
  // }


  getData(callback) {
    var myFetchOptions = {
      method: 'GET'
    };
    fetch(fakeDataUrl,myFetchOptions).then(response => response.json())
    .then(
      json => {
        callback(json);
    } 
    );
  }



  handleInfiniteOnLoad(){
     console.log("now log:"+this.state);
    let data = this.state.data;
    this.setState({
      loading: true,
    });
    if (data.length > 30) {
      message.warning('Loaded all comment!');
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
    this.getData((res) => {
      data = data.concat(res.results);
      this.setState({
        data,
        loading: false,
      });
    });
  }

  commit(){
    var formData = this.props.form.getFieldsValue();
    let newcomment = [{gender:"female", name:{title:"miss",first:formData.mycontext, last:"Your Comment:"},picture:{large:"https://randomuser.me/api/portraits/women/65.jpg",medium:"https://randomuser.me/api/portraits/med/women/65.jpg",thumbnail:"https://image.freepik.com/free-icon/male-user-shadow_318-34042.jpg"}}];
    let rsdata = this.state.data;
    rsdata = newcomment.concat(rsdata);
    console.log(rsdata);
    this.setState({data : rsdata});
    this.props.form.setFieldsValue({
      mycontext: "",
  });
  }
 
  render(){
    const { getFieldDecorator } = this.props.form;
    const {loading} = this.state;
    return (
      <div class="videosidebar">
      <div class="videocomment">
      <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad.bind(this)}
          hasMore={!this.state.loading && this.state.hasMore}
          useWindow={false}>
      <List
        loading={loading}
        itemLayout="horizontal"
        dataSource={this.state.data}
        renderItem={item => (
          <List.Item key={item.id}>
            <List.Item.Meta
              avatar={<Avatar src={item.picture.thumbnail} />}
              title={<label>{item.name.last}</label>}
              description={"Hi, this is " + item.name.first}
            />
          </List.Item>
        )}/>
      </InfiniteScroll>
      </div>
      <div>
      <Form>
      <FormItem label="Your Comments" >
      {getFieldDecorator('mycontext')(<Input.TextArea type="textarea" placeholder="Write Anything...."/>)}
      </FormItem>
      <div style={{textAlign:'center'}}><Button type="primary" htmlType="submit" onClick={this.commit.bind(this)}>Comment</Button></div>
    </Form>
    </div>
    </div>
    );
    
  }

    }
  export default PC_Drawer = Form.create({})(PC_Drawer);
  