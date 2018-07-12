import React from 'react';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';

export default class PC_VideoDemo extends React.Component{
    constructor() {
		super();
	};
    render(){
        return(
            <div>
                <PCHeader></PCHeader>
                <iframe width="345" height="300" src="https://www.youtube.com/embed/7aKhAisjWCU"  frameBorder="0" allowFullScreen/>>
                <PCFooter></PCFooter>
            </div>
        );

    };
}