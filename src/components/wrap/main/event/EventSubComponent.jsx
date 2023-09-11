import React from 'react';
import './scss/eventSub.scss';
import { Link } from 'react-router-dom';

export default function EventSubComponent(props) {
    React.useEffect(()=>{
        window.scrollTo(0, 200);
    },[])
    return (
        <main id='eventSub'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <div className="row1">
                            <ul>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">HOME</a></li>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">이벤트·쿠폰</a></li>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">APP 설치하고 1만원 할인 받으세요.</a></li>
                            </ul>
                        </div>
                        <div className="row2">
                            <h1>이벤트</h1>
                        </div>
                    </div>
                    <div className="content">
                        <div className="content-title">
                            <div className="left">
                                <h2>[ABC-MART] APP 설치하고 1만원 할인 받으세요.</h2>
                                <p><span><img src="./img/event/prod_sale_period_bg.png" alt="" /></span>2023.01.01 ~ 2023.12.31 </p>
                            </div>
                            <div className="right">
                                <img src="./img/event/btn_icon_share.png" alt="" />
                                <div className="inner-box">
                                    <ul>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#">URL</a></li>
                                    </ul>
                                </div>
                            </div>                            
                        </div>
                        <div className="content-main">
                            <div className="banner1">
                                <img src="./img/event/b1.jpg" alt="" />
                            </div>
                            <div className="banner2">
                                <a href="!#">
                                    <img src="./img/event/b2.jpg" alt="" />
                                </a>
                            </div>
                            <div className="banner3">
                                <a href="!#">
                                    <img src="./img/event/b3.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="content-bottom">
                            <dl>
                                <dt>이벤트 안내 사항</dt>
                                <dd>- 쿠폰은 ABC-MART APP에서 멤버십 회원 ID로 첫 로그인 시 1회만 발급됩니다.</dd>
                                <dd>- 지급된 할인쿠폰은 마이페이지&gt;쇼핑혜택&gt;쿠폰리스트에서 확인 가능합니다.</dd>
                                <dd>- APP 삭제 후 새로 설치하셔도 기존에 쿠폰을 발급받으신 경우에는 재발급이 되지 않습니다.</dd>
                                <dd>- 쿠폰은 5만원 이상 상품에 적용 가능하며, 일부 상품은 쿠폰 적용이 불가능할 수 있습니다.</dd>
                                <dd>- 쿠폰은 APP에서만 사용 가능하며, 발급일로부터 30일 동안 사용 가능합니다.</dd>
                            </dl>
                        </div>
                        <div className="btn-box">
                            <Link to='/COUPON'>진행중인 이벤트</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

