import React from 'react';
import './scss/kidsSection1.scss';
import $ from 'jquery';

export default function KidsSection1Component() {

    const [market, setMarket] = React.useState('ABC');
    const onClickMarket=(e, value)=>{
        e.preventDefault();
        setMarket(value)
    }

    const [cnt,setCnt]=React.useState(0);

    React.useEffect(()=>{
        const $prevBtn = $('.left-arrow-btn');
        const $nextBtn = $('.right-arrow-btn');
        const $slideWrap =$('.slide-wrap')

        let cnt=0;
        let setId=0;
        let n=5;
      
        $slideWrap.css({width: `${100 * n}%` });
      
        function mainSlide(){
            console.log(cnt);
            
            $slideWrap.stop().animate({left: `${-100*cnt}%`}, 600, function(){
                if(cnt>n-3) cnt=0;
                if(cnt<0) cnt=n-3;
                $slideWrap.stop().animate({left: `${-100*cnt}%`}, 0)
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
        autoTimer();
      
        $nextBtn.on({
            click(e){
                e.preventDefault();
                clearInterval(setId);
                nextCount();
                autoTimer();
            }      
        });
        
      
      
        $prevBtn.on({
            click(e){
                e.preventDefault();
                clearInterval(setId);
                prevCount();
                autoTimer();
            }
        });
      
      
      
      
      },[]);

    

    return (
        <section id='kidsSection1'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <img src="./img/kids/logo_kidsmart.png" alt="ABC KID'S MART"/>
                    </div>
                    <div className="content">
                        <div className="market-change">
                            <ul>
                                <li className={market==='ABC'?'on':''}>
                                    <a onClick={(e)=>onClickMarket(e, 'ABC')} href="!#">ABC마트 키즈</a>
                                </li>
                                <li  className={market==='GRAND'?'on':''}>
                                    <a onClick={(e)=>onClickMarket(e, 'GRAND')} href="!#">그랜드 스테이지 키즈</a>
                                </li>
                            </ul>
                        </div>
                        <div className="nav-box">
                            <ul>
                                <li><a href="!#">신발</a></li>
                                <li><a href="!#">의류</a></li>
                                <li><a href="!#">잡화</a></li>
                                <li><a href="!#">용품</a></li>
                            </ul>
                        </div>
                        <div className="slide-box">
                            <div className="slide-view">
                                <ul className="slide-wrap">
                                    <li className='slede slede3'>
                                        <a href="!#"><img src="./img/kids/1669005152554.jpg" alt="" /></a>
                                    </li>
                                    <li className='slede slede1'>
                                        <a href="!#"><img src="./img/kids/1687504003018.jpg" alt="" /></a>
                                    </li>
                                    <li className='slede slede2'>
                                        <a href="!#"><img src="./img/kids/1654219876263.jpg" alt="" /></a>
                                    </li>
                                    <li className='slede slede3'>
                                        <a href="!#"><img src="./img/kids/1669005152554.jpg" alt="" /></a>
                                    </li>
                                    <li className='slede slede1'>
                                        <a href="!#"><img src="./img/kids/1687504003018.jpg" alt="" /></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="btn-box">
                                <a href="!#" className='left-arrow-btn'><img src="./img/kids/ico_prev.png" alt="" /></a>
                                <span>{cnt+1===4?1:cnt+1===0?3:cnt+1} / 3</span>
                                <a href="!#" className='right-arrow-btn'><img src="./img/kids/ico_next.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="list-category">
                            <ul>
                                <li><a href="!#"><img src="./img/kids/img_ranking.png" alt="" /></a></li>                               
                                <li><a href="!#"><img src="./img/kids/img_newarrivals.png" alt="" /></a></li>                               
                                <li><a href="!#"><img src="./img/kids/img_catalog.png" alt="" /></a></li>                               
                            </ul>
                        </div>
                        <div className="special-brand">
                            <div className="special-brand-title">
                                <figure><img src="./img/kids/txt_specialbrand.png" alt="" /></figure>
                                <span>지금 핫한 브랜드만 모았어요</span>
                            </div>
                            <ul>
                                <li>
                                    <a href="!#">
                                        <div className="img-box">
                                            <figure><img src="./img/kids/1672105847501.png" alt="" /></figure>
                                            <span><img src="./img/kids/1672105873864.png" alt="" /></span>
                                        </div>
                                        <div className="txt-box">
                                            <h4>봉봉</h4>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <div className="img-box">
                                            <figure><img src="./img/kids/brand_img02.png" alt="" /></figure>
                                            <span><img src="./img/kids/brand_txt02.png" alt="" /></span>
                                        </div>
                                        <div className="txt-box">
                                            <h4>꼬무신</h4>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <div className="img-box">
                                            <figure><img src="./img/kids/brand_img03.png" alt="" /></figure>
                                            <span><img src="./img/kids/brand_txt03.png" alt="" /></span>
                                        </div>
                                        <div className="txt-box">
                                            <h4>라라고</h4>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <div className="img-box">
                                            <figure><img src="./img/kids/brand_img04.png" alt="" /></figure>
                                            <span><img src="./img/kids/brand_txt04.png" alt="" /></span>
                                        </div>
                                        <div className="txt-box">
                                            <h4>리틀 다이애나</h4>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="!#">
                                        <div className="img-box">
                                            <figure><img src="./img/kids/brand_img05.png" alt="" /></figure>
                                            <span><img src="./img/kids/brand_txt05.png" alt="" /></span>
                                        </div>
                                        <div className="txt-box">
                                            <h4>코뮤엘로</h4>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

