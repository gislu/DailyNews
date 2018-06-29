import React from 'react';
import {Row, Col} from 'antd';
import {Tabs, Carousel} from 'antd';
const TabPane = Tabs.TabPane;
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
import PCProduct from './pc_products';
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
							<PCNewsImageBlock count={6} type="general" width="400px" cartTitle="Sports" imageWidth="112px"/>
						</div>
						<Tabs class="tabs_news">
							<TabPane tab="Headlines" key="1">
								<PCNewsBlock count={22} type="business" width="100%" bordered="false"/>
							</TabPane>
							<TabPane tab="Sports" key="2">
								<PCNewsBlock count={22} type="sports" width="100%" bordered="false"/>
							</TabPane>
						</Tabs>
						<Tabs class="tabs_product">
							<TabPane tab="OutSides Links" key="1">
								<PCProduct/>
							</TabPane>
						</Tabs>
						<div>
							<PCNewsImageBlock count={8} type="sports" width="100%" cartTitle="General" imageWidth="132px"/>
							<PCNewsImageBlock count={16} type="health" width="100%" cartTitle="Health" imageWidth="132px"/>
						</div>
					</Col>
					<Col span={2}></Col>
				</Row>
			</div>
		);
	};
}
