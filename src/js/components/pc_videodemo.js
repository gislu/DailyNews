import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import {Row, Col} from 'antd';

export default class PCVideoDemo extends React.Component{
    constructor() {
		super();
	};
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