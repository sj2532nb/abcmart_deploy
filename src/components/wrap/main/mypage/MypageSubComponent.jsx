import React from 'react';
import { Link } from 'react-router-dom';

export default function MypageSubComponent(props) {
    return (
        <>
        <div className='sub-title'>
            <h2>최근 주문내역</h2>            
        </div>
        <div className="mypage-content">
            <div className="section1">
                <div className="row1">
                    <ul>
                        <li>
                            <a href="!#">0</a>
                            <span>입금대기</span>
                        </li>
                        <li>
                            <a href="!#">0</a>
                            <span>결제완료</span>
                        </li>
                        <li>
                            <a href="!#">0</a>
                            <span>상품준비중</span>
                        </li>
                        <li>
                            <a href="!#">0</a>
                            <span>배송중/픽업준비완료</span>
                        </li>
                        <li>
                            <a href="!#">0</a>
                            <span>배송/수령완료</span>
                        </li>
                    </ul>
                </div>
                <div className="row2">
                    <ul>
                        <li>
                            <h4><span><img src="./img/mypage/mypage_icon_order_list_claim.png" alt="" /></span> 주문 취소</h4>
                            <span><a href="!#">0</a>건</span>                            
                        </li>
                        <li>
                            <h4><span><img src="./img/mypage/mypage_icon_order_list_claim.png" alt="" /></span>교환 신청</h4>
                            <span><a href="!#">0</a>건</span>                            
                        </li>
                        <li>
                            <h4><span><img src="./img/mypage/mypage_icon_order_list_claim.png" alt="" /></span>반품 신청</h4>
                            <span><a href="!#">0</a>건</span>                            
                        </li>
                    </ul>
                </div>
            </div>
            <div className="section2">
                <div className="section2-title">
                    <ul>
                        <li>
                            <button className='on'>최근본상품(0)</button>
                            <button>찜한 상품(0)</button>
                        </li>
                        <li>
                            <Link to="/CART">더보기<img src="./img/mypage/btn_txt_arr.png" alt="" /></Link>
                        </li>
                    </ul>
                </div>
                <div className="section2-content">
                    <div className="no-data">
                        <p>최근 본 상품이 없습니다.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

