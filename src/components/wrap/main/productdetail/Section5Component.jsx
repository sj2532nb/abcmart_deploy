import React from 'react';
import '../scss/productdetail.scss';

export default function Section5Component(){
    return (
        <section id='section5'>
            <div className="container">
                <div className="gap">
                    <div className="review-box">
                        <div className="button-box">                            
                            <a href="!#" className='on'>전체 <span>2</span></a>
                            <a href="!#">포토/영상 <span>0</span></a>
                            <a href="!#">일반 <span>2</span></a>
                        </div>
                        <div className="review-title">
                            <h6>총 <span>2</span>개의 리뷰가 있습니다.</h6>
                            <select name="" id="">
                                <option value="최근등록순">최근등록순</option>
                                <option value="평점높은순">평점높은순</option>
                                <option value="평점낮은순">평점낮은순</option>
                            </select>
                        </div>
                        <div className='customer-review'>
                            <div className="star-score">
                                <div className="star">
                                    <img src="./img/detail/blackstar.png" alt="" />
                                    <img src="./img/detail/blackstar.png" alt="" />
                                    <img src="./img/detail/blackstar.png" alt="" />
                                    <img src="./img/detail/blackstar.png" alt="" />
                                    <img src="./img/detail/blackstar.png" alt="" />
                                </div>
                                <div className="star-txt">
                                    <span>100, 290</span>
                                    <i>|</i>
                                    <p>사이즈<span>정 사이즈</span></p>
                                    <i>|</i>
                                    <p>색상<span>화면과 같음</span></p>
                                    <i>|</i>
                                    <p>발볼<span>적당함</span></p>
                                    <i>|</i>
                                    <p>발등<span>적당함</span></p>                             
                                </div>
                            </div>
                            <div className="mysize">
                                <span><i>·</i>나의 사이즈</span>
                                <p>키<span>160-165</span></p>
                                <p>몸무게<span>50-55</span></p>
                                <p>평소사이즈<span>M</span></p>
                                <p>상의<span>95</span></p>
                                <p>하의<span>27</span></p>
                                <p>발사이즈<span>250</span></p>
                            </div>
                            <div className="comment">
                                <p>
                                    에어포스 보다 가벼워서 좋아요. 재활용 소재가 사용된점도 마음에 듭니다.<br/>
                                    잘 신을게요
                                </p> 
                            </div>
                            <div className="nickname">
                                <p>h***3</p><i>|</i><p>2023.06.04 05:08:06</p>
                            </div>
                            <div className="helpful">
                                <a href="!#" className='good-help'><i></i>도움돼요 <span>13</span></a>
                                <a href="!#" className='singo'>신고</a>
                            </div>
                        </div>
                        <div className="review-btn-box">
                            <div className="pagenation">
                                <a href="!#" className='on'>1</a>
                                <a href="!#">2</a>
                                <a href="!#">3</a>
                            </div>
                            <button>상품 후기 작성</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

