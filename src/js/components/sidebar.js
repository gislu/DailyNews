import React from 'react';

export default class SideBar extends React.Component{
    constructor() {
		super();
		this.state = {
            play : 0
		};
	};
    render(){
        return(
             <div className="area-sub" style={{overflow: 'visible'}}>
             {/* product.html start */}
             <iframe width="345" height="300" src="https://www.youtube.com/embed/7aKhAisjWCU?&autoplay=1"  frameBorder="0" allowFullScreen>
            </iframe>
             <div id="layout-product" className="m-box ui-style-gradient mb12">
                    <a className="productlinks-i-mail" href="https://www.google.com/gmail/">Gmail</a>
                       <a href="http://email.163.com/#from=ntes_product">免费邮</a>
                         <a href="http://mail.163.com/#from=ntes_product" className="productlinks-fold-163">163Mail</a>
                         <a href="http://mail.126.com/#from=ntes_product" className="productlinks-fold-126">126Mail</a>
                         <a href="http://www.yeah.net/#from=ntes_product" className="productlinks-fold-yeah">yeah邮箱</a>
                       </div>
                     <a href="http://vipmail.163.com/#from=www">VIP邮箱</a> <a href="http://qiye.163.com/">企业邮箱</a> <a href="http://mail.163.com/client/dl.html?from=mail46">邮箱大师</a> <a href="http://yixin.im" className="last">易信</a>
                     <a href="http://nie.163.com/" className="productlinks-i-game">游戏</a>
                     <a href="http://xyq.163.com/">梦幻西游</a> <a href="http://my.163.com/">梦幻西游手游</a> <a href="http://xy2.163.com/">新大话2</a> <a href="http://x3.163.com/">新大话3</a> <a href="http://dhxy.163.com/">大话西游手游</a> <a href="http://qnm.163.com/" className="pr0">倩女幽魂手游</a> <a href="http://xqn.163.com/fab/" className="pr0">新倩女幽魂</a> <a href="http://www.warcraftchina.com/" className="pr0">魔兽世界</a> <a href="http://wh2.163.com/" className="pr0">武魂2</a> <a href="http://ow.blizzard.cn/" className="pr0">守望先锋</a> <a href="http://tx3.163.com/" className="pr0">天下3</a> <a href="http://dt2.163.com/" className="pr0">大唐无双零</a> <a href="http://tianyu.163.com/">天谕</a> <a href="http://bw.163.com/">西楚霸王</a><a href="http://zmq.163.com/">镇魔曲</a> <a href="http://9.163.com/">炉石传说</a> <a href="http://stzb.163.com/" className="last">率土之滨</a>
                     <strong className><a href="http://sitemap.163.com/" className="productlinks-i-sns">社区</a></strong>
                     <a href="http://rd.da.netease.com/redirect?t=VGa7BN&p=ve4u5l&proId=1024&target=http%3A%2F%2Fwww.kaola.com%2F%3Ftag%3Dbe3d8d027a530881037ef01d304eb505" className="pr0">考拉海购</a> <a href="http://www.lofter.com/?act=qb163rk_20141031_12" style={{fontFamily: 'Arial', paddingRight: 0}}>LOFTER</a> <a href="http://blog.163.com/?fromService" className="pr0">博客</a> <a href="http://cc.163.com/" className="pr0">CC语音</a> <a href="http://www.bobo.com/" className="pr0">BoBo直播</a> <a href="http://y.163.com/download/index?from=wscp" className="pr0">美聊</a> <a href="http://tie.163.com/" className="pr0">跟贴</a> <a href="http://rd.da.netease.com/redirect?t=f9vnCt&p=fvxKel&proId=1140&target=http%3A%2F%2Fwww.xiupin.com%2F" className="pr0">秀品</a> <a href="http://photo.163.com/" className="pr0">相册</a> <a href="http://love.163.com/?from=wscp" className="pr0">花田</a> <a href="http://yuehui.163.com/?from=wscp" className="pr0">约会</a> <a href="http://manhua.163.com/" className="pr0">漫画</a> <a href="http://x.163.com?source=163webproduct" className="last">青果</a>
                   </div>

        );
    };
}