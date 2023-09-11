import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import './scss/section1.scss';

export default function Section1Component(){

    const [state, setState] = React.useState({
        slide: [],
        n: 0
    });

    React.useEffect(()=>{

        axios({
            url: './data/intro/section1.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    slide: res.data.main_slide,
                    n: res.data.main_slide.length
                });
            }
        })
        .catch((err)=>{
            console.log(`err` + err);
        });

    },[]);

    React.useEffect(()=>{

        const $slide = $(`#section1 .slide`);
        const $prevBtn = $(`#section1 .prev-btn`);
        const $nextBtn = $(`#section1 .next-btn`);
        const $stopBtn = $(`#section1 .stop-btn`);
        const $playBtn = $(`#section1 .play-btn`);
        const $currentPage = $(`#section1 .current-page`);
        const $totalPage = $(`#section1 .total-page`);
        
        let cnt = 0;
        let setId = 0;
        let imsi = null;

        
        function mainNextSlide(){
            $slide.css({zIndex: 1, opacity:1});
            $slide.eq(imsi!==null?imsi:(cnt===0? state.n-1:cnt-1)).css({zIndex: state.n-1});
            $slide.eq(cnt).css({zIndex: state.n}).stop().animate({opacity:0}, 0).animate({opacity:1}, 600);
            pageNumber();
        }

        function mainPrevSlide(){
            $slide.css({zIndex: 1, opacity:1});
            $slide.eq(cnt).css({zIndex: state.n-1});
            $slide.eq(imsi!==null?imsi:(cnt===state.n-1? 0:cnt+1)).css({zIndex: state.n}).stop().animate({opacity:1}, 0).animate({opacity:0}, 600);  // 현재슬라이드
            pageNumber();
        }

        function prevCount(){
            cnt--;
            if(cnt<0){
                cnt=state.n-1;
            }
            mainPrevSlide();
        }

        function nextCount(){
            cnt++;
            if(cnt>state.n-1){
                cnt=0;
            }
            mainNextSlide();
        }

        function autoTimer(){
            clearInterval(setId);
            setId = setInterval(nextCount, 3000);
        }
        autoTimer();

        $prevBtn.on({
            click(e){
                e.preventDefault();
                prevCount();
                clearInterval(setId);
            }
        });

        $nextBtn.on({
            click(e){
                e.preventDefault();
                nextCount();
                clearInterval(setId);
            }
        });

        $stopBtn.on({
            click(e){
                e.preventDefault();
                clearInterval(setId);
                $(this).addClass('on');
                $playBtn.addClass('on');
            }
        });

        $playBtn.on({
            click(e){
                e.preventDefault();
                autoTimer();
                $(this).removeClass('on');
                $stopBtn.removeClass('on');
            }
        });

        function pageNumber(){
            $currentPage.html( `0${cnt+1===(state.n+1) ? 1 : (cnt+1===0 ? state.n : cnt+1)}` );
            $totalPage.html(`0${state.n}`);
        }

    },[state.n]);


    return (
        <section id="section1">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul className="slide-wrap">

                                    {
                                        state.slide.map((item, idx)=>{
                                            return(
                                                <li className="slide" key={idx}>
                                                    <a href="!#">
                                                        <img src={item.src} alt="" />
                                                        <div className="title-box">
                                                            <strong>{item.title}</strong>
                                                            <span>{item.info}</span>
                                                        </div>
                                                    </a>
                                                </li>
                                            )
                                        })
                                    }

                                </ul>
                            </div>
                        </div>
                        <div className="page-box">
                            <div className="pagenation">
                                <span className='current-page'>01</span>
                                <i>/</i>
                                <span className='total-page'>{`0${state.n}`}</span>
                            </div>
                            <button className='prev-btn'></button>
                            <button className='next-btn'></button>
                            <button className='stop-btn'></button>
                            <button className='play-btn'></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};