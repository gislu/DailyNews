import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import {Row, Col, message} from 'antd';
import createHistory from "history/createBrowserHistory";
import PC_Drawer from "./pc_drawer";

export default class PCVideoDemo extends React.Component{
    constructor() {
		super();
    };
    
    escFunction(event){
        if(event.keyCode === 27) {
          //Do whatever when esc is pressed
          const history = createHistory();
          history.goBack();
        }
      }

    componentDidMount(){
        message.info("Press 'ESC' to back.");
        document.addEventListener("keydown", this.escFunction, false);
      }
    
      componentWillUnmount(){
        document.removeEventListener("keydown", this.escFunction, false);
      }

    render(){
        return(
            <div>
                <PCHeader></PCHeader>
                <Row>
                    <Col span={1}></Col>      
                    <Col span={15}>            
                    <iframe height="600" width="100%" src="https://www.youtube.com/embed/7aKhAisjWCU?autoplay=1"  frameBorder="0" allowFullScreen>
                    </iframe>
                    </Col> 
                    <Col span={6}><PC_Drawer/></Col>   
                    <Col span={2}></Col>  
                </Row>
                <PCFooter></PCFooter>
            </div>
        );
    };
}