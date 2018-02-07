import React from 'react';
import ReactDOM from 'react-dom';

import { Row, Col, Manu } from 'antd';
import { Menu, Icon, Tabs, Carousel} from 'antd';
import PCNewsBlock from './pc_news_block';
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
							</div>
							<Tabs class='tab_news'>
							<TabPane tab='news' key='1'>
							<PCNewsBlock count={22} type='top' width ="100%" bordered='false'></PCNewsBlock>
							</TabPane>
						</Tabs>
						</Col>
					</Row>
				</div>
				

			);
		};




	}