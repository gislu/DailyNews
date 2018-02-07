import React from 'react';
import ReactDOM from 'react-dom';

import { Row, Col, Manu } from 'antd';
import { Menu, Icon, Tabs, Carousel} from 'antd';
import PCNewsBlock from './pc_news_block';
import PCNewsImgBlock from './pc_news_img_block';
const TabPane = Tabs.TabPane;


export default class PCNewsContainer extends React.Component {
		render(){

			const settings={
				dots:true,
				infinite:true,
				speed:500,
				slidesToShow:1,
				autoplay:true
			};

			return(
				<div>
					<Row>
						<Col span={2}></Col>
						<Col span={20} class='container'>
							<div class='leftContainer'>
								<div class='carousel'>
									<Carousel {...settings}>
										<div><img src="./src/images/carousel_1.jpg" alt=""/></div>
										<div><img src="./src/images/carousel_2.jpg" alt=""/></div>
										<div><img src="./src/images/carousel_3.jpg" alt=""/></div>
										<div><img src="./src/images/carousel_4.jpg" alt=""/></div>
									</Carousel>
								</div>
								<PCNewsImgBlock count={6} type='yule' width='400px' cartTitle='music' imageWidth='112px'></PCNewsImgBlock>
							</div>
							<Tabs class="tab_news">
								<TabPane tab="Hottest" key="1">
									<PCNewsBlock count={22} type="top" width="100%" bordered="false"/>
								</TabPane>
								<TabPane tab="International" key="2">
									<PCNewsBlock count={22} type="guoji" width="100%" bordered="false"/>
								</TabPane>
							</Tabs>
							<div>
								<PCNewsImgBlock count={8} type="guonei" width="100%" cartTitle="National" imageWidth="132px"/>
								<PCNewsImgBlock count={16} type="yule" width="100%" cartTitle="Entertainment" imageWidth="132px"/>
							</div>
						</Col>
					</Row>
				</div>
				

			);
		};




	}