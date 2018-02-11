import React from 'react';
import ReactDOM from 'react-dom';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCNewsBlock from './pc_news_block';
import PCNewsContainer from './pc_newscontainer';



export default class PCIndex extends React.Component{
		render(){
			return(
				<div>
				<PCHeader/>
				<PCNewsContainer></PCNewsContainer>
				<div>
				<PCNewsBlock></PCNewsBlock>
				</div>
				<PCFooter></PCFooter>
				</div>
				);
		};
	}