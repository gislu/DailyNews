import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import {Row, Col} from 'antd';

export default class PCVideoDemo extends React.Component{
    constructor() {
		super();
    };
    
    escFunction(event){
        if(event.keyCode === 27) {
          //Do whatever when esc is pressed
          console.log("pressed!");
        }
      }

    componentDidMount(){
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