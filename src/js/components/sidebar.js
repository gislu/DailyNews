import React from 'react';
import {Link} from 'react-router-dom';

export default class SideBar extends React.Component{
    constructor() {
		super();
		this.state = {
            play : 0
		};
    };
    handleclick(e){
        //e.preventDefault();
        console.log('click video');
    }
    render(){
        return(
             <div className="area-sub" style={{overflow: 'visible'}}>
             <Link to={`/videodemo`}>
             <div className="iframeWrapper" onClick={this.handleclick.bind(this)}>
                <iframe width="345" height="300" src="https://www.youtube.com/embed/7aKhAisjWCU"  frameBorder="0"  allowFullScreen>
                </iframe>
            </div>
            </Link>
            <div className="bottomlink">
            <div className="bldark">
             <div className="bl">
                        <a href="https://www.google.com/gmail/">Gmail</a>&nbsp;&nbsp;
                        <a href="https://login.microsoftonline.com/">OutLook</a>&nbsp;&nbsp;
                        <a href="https://login.yahoo.com/" className="productlinks-fold-163">Yahoo</a>&nbsp;&nbsp;
                        <a href="https://www.aol.com/" className="productlinks-fold-126">AOL</a>
              </div>
              <div className="bl">
                        <a href="https://www.facebook.com/">FaceBook</a>&nbsp;&nbsp;
                        <a href="https://www.youtube.com/">Youtube</a>&nbsp;&nbsp;
                        <a href="https://www.linkedin.com" className="productlinks-fold-163">LinkedIn</a>&nbsp;&nbsp;
                        <a href="https://www.amazon.com/" className="productlinks-fold-126">Amazon</a>
              </div>

              <div className="bl">
                        <a href="https://www.facebook.com/">FaceBook</a>&nbsp;&nbsp;
                        <a href="https://www.youtube.com/">Youtube</a>&nbsp;&nbsp;
                        <a href="https://www.linkedin.com" className="productlinks-fold-163">LinkedIn</a>&nbsp;&nbsp;
                        <a href="https://www.amazon.com/" className="productlinks-fold-126">Amazon</a>
              </div>

              <div className="bl">
                        <a href="https://www.facebook.com/">FaceBook</a>&nbsp;&nbsp;
                        <a href="https://www.youtube.com/">Youtube</a>&nbsp;&nbsp;
                        <a href="https://www.linkedin.com" className="productlinks-fold-163">LinkedIn</a>&nbsp;&nbsp;
                        <a href="https://www.amazon.com/" className="productlinks-fold-126">Amazon</a>
              </div>
              </div>

             <div className="blgray">
             <div className="bl">
                        <a href="https://www.google.com/gmail/">Gmail</a>&nbsp;&nbsp;
                        <a href="https://login.microsoftonline.com/">OutLook</a>&nbsp;&nbsp;
                        <a href="https://login.yahoo.com/" className="productlinks-fold-163">Yahoo</a>&nbsp;&nbsp;
                        <a href="https://www.aol.com/" className="productlinks-fold-126">AOL</a>
              </div>
              <div className="bl">
                        <a href="https://www.facebook.com/">FaceBook</a>&nbsp;&nbsp;
                        <a href="https://www.youtube.com/">Youtube</a>&nbsp;&nbsp;
                        <a href="https://www.linkedin.com" className="productlinks-fold-163">LinkedIn</a>&nbsp;&nbsp;
                        <a href="https://www.amazon.com/" className="productlinks-fold-126">Amazon</a>
              </div>

              <div className="bl">
                        <a href="https://www.facebook.com/">FaceBook</a>&nbsp;&nbsp;
                        <a href="https://www.youtube.com/">Youtube</a>&nbsp;&nbsp;
                        <a href="https://www.linkedin.com" className="productlinks-fold-163">LinkedIn</a>&nbsp;&nbsp;
                        <a href="https://www.amazon.com/" className="productlinks-fold-126">Amazon</a>
              </div>

              <div className="bl">
                        <a href="https://www.facebook.com/">FaceBook</a>&nbsp;&nbsp;
                        <a href="https://www.youtube.com/">Youtube</a>&nbsp;&nbsp;
                        <a href="https://www.linkedin.com" className="productlinks-fold-163">LinkedIn</a>&nbsp;&nbsp;
                        <a href="https://www.amazon.com/" className="productlinks-fold-126">Amazon</a>
              </div>
              </div>
            <div className="bldark">
             <div className="bl">
                        <a href="https://www.google.com/gmail/">Gmail</a>&nbsp;&nbsp;
                        <a href="https://login.microsoftonline.com/">OutLook</a>&nbsp;&nbsp;
                        <a href="https://login.yahoo.com/" className="productlinks-fold-163">Yahoo</a>&nbsp;&nbsp;
                        <a href="https://www.aol.com/" className="productlinks-fold-126">AOL</a>
              </div>
              <div className="bl">
                        <a href="https://www.facebook.com/">FaceBook</a>&nbsp;&nbsp;
                        <a href="https://www.youtube.com/">Youtube</a>&nbsp;&nbsp;
                        <a href="https://www.linkedin.com" className="productlinks-fold-163">LinkedIn</a>&nbsp;&nbsp;
                        <a href="https://www.amazon.com/" className="productlinks-fold-126">Amazon</a>
              </div>

              <div className="bl">
                        <a href="https://www.facebook.com/">FaceBook</a>&nbsp;&nbsp;
                        <a href="https://www.youtube.com/">Youtube</a>&nbsp;&nbsp;
                        <a href="https://www.linkedin.com" className="productlinks-fold-163">LinkedIn</a>&nbsp;&nbsp;
                        <a href="https://www.amazon.com/" className="productlinks-fold-126">Amazon</a>
              </div>

              <div className="bl">
                        <a href="https://www.facebook.com/">FaceBook</a>&nbsp;&nbsp;
                        <a href="https://www.youtube.com/">Youtube</a>&nbsp;&nbsp;
                        <a href="https://www.linkedin.com" className="productlinks-fold-163">LinkedIn</a>&nbsp;&nbsp;
                        <a href="https://www.amazon.com/" className="productlinks-fold-126">Amazon</a>
              </div>
              </div>
            </div>
            
             </div>

        );
    };
}













