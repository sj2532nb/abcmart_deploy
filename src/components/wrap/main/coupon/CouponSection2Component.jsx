import React from 'react';
import './scss/couponSection2.scss';
import { Link } from 'react-router-dom';

export default function CouponSection2Component(props) {
    const [event, setEvent]=React.useState(true)

    const onClickEvent=(e)=>{
        e.preventDefault()
        setEvent(on=>!on)
    }
    return (
        <section id='couponSection2'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>이벤트</h2>
                        <div className="btn-box">
                            <button>나의 이벤트 응모현황</button>
                            <button>당첨자 발표</button>
                        </div>
                    </div>
                    <div className="content">
                        <div className="row1">
                            <a onClick={onClickEvent} className={event?'on':''} href="!#">진행중인 이벤트</a>
                            <a onClick={onClickEvent} className={!event?'on':''} href="!#">지난 이벤트</a>
                        </div>
                        {event?
                        <div className="row2">
                            <ul>
                                <li>
                                    <div className="img-box">
                                        <img src="./img/coupon/1688105033992.jpg" alt="" />
                                    </div>
                                    <div className="txt-box">
                                        <h3>온/오프라인 리뷰 이벤트</h3>
                                        <p>2023.07.01 ~ 2023.07.31</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src="./img/coupon/1687745764784.jpg" alt="" />
                                    </div>
                                    <div className="txt-box">
                                        <h3>7월 출석체크</h3>
                                        <p>2023.07.01 ~ 2023.07.31</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src="./img/coupon/1688029343954.jpg" alt="" />
                                    </div>
                                    <div className="txt-box">
                                        <h3>★100% 당첨★ 도움돼요 챌린지</h3>
                                        <p>2023.07.01 ~ 2023.07.31</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src="./img/coupon/1687745055434.jpg" alt="" />
                                    </div>
                                    <div className="txt-box">
                                        <h3>7월 네이버페이 프로모션</h3>
                                        <p>2023.07.01 ~ 2023.07.31</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src="./img/coupon/1676436924592.jpg" alt="" />
                                    </div>
                                    <div className="txt-box">
                                        <h3>카카오플러스 친구추가 이벤트</h3>
                                        <p>2023.07.01 ~ 2023.07.31</p>
                                    </div>
                                </li>
                                <li>
                                    <Link to="/EVENTSUB">
                                        <div className="img-box">
                                            <img src="./img/coupon/1676856564259.jpg" alt="" />
                                        </div>
                                        <div className="txt-box">
                                            <h3>APP 설치하고 1만원 할인 받으세요.</h3>
                                            <p>2023.07.01 ~ 2023.07.31</p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        :
                        <div className="row2">
                            <ul>
                                <li>
                                    <div className="img-box">
                                        <img src="./img/coupon/c-1.jpg" alt="" />
                                    </div>
                                    <div className="txt-box">
                                        <h3>[LIVE] 신상 써코니 역대급 구매 찬스</h3>
                                        <p>2023.06.23 ~ 2023.06.29</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src="./img/coupon/c-2.jpg" alt="" />
                                    </div>
                                    <div className="txt-box">
                                        <h3>NEW BALANCE MR530GN 드로우 이벤트 </h3>
                                        <p>2023.06.23 ~ 2023.06.29</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src="./img/coupon/c-3.jpg" alt="" />
                                    </div>
                                    <div className="txt-box">
                                        <h3>ASICS GEL-KAYANO 14 드로우 이벤트 (1202A056) </h3>
                                        <p>2023.06.23 ~ 2023.06.29</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src="./img/coupon/c-4.jpg" alt="" />
                                    </div>
                                    <div className="txt-box">
                                        <h3>ASICS GEL-KAYANO 14 드로우 이벤트 (1201A019)</h3>
                                        <p>2023.06.23 ~ 2023.06.29</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src="./img/coupon/c-5.jpg" alt="" />
                                    </div>
                                    <div className="txt-box">
                                        <h3>[LIVE] 여름을 부탁해! 아동화 최대 할인 ~55%</h3>
                                        <p>2023.06.23 ~ 2023.06.29</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src="./img/coupon/c-6.jpg" alt="" />
                                    </div>
                                    <div className="txt-box">
                                        <h3>[드로우 이벤트] ASICS GEL-1130 1201A933</h3>
                                        <p>2023.06.23 ~ 2023.06.29</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        }
                        <div className="row3">
                            <div className="left">
                                <h2>특별한 분께 마음을 전하세요. <br /><strong>기프트카드</strong></h2>
                                <p>오프라인 매장과 온라인 몰에서 <br />현금과 동일하게 사용할 수 있습니다.</p>
                                <button>구매/선물하기</button>
                                <button>등록하기</button>
                                <button>잔액조회</button>
                            </div>
                            <div className="right">
                                <dl>
                                    <dt><h3>당첨자발표</h3> <span>MORE <i><img src="./img/coupon/marketing_btn_notice_more.png" alt="" /></i></span></dt>
                                    <dd>
                                        <ul>
                                            <li>가정의 달 스페셜 경품 이벤트 당첨자 안내</li>
                                            <li>2023.06.22</li>
                                        </ul>
                                        <ul>
                                            <li>5월 REVIEW EVENT 당첨자 안내</li>
                                            <li>2023.06.07</li>
                                        </ul>
                                        <ul>
                                            <li>오프라인 리뷰 이벤트 당첨자 안내</li>
                                            <li>2023.06.07</li>
                                        </ul>
                                        <ul>
                                            <li>[아트라이브] 6월 1일 (목) 아디다스 이벤트  당첨자 안내</li>
                                            <li>2023.06.07</li>
                                        </ul>
                                        <ul>
                                            <li>[아트라이브] 5월 25일 (목) 테바 이벤트  당첨자 안내</li>
                                            <li>2023.06.07</li>
                                        </ul>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

