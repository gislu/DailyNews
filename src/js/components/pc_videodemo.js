import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import {Row, Col, message} from 'antd';
import createHistory from "history/createBrowserHistory"

export default class PCVideoDemo extends React.Component{
    constructor() {
		super();
    };
    
    escFunction(event){
        if(event.keyCode === 27) {
          //Do whatever when esc is pressed
          const history = createHistory();
          history.goBack();
          console.log("pressed!");
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
                    <Col span={2}></Col> 
                    <Col span={20}>            
                    <iframe width="800" height="600" src="https://www.youtube.com/embed/7aKhAisjWCU?autoplay=1"  frameBorder="0" allowFullScreen>
                    </iframe>
                    </Col>  
                    <Col span={2}></Col> 
                </Row>
                <PCFooter></PCFooter>
            </div>
        );
    };
}