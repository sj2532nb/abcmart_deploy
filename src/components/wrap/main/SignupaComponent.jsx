import React from 'react';
import './scss/signupa.scss';
import { Link, Outlet } from 'react-router-dom';

export default function SignupaComponent(){
    return(
        <div id="signupa">
            <div id="wrap">
                <div className="container">
                    <div className="gap">
                        <div className="content">
                            <div className="title">
                                <h1>회원가입을 환영합니다!</h1>
                            </div>
                            <div className="substance">
                                <div className="box1">
                                    <div className="box11"><span></span></div>
                                    <div className="box12"><div className='box121'>온라인회원 가입</div><span className='box122'>신규 가입 즉시 <strong>5,000원</strong> 할인 쿠폰 지급!</span></div>
                                    <div className="box13"><Link to="/SIGNUPB" className="a2"><img src="./img/signup/member_icon_join_btn_arrow.png"/></Link></div>
                                </div>
                                <div className="box2">
                                    <div className='box21'><div className='box211'></div>회원 탈퇴 후 재가입 시, 신규 가입 5,000P와 가입 축하 할인 쿠폰(5,000원)은 지급되지 않습니다. </div>
                                    <div className='box22'><div className='box221'></div>(아트닷컴 오픈 이전 기존 ABC-MART 회원 탈퇴 시에도 해당)</div>
                                    <div className='box23'><div className='box231'></div>신규 가입 5,000P는 이벤트 포인트로 단일 품목 3만원 이상 구매 시 사용 가능</div>
                                    <div className='box24'><div className='box241'></div>쿠폰은 일부 품목 적용 제외될 수 있으며, 사용 전 쿠폰 사용 조건을 확인해주시기 바랍니다.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};