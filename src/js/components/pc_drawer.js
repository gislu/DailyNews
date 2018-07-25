import React from 'react';
import { Drawer, List, Avatar, Divider, Col, Row } from 'antd';

export default class PC_Drawer extends React.Component{
  constructor(){
    super();
    this.state={visible: false};
  }

  showDrawer(){
    this.setState({
      visible: true,
    });
  };

  onClose(){
    this.setState({
      visible: false,
    });
  };

  render(){
    const pStyle = {
      fontSize: 16,
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
      <div>test1111</div>

    );
    
  }

    }

  