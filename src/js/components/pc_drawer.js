import React from 'react';
import { List, Avatar, Button, Spin } from 'antd';
import reqwest from 'reqwest';

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
export default class PC_Drawer extends React.Component{
  constructor(){
    super();
    this.state={    
      loading: true,
      loadingMore: false,
      showLoadingMore: true,
      data: [],
    };
  }

  componentDidMount() {
    this.getData((res) => {
      this.setState({
        loading: false,
        data: res.results,
      });
    });
  }
  getData(callback){
    return reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: (res) => {
        callback(res);
      },
    });
  }

  onLoadMore(){
    this.setState({
      loadingMore: true,
    });
    this.getData((res) => {
      const data = this.state.data.concat(res.results);
      this.setState({
        data,
        loadingMore: false,
      }, () => {
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event('resize'));
      });
    });
  }

  render(){
    const pStyle = {
      fontSize: 14,
      color: 'rgba(0,0,0,0.85)',
      lineHeight: '24px',
      display: 'block',
      marginBottom: 16,
    };

    const DescriptionItem = ({ title, content }) => {
      return (
        <div>
          <p>
            {title}:
          </p>
          {content}
        </div>
      );
    };

    return(
      <div class="videocomment">
        <List
          dataSource={[
            {
              name: 'Alex',
            },
            {
              name: 'Bob',
            },            {
              name: 'Daniel',
            },
            {
              name: 'Eason',
            },            {
              name: 'Jay',
            },
            {
              name: 'Gergo',
            },
          ]}
          bordered
          renderItem={item => (
            <List.Item key={item.id} actions={[<a onClick={this.showDrawer}>View Profile</a>]}>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                }
                title={<a href="https://ant.design/index-cn">{item.name}</a>}
                description="Progresser AFX"
              />
            </List.Item>
          )}
        />
      </div>

    );
    
  }

    }

  