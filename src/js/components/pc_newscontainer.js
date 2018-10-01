import React from 'react';
import {Row, Col} from 'antd';
import {Tabs, Carousel} from 'antd';
const TabPane = Tabs.TabPane;
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
import SideBar from './sidebar';
export default class PCNewsContainer extends React.Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			autoplay: true
		};
		return (
			<div>
				<Row>
					<Col span={2}></Col>
					<Col span={20} class="container">
						<div class="leftContainer">
							<div class="carousel">
								<Carousel {...settings}>
									<div><img src="./src/images/carousel_1.jpg"/></div> 
									<div><img src="./src/images/carousel_2.jpg"/></div>
									<div><img src="./src/images/carousel_3.jpg"/></div>
									<div><img src="./src/images/carousel_4.jpg"/></div>
								</Carousel>
							</div>
							<PCNewsImageBlock count={6} type="general" width="400px" cartTitle="HeadLines" imageWidth="112px"/>
						</div>
						<Tabs class="tabs_news">
							<TabPane tab="Headlines" key="1">
								<PCNewsBlock count={22} type="business" width="100%" bordered="false"/>
							</TabPane>
							<TabPane tab="Technology" key="2">
								<PCNewsBlock count={22} type="technology" width="100%" bordered="false"/>
							</TabPane>
							<TabPane tab="Entertainment" key="3">
								<PCNewsBlock count={22} type="entertainment" width="100%" bordered="false"/>
							</TabPane>
						</Tabs>
						<Tabs class="tabs_product">
							<TabPane tab="OutSides Links" key="1">
								<SideBar/>
							</TabPane>
						</Tabs>
						<div>
							<PCNewsImageBlock count={8} type="sports" width="100%" cartTitle="Sports" imageWidth="130px"/>
							<PCNewsImageBlock count={16} type="science" width="100%" cartTitle="Science" imageWidth="130px"/>
						</div>
					</Col>
					<Col span={2}></Col>
				</Row>
			</div>
		);
	};
}
