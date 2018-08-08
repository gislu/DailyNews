import React from 'react';
import { List, Avatar, Form, Input, Button} from 'antd';
import InfiniteScroll from 'react-infinite-scroller';


const fakeDataUrl = 'https://randomuser.me/api/?results=7';	
const FormItem = Form.Item;
class PC_Drawer extends React.Component{
  constructor(){
    super();
    this.state={    
      loading: true,
      data: [],
      hasMore: true,
    };
  }

  componentDidMount() {
		var myFetchOptions = {
			method: 'GET'
		};
    fetch(fakeDataUrl,myFetchOptions)
		.then(response => response.json())
		.then(
			json => {
      console.log(json.results);
      this.setState({
        data: json.results,
        loading :false
      });
		}	
		);
  }

  getdata(callback){
    var myFetchOptions = {
			method: 'GET'
		};
    fetch(fakeDataUrl,myFetchOptions)
		.then(response => response.json())
		.then(
			json => {
        callback(json);
		}	
		);
  }

  handleInfiniteOnLoad(){
    let data = this.state.data;
    this.setState({
      loading: true,
    });
    if (data.length > 50) {
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
    
  }
 
  render(){
    const { getFieldDecorator } = this.props.form;
    const { loading, data } = this.state;
    return (
      <div class="videosidebar">
      <div class="videocomment">
      <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!this.state.loading && this.state.hasMore}
          useWindow={false}>
      <List
        loading={loading}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item key={item.id}>
            <List.Item.Meta
              avatar={<Avatar src={item.picture.thumbnail} />}
              title={<a href="https://ant.design">{item.name.last}</a>}
              description={item.email}
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
  