import React from 'react';
import $ from 'jquery';
import axios from 'axios';
import './scss/section10.scss';

export default function Section10Component(){
    
    const count = React.useRef(0);
    const [state, setState] = React.useState({
        abcPlus: [],
        n10: 0
    });

    React.useEffect(()=>{

        axios({
            url: './data/intro/section10.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    abcPlus: res.data.abc_plus,
                    n10: res.data.abc_plus.length
                });
                count.current = res.data.abc_plus.length;
            }
        })
        .catch((err)=>{
            console.log(`err` + err);
        });

    },[]);

    React.useEffect(()=>{
        let t = 0;
        if(state.n10>0){
            if(t===0){
                t=1;
                const $slideWrap = $(`#section10 .slide-wrap`);
                const $prevBtn = $(`#section10 .prev-btn`);
                const $nextBtn = $(`#section10 .next-btn`);
                
                let cnt = 0;
                let setId = 0;

                $slideWrap.css({width: `${16 * count.current}%` });

                function mainSlide(){
                    $slideWrap.stop().animate({left: `${-16 * cnt}%`}, 600, function(){
                        if(cnt>=20) cnt=0;
                        if(cnt<0) cnt=20;
                        $slideWrap.stop().animate({left: `${-16 * cnt}%`}, 0);
                    });
                }

                function prevCount(){
                    cnt--;
                    mainSlide();
                }

                function nextCount(){
                    cnt++;
                    mainSlide();
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
            }
        }

    },[state.n10]);


    
    return (
        <section id="section10">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>ABC PLUS</h2>
                        <p># MONTHLY HOT KEYWORD</p>
                    </div>
                    <div className="content">
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul className="slide-wrap">
                                    {
                                        state.abcPlus.map((item, idx)=>{
                                            return(
                                                <li className="slide slide1" key={idx}>
                                                    <figure>
                                                        <a href="!#">
                                                            <img src={item.src} alt="" />
                                                        </a>
                                                        <span>
                                                            <pre>{item.title}</pre>
                                                        </span>
                                                    </figure>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <button className='prev-btn'></button>
                        <button className='next-btn'></button>
                    </div>
                </div>
            </div>
        </section>
    );
};