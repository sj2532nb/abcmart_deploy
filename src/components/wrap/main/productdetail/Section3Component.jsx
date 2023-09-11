import React from 'react';
import '../scss/productdetail.scss';
import $ from 'jquery';

export default function Section3Component(){

    // 버튼박스 클릭 시 위치 이동
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

    const [good, setGood] = React.useState(true);
    const [best, setBest] = React.useState(false);
    const [newproduct, setNewproduct] = React.useState(false);

    const onClickSlideTap1=(e)=>{
        e.preventDefault();
        setGood(true);
        setBest(false);
        setNewproduct(false);
    }

    const onClickSlideTap2=(e)=>{
        e.preventDefault();
        setGood(false);
        setBest(true);
        setNewproduct(false);
    }

    const onClickSlideTap3=(e)=>{
        e.preventDefault();
        setGood(false);
        setBest(false);
        setNewproduct(true);
    }

    const [cnt, setCnt] = React.useState(0);

    React.useEffect(()=>{
        const $slideWrap1 = $('.slide-wrap1');

        let cnt = 0;
        let setId = 0;
        let n = 14;

        $slideWrap1.css({width: `${20 * n}%`});

        function mainSlide(){
            console.log(cnt);

            $slideWrap1.stop().animate({left: `${-20*cnt}%`}, 600, function(){
                if(cnt>13) cnt = 1;
                if(cnt<=0) cnt= 1;
                $slideWrap1.stop().animate({left: `${-20*cnt}%`}, 0)
            });

            setCnt(cnt);
        }

        function nextCount(){
            cnt++;
            mainSlide();
        }

        function prevCount(){
            cnt--;
            mainSlide();
        }

        function autoTimer(){
            clearInterval(setId);
            setId=setInterval(nextCount, 4000);
        }
        //autoTimer();
        



    })



    return (
        <section id='section3'>
            <div className="container">
                <div className="gap">
                    <div className="sangpum-button-box">
                        <a href="!#" onClick={onClickInfo} className='on'>상품정보</a>
                        <a href="!#" onClick={onClickReview} >상품후기 (2)</a>
                        <a href="!#" onClick={onClickQna} >상품 Q&A (0)</a>
                    </div>
                    <div className="event-banner">
                        <img src="./img/detail/16859462545061.jpg" alt="" />
                    </div>
                    <div className="product-infoimg">
                        <img src="./img/detail/1679901240366.jpg" alt="" />
                        <p>본 상품의 상품 이미지 저작권은 ㈜에이비씨마트코리아에 있으며 내용의 무단복제를 금합니다.</p>
                    </div>
                    <div className="show-product-info">                            
                        <h5>상품정보제공 고시</h5>     
                        <ul>
                            <li>
                                <div className="left">
                                    <span>소재</span>
                                    <p>합성가죽+폴리에스터</p>
                                </div>
                                <div className="right">
                                    <span>색상</span>
                                    <p>100</p>
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <span>치수</span>
                                    <p>220 / 230 / 240 / 250 / 260 / 270 / 280</p>
                                </div>
                                <div className="right">
                                    <span>굽높이</span>
                                    <p>뒷굽 : 2.5cm</p>
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <span>제조자</span>
                                    <p>휠라코리아</p>
                                </div>
                                <div className="right">
                                    <span>제조국</span>
                                    <p>베트남</p>
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <span>A/S 책임자와 전화번호</span>
                                    <p>ABC마트 A/S 담당자 : 080-701-7770</p>
                                </div>
                                <div className="right">
                                    <span>제조년월</span>
                                    <p>상품별 입고시기에 따라 상이하여, 배송 받으신 제품의 라벨 참고 바랍니다.</p>
                                </div>
                            </li>
                            <li>
                                <div className="left">
                                    <span>품질보증기준</span>
                                    <p>관련 법 및 소비자 분쟁 해결 기준에 따름 (품질보증기간 : 구입일로부터 6개월 이내)</p>
                                </div>
                                <div className="right">
                                    <span>소재별 관리방법</span>
                                    <p>
                                    상품 착용 및 세탁 시에는 제품에 부착된 라벨 및 취급 주의사항을 꼭 먼저 확인해 주시길 바랍니다.가벼운 오염물이 묻었을 때에는 부드러운 솔로 털어내주시기 바랍니다. 물에 젖었을 때에는 바람이 잘 통하는 응달에 건조해 주시기 바랍니다.
                                    </p>
                                </div>
                            </li>

                        </ul>    
                        <h6><img src="./img/detail/text_icon_notice_gray.png" alt="" />전자상거래 등에서의 상품정보제공 고시에 따라 작성되었습니다.</h6>                       
                        
                    </div>
                    <div className="product-slide">
                        <div className="button-box">
                            <a onClick={onClickSlideTap1} className={good?'on':''} href="!#">관련 용품 추천</a>
                            <a onClick={onClickSlideTap2} className={best?'on':''} href="!#">휠라 BEST</a>
                            <a onClick={onClickSlideTap3} className={newproduct?'on':''} href="!#">휠라 신상품</a>
                        </div>
                        <div className={`slide-box1${good?' on':''}`}>
                            <div className="slide-view">
                                <ul className='slide-wrap1'>
                                    <li className="slide 6">
                                        <img src="./img/detail/slide_good6.jpg" alt="" />
                                        <h6>에이비씨마트</h6>
                                        <p>6인솔(키높이,남성)</p>
                                        <div className='price-box'>
                                            <span className='real-price'>8,000원</span>
                                            <span className='sale-price'>49000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>                                    
                                    <li className="slide 1">
                                        <img src="./img/detail/slide_good1.jpg" alt="" />
                                        <h6>에이비씨마트</h6>
                                        <p>1인솔(키높이,남성)</p>
                                        <div className='price-box'>
                                            <span className='real-price'>8,000원</span>
                                            <span className='sale-price'>49000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 2">
                                        <img src="./img/detail/slide_good2.jpg" alt="" />
                                        <h6>에이비씨마트</h6>
                                        <p>2FILA NEURON 5 NUCLEUS</p>
                                        <div className='price-box'>
                                            <span className='real-price'>99,000원</span>
                                            <span className='sale-price'>49000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 3">
                                        <img src="./img/detail/slide_good3.jpg" alt="" />
                                        <h6>FILA</h6>
                                        <p>FILA NEURON 5 NUCLEUS</p>
                                        <div className='price-box'>
                                            <span className='real-price'>99,000원</span>
                                            <span className='sale-price'>49,000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 4">
                                        <img src="./img/detail/slide_good4.jpg" alt="" />
                                        <h6>FILA</h6>
                                        <p>FILA NEURON 5 NUCLEUS</p>
                                        <div className='price-box'>
                                            <span className='real-price'>99,000원</span>
                                            <span className='sale-price'>49,000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 5">
                                        <img src="./img/detail/slide_good5.jpg" alt="" />
                                        <h6>FILA</h6>
                                        <p>FILA NEURON 5 NUCLEUS</p>
                                        <div className='price-box'>
                                            <span className='real-price'>99,000원</span>
                                            <span className='sale-price'>49,000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 6">
                                        <img src="./img/detail/slide_good6.jpg" alt="" />
                                        <h6>FILA</h6>
                                        <p>FILA NEURON 5 NUCLEUS</p>
                                        <div className='price-box'>
                                            <span className='real-price'>99,000원</span>
                                            <span className='sale-price'>49,000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 1">
                                        <img src="./img/detail/slide_good1.jpg" alt="" />
                                        <h6>에이비씨마트</h6>
                                        <p>1인솔(키높이,남성)</p>
                                        <div className='price-box'>
                                            <span className='real-price'>8,000원</span>
                                            <span className='sale-price'>49000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 2">
                                        <img src="./img/detail/slide_good2.jpg" alt="" />
                                        <h6>에이비씨마트</h6>
                                        <p>2FILA NEURON 5 NUCLEUS</p>
                                        <div className='price-box'>
                                            <span className='real-price'>99,000원</span>
                                            <span className='sale-price'>49000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 3">
                                        <img src="./img/detail/slide_good3.jpg" alt="" />
                                        <h6>FILA</h6>
                                        <p>FILA NEURON 5 NUCLEUS</p>
                                        <div className='price-box'>
                                            <span className='real-price'>99,000원</span>
                                            <span className='sale-price'>49,000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 4">
                                        <img src="./img/detail/slide_good4.jpg" alt="" />
                                        <h6>FILA</h6>
                                        <p>FILA NEURON 5 NUCLEUS</p>
                                        <div className='price-box'>
                                            <span className='real-price'>99,000원</span>
                                            <span className='sale-price'>49,000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 5">
                                        <img src="./img/detail/slide_good5.jpg" alt="" />
                                        <h6>FILA</h6>
                                        <p>FILA NEURON 5 NUCLEUS</p>
                                        <div className='price-box'>
                                            <span className='real-price'>99,000원</span>
                                            <span className='sale-price'>49,000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 6">
                                        <img src="./img/detail/slide_good6.jpg" alt="" />
                                        <h6>FILA</h6>
                                        <p>FILA NEURON 5 NUCLEUS</p>
                                        <div className='price-box'>
                                            <span className='real-price'>99,000원</span>
                                            <span className='sale-price'>49,000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 1">
                                        <img src="./img/detail/S1.jpg" alt="" />
                                        <h6>에이비씨마트</h6>
                                        <p>인솔(키높이,남성)</p>
                                        <div className='price-box'>
                                            <span className='real-price'>8,000원</span>
                                            <span className='sale-price'>49000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`slide-box2${best?' on':''}`}>
                            <div className="slide-view">
                                <ul className='slide-wrap2'>                                    
                                    <li className="slide 1">
                                        <img src="./img/detail/slide_best01.jpg" alt="" />
                                        <h6>에이비씨마트</h6>
                                        <p>1인솔(키높이,남성)</p>
                                        <div className='price-box'>
                                            <span className='real-price'>8,000원</span>
                                            <span className='sale-price'>49000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 2">
                                        <img src="./img/detail/slide_best02.jpg" alt="" />
                                        <h6>에이비씨마트</h6>
                                        <p>2FILA NEURON 5 NUCLEUS</p>
                                        <div className='price-box'>
                                            <span className='real-price'>99,000원</span>
                                            <span className='sale-price'>49000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 3">
                                        <img src="./img/detail/slide_best03.jpg" alt="" />
                                        <h6>FILA</h6>
                                        <p>FILA NEURON 5 NUCLEUS</p>
                                        <div className='price-box'>
                                            <span className='real-price'>99,000원</span>
                                            <span className='sale-price'>49,000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 4">
                                        <img src="./img/detail/slide_best04.jpg" alt="" />
                                        <h6>FILA</h6>
                                        <p>FILA NEURON 5 NUCLEUS</p>
                                        <div className='price-box'>
                                            <span className='real-price'>99,000원</span>
                                            <span className='sale-price'>49,000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 5">
                                        <img src="./img/detail/slide_best05.jpg" alt="" />
                                        <h6>FILA</h6>
                                        <p>FILA NEURON 5 NUCLEUS</p>
                                        <div className='price-box'>
                                            <span className='real-price'>99,000원</span>
                                            <span className='sale-price'>49,000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 6">
                                        <img src="./img/detail/slide_best06.jpg" alt="" />
                                        <h6>FILA</h6>
                                        <p>FILA NEURON 5 NUCLEUS</p>
                                        <div className='price-box'>
                                            <span className='real-price'>99,000원</span>
                                            <span className='sale-price'>49,000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 7">
                                        <img src="./img/detail/slide_best07.jpg" alt="" />
                                        <h6>에이비씨마트</h6>
                                        <p>인솔(키높이,남성)</p>
                                        <div className='price-box'>
                                            <span className='real-price'>8,000원</span>
                                            <span className='sale-price'>49000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 8">
                                        <img src="./img/detail/slide_best08.jpg" alt="" />
                                        <h6>에이비씨마트</h6>
                                        <p>인솔(키높이,남성)</p>
                                        <div className='price-box'>
                                            <span className='real-price'>8,000원</span>
                                            <span className='sale-price'>49000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 9">
                                        <img src="./img/detail/slide_best09.jpg" alt="" />
                                        <h6>에이비씨마트</h6>
                                        <p>인솔(키높이,남성)</p>
                                        <div className='price-box'>
                                            <span className='real-price'>8,000원</span>
                                            <span className='sale-price'>49000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 10">
                                        <img src="./img/detail/slide_best10.jpg" alt="" />
                                        <h6>에이비씨마트</h6>
                                        <p>인솔(키높이,남성)</p>
                                        <div className='price-box'>
                                            <span className='real-price'>8,000원</span>
                                            <span className='sale-price'>49000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 11">
                                        <img src="./img/detail/slide_best11.jpg" alt="" />
                                        <h6>에이비씨마트</h6>
                                        <p>인솔(키높이,남성)</p>
                                        <div className='price-box'>
                                            <span className='real-price'>8,000원</span>
                                            <span className='sale-price'>49000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 12">
                                        <img src="./img/detail/slide_best12.jpg" alt="" />
                                        <h6>에이비씨마트</h6>
                                        <p>인솔(키높이,남성)</p>
                                        <div className='price-box'>
                                            <span className='real-price'>8,000원</span>
                                            <span className='sale-price'>49000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 13">
                                        <img src="./img/detail/slide_best13.jpg" alt="" />
                                        <h6>에이비씨마트</h6>
                                        <p>인솔(키높이,남성)</p>
                                        <div className='price-box'>
                                            <span className='real-price'>8,000원</span>
                                            <span className='sale-price'>49000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 14">
                                        <img src="./img/detail/slide_best14.jpg" alt="" />
                                        <h6>에이비씨마트</h6>
                                        <p>인솔(키높이,남성)</p>
                                        <div className='price-box'>
                                            <span className='real-price'>8,000원</span>
                                            <span className='sale-price'>49000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 15">
                                        <img src="./img/detail/slide_best15.jpg" alt="" />
                                        <h6>에이비씨마트</h6>
                                        <p>인솔(키높이,남성)</p>
                                        <div className='price-box'>
                                            <span className='real-price'>8,000원</span>
                                            <span className='sale-price'>49000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`slide-box3${newproduct?' on':''}`}>
                            <div className="slide-view">
                                <ul className='slide-wrap3'>                                 
                                    <li className="slide 1">
                                        <img src="./img/detail/slide_new01.jpg" alt="" />
                                        <h6>에이비씨마트</h6>
                                        <p>1인솔(키높이,남성)</p>
                                        <div className='price-box'>
                                            <span className='real-price'>8,000원</span>
                                            <span className='sale-price'>49000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 2">
                                        <img src="./img/detail/slide_new02.jpg" alt="" />
                                        <h6>에이비씨마트</h6>
                                        <p>2FILA NEURON 5 NUCLEUS</p>
                                        <div className='price-box'>
                                            <span className='real-price'>99,000원</span>
                                            <span className='sale-price'>49000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 3">
                                        <img src="./img/detail/slide_new03.jpg" alt="" />
                                        <h6>FILA</h6>
                                        <p>FILA NEURON 5 NUCLEUS</p>
                                        <div className='price-box'>
                                            <span className='real-price'>99,000원</span>
                                            <span className='sale-price'>49,000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 4">
                                        <img src="./img/detail/slide_new04.jpg" alt="" />
                                        <h6>FILA</h6>
                                        <p>FILA NEURON 5 NUCLEUS</p>
                                        <div className='price-box'>
                                            <span className='real-price'>99,000원</span>
                                            <span className='sale-price'>49,000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 5">
                                        <img src="./img/detail/slide_new05.jpg" alt="" />
                                        <h6>FILA</h6>
                                        <p>FILA NEURON 5 NUCLEUS</p>
                                        <div className='price-box'>
                                            <span className='real-price'>99,000원</span>
                                            <span className='sale-price'>49,000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 6">
                                        <img src="./img/detail/slide_new06.jpg" alt="" />
                                        <h6>FILA</h6>
                                        <p>FILA NEURON 5 NUCLEUS</p>
                                        <div className='price-box'>
                                            <span className='real-price'>99,000원</span>
                                            <span className='sale-price'>49,000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 7">
                                        <img src="./img/detail/slide_new07.jpg" alt="" />
                                        <h6>에이비씨마트</h6>
                                        <p>인솔(키높이,남성)</p>
                                        <div className='price-box'>
                                            <span className='real-price'>8,000원</span>
                                            <span className='sale-price'>49000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 8">
                                        <img src="./img/detail/slide_new08.jpg" alt="" />
                                        <h6>에이비씨마트</h6>
                                        <p>인솔(키높이,남성)</p>
                                        <div className='price-box'>
                                            <span className='real-price'>8,000원</span>
                                            <span className='sale-price'>49000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 9">
                                        <img src="./img/detail/slide_new09.jpg" alt="" />
                                        <h6>에이비씨마트</h6>
                                        <p>인솔(키높이,남성)</p>
                                        <div className='price-box'>
                                            <span className='real-price'>8,000원</span>
                                            <span className='sale-price'>49000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 10">
                                        <img src="./img/detail/slide_new10.jpg" alt="" />
                                        <h6>에이비씨마트</h6>
                                        <p>인솔(키높이,남성)</p>
                                        <div className='price-box'>
                                            <span className='real-price'>8,000원</span>
                                            <span className='sale-price'>49000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 11">
                                        <img src="./img/detail/slide_new11.jpg" alt="" />
                                        <h6>에이비씨마트</h6>
                                        <p>인솔(키높이,남성)</p>
                                        <div className='price-box'>
                                            <span className='real-price'>8,000원</span>
                                            <span className='sale-price'>49000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 12">
                                        <img src="./img/detail/slide_new12.jpg" alt="" />
                                        <h6>에이비씨마트</h6>
                                        <p>인솔(키높이,남성)</p>
                                        <div className='price-box'>
                                            <span className='real-price'>8,000원</span>
                                            <span className='sale-price'>49000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 13">
                                        <img src="./img/detail/slide_new13.jpg" alt="" />
                                        <h6>에이비씨마트</h6>
                                        <p>인솔(키높이,남성)</p>
                                        <div className='price-box'>
                                            <span className='real-price'>8,000원</span>
                                            <span className='sale-price'>49000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 14">
                                        <img src="./img/detail/slide_new14.jpg" alt="" />
                                        <h6>에이비씨마트</h6>
                                        <p>인솔(키높이,남성)</p>
                                        <div className='price-box'>
                                            <span className='real-price'>8,000원</span>
                                            <span className='sale-price'>49000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                    <li className="slide 15">
                                        <img src="./img/detail/slide_new15.jpg" alt="" />
                                        <h6>에이비씨마트</h6>
                                        <p>인솔(키높이,남성)</p>
                                        <div className='price-box'>
                                            <span className='real-price'>8,000원</span>
                                            <span className='sale-price'>49000</span>
                                            <span className='won'>원</span>
                                            <span className='discount-per'>[50%]</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

