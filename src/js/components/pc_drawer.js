import React from 'react';
import { List, Avatar, Form, Input, Button} from 'antd';
import InfiniteScroll from 'react-infinite-scroller';


const fakeDataUrl = 'https://randomuser.me/api/?results=21';	
const FormItem = Form.Item;
export default class PC_Drawer extends React.Component{
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
    if (data.length > 14) {
      message.warning('Infinite List loaded all');
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
 
  render(){
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
            <div>Content</div>
          </List.Item>
        )}/>
      </InfiniteScroll>
      </div>
      <div >
      <Form>
      <FormItem label="Your Comments" >
        <Input.TextArea type="textarea" placeholder="Write Anything...."/>
      </FormItem>
      <div style={{textAlign:'center'}} ><Button type="primary" htmlType="submit">Comment</Button></div>
    </Form>
    </div>
    </div>
    );
    
  }

    }

  