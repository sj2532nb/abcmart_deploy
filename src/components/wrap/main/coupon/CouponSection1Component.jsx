import React from 'react';
import './scss/couponSection1.scss';

export default function CouponSection1Component(props) {
    const [fade, setFade]=React.useState(1)
    const onClickNext=(e)=>{
        e.preventDefault();
        setFade(slide=>(slide + 1)>3 ? 1 : (slide + 1))
    }
    const onClickPrev=(e)=>{
        e.preventDefault();
        setFade(slide=>((slide - 1)<1 ? 3 : (slide - 1)))
    }

    const onClickPage=(e, value)=>{
        e.preventDefault();
        setFade(value)
    }
    return (
        <section id='couponSection1'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <div className="row1">
                            <ul>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">HOME</a></li>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">이벤트·쿠폰</a></li>
                            </ul>
                        </div>
                        <div className="row2">
                            <h1>이벤트·쿠폰</h1>
                        </div>
                    </div>
                    <div className="content">
                        <div className="left slide-container">
                            <div className="slide-view">
                                <ul className="slide-wrap">
                                    <li className={`slide slide1 ${fade ===1 ?'on':''}`}>
                                        <img src="./img/coupon/1688030889546.jpg" alt="" />
                                    </li>
                                    <li className={`slide slide2 ${fade ===2 ?'on':''}`}>
                                        <img src="./img/coupon/1688031139681.jpg" alt="" />
                                    </li>
                                    <li className={`slide slide3 ${fade ===3 ?'on':''}`}>
                                        <img src="./img/coupon/1688110750653.jpg" alt="" />
                                    </li>
                                </ul>                                
                            </div>
                            <a onClick={onClickPrev} href="!#" className='left-arrow-btn'><img src="./img/coupon/plugin_slider_prod_swiper.jpg" alt="" /></a>
                            <a onClick={onClickNext} href="!#" className='right-arrow-btn'><img src="./img/coupon/plugin_slider_prod_swiper.jpg" alt="" /></a>
                            <span className='page-nation'>
                                <a onClick={(e)=>onClickPage(e,1)} className={`blind ${fade ===1 ?'on':''}`} href="!#">1</a>
                                <a onClick={(e)=>onClickPage(e,2)} className={`blind ${fade ===2 ?'on':''}`} href="!#">2</a>
                                <a  onClick={(e)=>onClickPage(e,3)} className={`blind ${fade ===3 ?'on':''}`} href="!#">3</a>
                            </span>
                        </div>
                        <div className="right">
                            <dl>
                                <dt><span><img src="./img/coupon/marketing_icon_benefit_title.png" alt="" /></span>멤버십회원의 특별한 혜택!</dt>
                                <dd><span><img src="./img/coupon/marketing_icon_benefit_list.png" alt="" /></span>회원가입 시 <strong>5,000원</strong> 할인쿠폰 지급</dd>
                                <dd><span><img src="./img/coupon/marketing_icon_benefit_list.png" alt="" /></span>회원가입 시 <strong>5,000</strong> 포인트 적립</dd>
                                <dd><span><img src="./img/coupon/marketing_icon_benefit_list.png" alt="" /></span>구매 시 결제금액의 <strong>1%</strong> 포인트 적립</dd>
                                <dd><span><img src="./img/coupon/marketing_icon_benefit_list.png" alt="" /></span>생일 해당월 <strong>1만원</strong> 할인쿠폰 지급</dd>
                                <dd><span><img src="./img/coupon/marketing_icon_benefit_list.png" alt="" /></span>후기 작성 시 최대 <strong>1,500</strong> 포인트 적립</dd>
                            </dl>
                            <button>멤버십 회원 가입</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

