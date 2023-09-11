import React from 'react';
import '../scss/productdetail.scss';

export default function Section4Component(){


    const onClickInfo=(e)=>{
        e.preventDefault();
        // console.log(window.scrollY); y축 위치확인

        window.scrollTo(0, 1745);
    }

    const onClickReview=(e)=>{
        e.preventDefault();
        // console.log(window.scrollY); y축 위치확인
      
        window.scrollTo(0, 6862);                
    }

    const onClickQna=(e)=>{
        e.preventDefault();
        // console.log(window.scrollY); y축 위치확인

        window.scrollTo(0, 8537); 
    }

    const [state, setState] = React.useState({
        size: true,
        color: false,
        footWidth: false,
        footUp: false
    })

    const onClickSize=(e)=>{
        e.preventDefault();

        setState({
            ...state,
            size: true,
            color: false,
            footWidth: false,
            footUp: false
        })


    }

    const onClickColor=(e)=>{
        e.preventDefault();

        setState({
            ...state,
            size: false,
            color: true,
            footWidth: false,
            footUp: false
        })

    }
    const onClickFootWidth=(e)=>{
        e.preventDefault();

        setState({
            ...state,
            size: false,
            color: false,
            footWidth: true,
            footUp: false
        })

    }
    const onClickFootUp=(e)=>{
        e.preventDefault();

        setState({
            ...state,
            size: false,
            color: false,
            footWidth: false,
            footUp: true
        })

    }


    return (
        <section id='section4'>
            <div className="container">
                <div className="gap">
                    <div className="sangpum-button-box">
                        <a href="!#" onClick={onClickInfo} >상품정보</a>
                        <a href="!#" onClick={onClickReview} className='on' >상품후기 (2)</a>
                        <a href="!#" onClick={onClickQna} >상품 Q&A (0)</a>
                    </div>
                    <div className="event-banner">
                        <img src="./img/detail/1685493643014.jpg" alt="" />
                    </div>
                    <ul>
                        <li>· 일반(텍스트) 후기는 500포인트, 포토 후기는 1,000포인트, 동영상 후기는 1,500포인트를 적립해드립니다.</li>
                        <li>&ensp;(동영상 후기는 mp4 형식의 파일만 해당됩니다.)</li>
                        <li>· 후기 등록일 이후 최대 3일 이내에 후기 포인트 적립해드립니다. (주말 및 공휴일 제외)</li>
                        <li>· 상품 결제 가격이 2만 원 미만인 경우 후기 포인트가 지급되지 않습니다.</li>
                        <li>· 구매 확정일로부터 30일 이후에 후기를 등록한 경우 후기 포인트가 지급되지 않습니다.</li>
                        <li>· 직접 촬영한 사진 및 동영상이 아닐 경우 포토/동영상 후기에 대한 포인트 지급이 제외됩니다.</li>
                        <li>· 동일한 이미지를 사용하여 여러 번 상품 후기를 등록하시는 경우 포토 후기에 대한 포인트는 한 번만 지급됩니다.</li>
                        <li>· 허위, 과대광고, 문의 등 후기 내용과 관련 없는 글은 통보 없이 삭제될 수 있습니다.</li>
                        <li>· 포인트는 통합멤버십 회원에게만 지급됩니다.</li>
                        <li>· 상품후기는 A-RT.COM 주문 상품만 작성 가능합니다.</li>
                        <li>· 작성하신 상품후기는 A-RT.COM에 귀속되며, 마케팅 용도로 사용될 수 있습니다.</li>
                    </ul>

                    <div className="how-like-box">
                        <div className="stars">
                            <p>상품만족도</p>
                            <h4>100<span>%</span></h4>
                            <div className="star">
                                <img src="./img/detail/blackstar.png" alt="" />
                                <img src="./img/detail/blackstar.png" alt="" />
                                <img src="./img/detail/blackstar.png" alt="" />
                                <img src="./img/detail/blackstar.png" alt="" />
                                <img src="./img/detail/blackstar.png" alt="" />
                                <span>5</span>
                            </div>
                        </div>
                        <div className="percentage">
                            <div className="per">
                                <span>사이즈</span>
                                <h5>정 사이즈</h5>
                                <p>100<span>%</span> </p>
                            </div>
                            <div className="per">
                                <span>색상</span>
                                <h5>화면과 같음</h5>
                                <p>100<span>%</span> </p>
                            </div>
                            <div className="per">
                                <span>발볼</span>
                                <h5>적당함</h5>
                                <p>100<span>%</span> </p>
                            </div>
                            <div className="per">
                                <span>발등</span>
                                <h5>적당함</h5>
                                <p>100<span>%</span> </p>
                            </div>
                        </div>
                        <div className="distribution">
                            <div className="button-box">
                                <a onClick={onClickSize} href="!#" className={state.size?'on':''}>사이즈</a>
                                <a onClick={onClickColor} href="!#" className={state.color?'on':''}>색상</a>
                                <a onClick={onClickFootWidth} href="!#" className={state.footWidth?'on':''}>발볼</a>
                                <a onClick={onClickFootUp} href="!#" className={state.footUp?'on':''}>발등</a>
                            </div>
                            <div className={`tap size ${state.size?' on':''}`}>
                                <div className='bar'>
                                    <span>
                                        <i>0%</i>
                                    </span>
                                    <p>10mm정도 작음</p>
                                </div>
                                <div className='bar'>
                                    <span>
                                        <i>0%</i>
                                    </span>
                                    <p>5mm정도 작음</p>
                                </div>
                                <div className='bar'>
                                    <span>
                                        <i>0%</i>
                                    </span>
                                    <p>정 사이즈</p>
                                </div>
                                <div className='bar'>
                                    <span>
                                        <i>0%</i>
                                    </span>
                                    <p>5mm정도 큼</p>
                                </div>
                                <div className='bar'>
                                    <span>
                                        <i>0%</i>
                                    </span>
                                    <p>10mm정도 큼</p>
                                </div>
                            </div>
                            <div className={`tap color ${state.color?'on':''}`}>
                                <div className='bar'>
                                    <span>
                                        <i>0%</i>
                                    </span>
                                    <p>많이 밝음</p>
                                </div>
                                <div className='bar'>
                                    <span>
                                        <i>0%</i>
                                    </span>
                                    <p>조금 밝음</p>
                                </div>
                                <div className='bar'>
                                    <span>
                                        <i>0%</i>
                                    </span>
                                    <p>화면과 같음</p>
                                </div>
                                <div className='bar'>
                                    <span>
                                        <i>0%</i>
                                    </span>
                                    <p>조금 어두움</p>
                                </div>
                                <div className='bar'>
                                    <span>
                                        <i>0%</i>
                                    </span>
                                    <p>많이 어두움</p>
                                </div>
                            </div>
                            <div className={`tap footwidth ${state.footWidth?'on':''}`}>
                                <div className='bar'>
                                    <span>
                                        <i>0%</i>
                                    </span>
                                    <p>아주 좁음</p>
                                </div>
                                <div className='bar'>
                                    <span>
                                        <i>0%</i>
                                    </span>
                                    <p>좁음</p>
                                </div>
                                <div className='bar'>
                                    <span>
                                        <i>0%</i>
                                    </span>
                                    <p>적당함</p>
                                </div>
                                <div className='bar'>
                                    <span>
                                        <i>0%</i>
                                    </span>
                                    <p>넓음</p>
                                </div>
                                <div className='bar'>
                                    <span>
                                        <i>0%</i>
                                    </span>
                                    <p>아주 넓음</p>
                                </div>
                            </div>
                            <div className={`tap footup ${state.footUp?'on':''}`}>
                                <div className='bar'>
                                    <span>
                                        <i>0%</i>
                                    </span>
                                    <p>아주 낮음</p>
                                </div>
                                <div className='bar'>
                                    <span>
                                        <i>0%</i>
                                    </span>
                                    <p>낮음</p>
                                </div>
                                <div className='bar'>
                                    <span>
                                        <i>0%</i>
                                    </span>
                                    <p>적당함</p>
                                </div>
                                <div className='bar'>
                                    <span>
                                        <i>0%</i>
                                    </span>
                                    <p>높음</p>
                                </div>
                                <div className='bar'>
                                    <span>
                                        <i>0%</i>
                                    </span>
                                    <p>아주 높음</p>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                    <div className="review-filter">
                        <div className="mysize">
                            <div className="up">
                                <div className="image"></div>
                                <div className="text">
                                    <h5>나의 사이즈 선택하기<img src="./img/detail/btn_icon_circle_arr.png" alt="" /></h5>
                                    <h6>나의 사이즈와 비슷한 상품 후기를 바로 확인해보세요.</h6>
                                </div>
                            </div>
                            <div className="down">
                                <button>
                                    <img src="./img/detail/btn_icon_all_del.png" alt="" />전체삭제
                                </button>
                            </div>
                        </div>
                        <div className="option">
                            <div className="up">
                                <div className="image"></div>
                                <div className="text">
                                    <h5>상품 옵션 선택하기<img src="./img/detail/btn_icon_circle_arr.png" alt="" /></h5>
                                    <h6>상품의 옵션 별 후기를 바로 확인해보세요.</h6>
                                </div>
                            </div>
                            <div className="down">
                                <button>
                                    <img src="./img/detail/btn_icon_all_del.png" alt="" />전체삭제
                                </button>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </section>
    );
};

