import React from 'react';
import './scss/brandSection2.scss';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import {useNavigate}  from 'react-router-dom';


export default function BrandSection2Component({abcChange, grandChange, abcGrand, adidas, 아디다스ABC, 아디다스GRAND, nike,  나이키ABC, 나이키GRAND, converse, 컨버스ABC, 컨버스GRAND, vans, 반스ABC, 반스GRAND, newbalance, 뉴발란스ABC, 뉴발란스GRAND, setViewProductDetail, dkey }) {
    
    const navigate = useNavigate();

    React.useEffect(()=>{
        const navBtn = $('#brandSection2 .nav-btn');
        navBtn.on({
            click(){
                navBtn.removeClass('on');
                $(this).addClass('on');
            }
        })
    })

    const adidasAbcN = 아디다스ABC.length;
    const adidasGrandN = 아디다스GRAND.length;

    const nikeAbcN = 나이키ABC.length;
    const nikeGrandN = 나이키GRAND.length;

    const converseAbcN = 컨버스ABC.length;
    const converseGrandN = 컨버스GRAND.length;

    const vansAbcN = 반스ABC.length;
    const vansGrandN = 반스GRAND.length;

    const newbalanceAbcN = 뉴발란스ABC.length;
    const newbalanceGrandN = 뉴발란스GRAND.length;

    // 클릭 시 상품화면으로 이동 및 사진 적용
    const onClickProductDetailList=(e, item)=>{
        e.preventDefault();

        let obj = {
            상품코드: item.product_code,
            이미지: item.이미지,
            카테고리: item.카테고리,
            제조사: item.제조사,
            제품명: item.제품명,
            가격: item.가격,
            할인율: item.할인율,
            뱃지1: item.뱃지1,
            뱃지2: item.뱃지2,
            뱃지3: item.뱃지3,
            뱃지4: item.뱃지4,
            추천: item.추천,
            배경: item.배경,
            색상: item.색상
        }
   
        console.log(item);
        setViewProductDetail(obj);
    //    window.location.pathname='/PRODUCTDETAIL';
        navigate('/PRODUCTDETAIL');
    }


    return (
        <section id='brandSection2'>
            
            {adidas &&
            <div className="container">
                <div className="gap">
                    <div className="title hide">
                        아디다스
                    </div>
                    <div className="content">
                        <div className="row1">
                            <button onClick={abcChange} className={`${abcGrand?'on':''}`}><figure><img src="./img/brand/bg_channel_sel.png" alt="" /></figure>({adidasAbcN})</button>
                            <button onClick={grandChange} className={`${abcGrand?'':'on'}`}><figure><img src="./img/brand/bg_channel_sel.png" alt="" /></figure>({adidasGrandN})</button>
                        </div>
                        <div className="row2">
                            <div className="row2-title">
                                WEEKLY BEST
                            </div>
                            <div className="row2-content">
                                <ul>
                                    {abcGrand?
                                    (
                                        아디다스ABC.map((item,idx)=>{
                                            if(idx<=4){
                                                return(
                                                    <li key={idx} dkey={idx}>
                                                        <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                            <div className="img-box">
                                                                <img src={item.이미지} alt="" />
                                                                <span className='rank-red'>{idx+1}</span>
                                                            </div>
                                                            <div className="info-box">
                                                                <h3>{item.제조사}</h3>
                                                                <h4>{item.제품명}</h4>
                                                                <h2>
                                                                    {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                    {(item.할인율)!==0 &&
                                                                    <>
                                                                    <i>{(item.가격).toLocaleString()}</i>
                                                                    <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{(item.할인율*100)}%]</em></strong>
                                                                    </>
                                                                    }
                                                                </h2>
                                                                <div className="badge-box">
                                                                    {(item.뱃지1) && <span><img src={item.뱃지1} alt="" /></span>}
                                                                    {(item.뱃지2) &&<span><img src={item.뱃지2} alt="" /></span>}
                                                                    {(item.뱃지3) &&<span><img src={item.뱃지3} alt="" /></span>}
                                                                    {(item.뱃지4) &&<span><img src={item.뱃지4} alt="" /></span>}
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div className="inner-box">
                                                            <div className="inner-row1">
                                                                <dl>
                                                                    <dd>120</dd>
                                                                    <dd>130</dd>
                                                                    <dd>140</dd>
                                                                    <dd>150</dd>
                                                                    <dd>160</dd>
                                                                    <dd>180</dd>
                                                                    <dd>200</dd>
                                                                    <dd>210</dd>
                                                                    <dd>220</dd>
                                                                    <dd>230</dd>
                                                                    <dd>240</dd>
                                                                    <dd>260</dd>
                                                                    <dd>270</dd>
                                                                    <dd>280</dd>
                                                                </dl>
                                                            </div>
                                                            <div className="inner-row2">
                                                                <div className="inner-left">
                                                                    <input type="checkbox" />
                                                                    <input type="checkbox" />
                                                                    <input type="checkbox" />                                                                    
                                                                </div>
                                                                <div className="inner-right">
                                                                    <button>바로구매</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            }
                                            
                                        })
                                    
                                    )
                                    :
                                    (
                                        아디다스GRAND.map((item,idx)=>{
                                            if(idx<=4){
                                                return(
                                                    <li key={idx} dkey={idx}>
                                                        <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                            <div className="img-box">
                                                                <img src={item.이미지} alt="" />
                                                                <span className='rank-green'>{idx+1}</span>
                                                            </div>
                                                            <div className="info-box">
                                                                <h3>{item.제조사}</h3>
                                                                <h4>{item.제품명}</h4>
                                                                <h2>
                                                                    {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                    {(item.할인율)!==0 &&
                                                                    <>
                                                                    <i>{(item.가격).toLocaleString()}</i>
                                                                    <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{(item.할인율*100)}%]</em></strong>
                                                                    </>
                                                                    }
                                                                </h2>
                                                                <div className="badge-box">
                                                                    {(item.뱃지1) && <span><img src={item.뱃지1} alt="" /></span>}
                                                                    {(item.뱃지2) &&<span><img src={item.뱃지2} alt="" /></span>}
                                                                    {(item.뱃지3) &&<span><img src={item.뱃지3} alt="" /></span>}
                                                                    {(item.뱃지4) &&<span><img src={item.뱃지4} alt="" /></span>}
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div className="inner-box">
                                                            <div className="inner-row1">
                                                                <dl>
                                                                    <dd>220</dd>
                                                                    <dd>225</dd>
                                                                    <dd>230</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                </dl>
                                                            </div>
                                                            <div className="inner-row2">
                                                                <div className="inner-left">
                                                                    <input type="checkbox" />
                                                                    <input type="checkbox" />
                                                                    <input type="checkbox" />                                                                    
                                                                </div>
                                                                <div className="inner-right">
                                                                    <button>바로구매</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            }                                            
                                        })                                    
                                    )
                                    }
                                </ul>
                            </div>
                        </div>
                        
                                  
                    </div>
                </div>
            </div>  
            }   

            {nike &&
            <div className="container">
                <div className="gap">
                    <div className="title hide">
                        나이키
                    </div>
                    <div className="content">
                        <div className="row1">
                            <button onClick={abcChange} className={`${abcGrand?'on':''}`}><figure><img src="./img/brand/bg_channel_sel.png" alt="" /></figure>({nikeAbcN})</button>
                            <button onClick={grandChange} className={`${abcGrand?'':'on'}`}><figure><img src="./img/brand/bg_channel_sel.png" alt="" /></figure>({nikeGrandN})</button>
                        </div>
                        <div className="row2">
                            <div className="row2-title">
                                WEEKLY BEST
                            </div>
                            <div className="row2-content">
                                <ul>
                                    {abcGrand?
                                    (
                                        나이키ABC.map((item,idx)=>{
                                            if(idx<=4){
                                                return(
                                                    <li key={idx} dkey={idx}>
                                                        <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                            <div className="img-box">
                                                                <img src={item.이미지} alt="" />
                                                                <span className='rank-red'>{idx+1}</span>
                                                            </div>
                                                            <div className="info-box">
                                                                <h3>{item.제조사}</h3>
                                                                <h4>{item.제품명}</h4>
                                                                <h2>
                                                                    {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                    {(item.할인율)!==0 &&
                                                                    <>
                                                                    <i>{(item.가격).toLocaleString()}</i>
                                                                    <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{(item.할인율*100)}%]</em></strong>
                                                                    </>
                                                                    }
                                                                </h2>
                                                                <div className="badge-box">
                                                                    {(item.뱃지1) && <span><img src={item.뱃지1} alt="" /></span>}
                                                                    {(item.뱃지2) &&<span><img src={item.뱃지2} alt="" /></span>}
                                                                    {(item.뱃지3) &&<span><img src={item.뱃지3} alt="" /></span>}
                                                                    {(item.뱃지4) &&<span><img src={item.뱃지4} alt="" /></span>}
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div className="inner-box">
                                                            <div className="inner-row1">
                                                                <dl>
                                                                    <dd>120</dd>
                                                                    <dd>130</dd>
                                                                    <dd>140</dd>
                                                                    <dd>150</dd>
                                                                    <dd>160</dd>
                                                                    <dd>180</dd>
                                                                    <dd>200</dd>
                                                                    <dd>210</dd>
                                                                    <dd>220</dd>
                                                                    <dd>230</dd>
                                                                    <dd>240</dd>
                                                                    <dd>260</dd>
                                                                    <dd>270</dd>
                                                                    <dd>280</dd>
                                                                </dl>
                                                            </div>
                                                            <div className="inner-row2">
                                                                <div className="inner-left">
                                                                    <input type="checkbox" />
                                                                    <input type="checkbox" />
                                                                    <input type="checkbox" />                                                                    
                                                                </div>
                                                                <div className="inner-right">
                                                                    <button>바로구매</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            }
                                            
                                        })
                                    
                                    )
                                    :
                                    (
                                        나이키GRAND.map((item,idx)=>{
                                            if(idx<=4){
                                                return(
                                                    <li key={idx} dkey={idx}>
                                                        <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                            <div className="img-box">
                                                                <img src={item.이미지} alt="" />
                                                                <span className='rank-green'>{idx+1}</span>
                                                            </div>
                                                            <div className="info-box">
                                                                <h3>{item.제조사}</h3>
                                                                <h4>{item.제품명}</h4>
                                                                <h2>
                                                                    {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                    {(item.할인율)!==0 &&
                                                                    <>
                                                                    <i>{(item.가격).toLocaleString()}</i>
                                                                    <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{(item.할인율*100)}%]</em></strong>
                                                                    </>
                                                                    }
                                                                </h2>
                                                                <div className="badge-box">
                                                                    {(item.뱃지1) && <span><img src={item.뱃지1} alt="" /></span>}
                                                                    {(item.뱃지2) &&<span><img src={item.뱃지2} alt="" /></span>}
                                                                    {(item.뱃지3) &&<span><img src={item.뱃지3} alt="" /></span>}
                                                                    {(item.뱃지4) &&<span><img src={item.뱃지4} alt="" /></span>}
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div className="inner-box">
                                                            <div className="inner-row1">
                                                                <dl>
                                                                    <dd>220</dd>
                                                                    <dd>225</dd>
                                                                    <dd>230</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                </dl>
                                                            </div>
                                                            <div className="inner-row2">
                                                                <div className="inner-left">
                                                                    <input type="checkbox" />
                                                                    <input type="checkbox" />
                                                                    <input type="checkbox" />                                                                    
                                                                </div>
                                                                <div className="inner-right">
                                                                    <button>바로구매</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            }                                            
                                        })                                    
                                    )
                                    }
                                </ul>
                            </div>
                        </div>
                        
                                  
                    </div>
                </div>
            </div>  
            }        

            {converse &&
            <div className="container">
                <div className="gap">
                    <div className="title hide">
                        컨버스
                    </div>
                    <div className="content">
                        <div className="row1">
                            <button onClick={abcChange} className={`${abcGrand?'on':''}`}><figure><img src="./img/brand/bg_channel_sel.png" alt="" /></figure>({converseAbcN})</button>
                            <button onClick={grandChange} className={`${abcGrand?'':'on'}`}><figure><img src="./img/brand/bg_channel_sel.png" alt="" /></figure>({converseGrandN})</button>
                        </div>
                        <div className="row2">
                            <div className="row2-title">
                                WEEKLY BEST
                            </div>
                            <div className="row2-content">
                                <ul>
                                    {abcGrand?
                                    (
                                        컨버스ABC.map((item,idx)=>{
                                            if(idx<=4){
                                                return(
                                                    <li key={idx} dkey={idx}>
                                                        <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                            <div className="img-box">
                                                                <img src={item.이미지} alt="" />
                                                                <span className='rank-red'>{idx+1}</span>
                                                            </div>
                                                            <div className="info-box">
                                                                <h3>{item.제조사}</h3>
                                                                <h4>{item.제품명}</h4>
                                                                <h2>
                                                                    {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                    {(item.할인율)!==0 &&
                                                                    <>
                                                                    <i>{(item.가격).toLocaleString()}</i>
                                                                    <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{(item.할인율*100)}%]</em></strong>
                                                                    </>
                                                                    }
                                                                </h2>
                                                                <div className="badge-box">
                                                                    {(item.뱃지1) && <span><img src={item.뱃지1} alt="" /></span>}
                                                                    {(item.뱃지2) &&<span><img src={item.뱃지2} alt="" /></span>}
                                                                    {(item.뱃지3) &&<span><img src={item.뱃지3} alt="" /></span>}
                                                                    {(item.뱃지4) &&<span><img src={item.뱃지4} alt="" /></span>}
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div className="inner-box">
                                                            <div className="inner-row1">
                                                                <dl>
                                                                    <dd>120</dd>
                                                                    <dd>130</dd>
                                                                    <dd>140</dd>
                                                                    <dd>150</dd>
                                                                    <dd>160</dd>
                                                                    <dd>180</dd>
                                                                    <dd>200</dd>
                                                                    <dd>210</dd>
                                                                    <dd>220</dd>
                                                                    <dd>230</dd>
                                                                    <dd>240</dd>
                                                                    <dd>260</dd>
                                                                    <dd>270</dd>
                                                                    <dd>280</dd>
                                                                </dl>
                                                            </div>
                                                            <div className="inner-row2">
                                                                <div className="inner-left">
                                                                    <input type="checkbox" />
                                                                    <input type="checkbox" />
                                                                    <input type="checkbox" />                                                                    
                                                                </div>
                                                                <div className="inner-right">
                                                                    <button>바로구매</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            }
                                            
                                        })
                                    
                                    )
                                    :
                                    (
                                        컨버스GRAND.map((item,idx)=>{
                                            if(idx<=4){
                                                return(
                                                    <li key={idx} dkey={idx}>
                                                        <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                            <div className="img-box">
                                                                <img src={item.이미지} alt="" />
                                                                <span className='rank-green'>{idx+1}</span>
                                                            </div>
                                                            <div className="info-box">
                                                                <h3>{item.제조사}</h3>
                                                                <h4>{item.제품명}</h4>
                                                                <h2>
                                                                    {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                    {(item.할인율)!==0 &&
                                                                    <>
                                                                    <i>{(item.가격).toLocaleString()}</i>
                                                                    <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{(item.할인율*100)}%]</em></strong>
                                                                    </>
                                                                    }
                                                                </h2>
                                                                <div className="badge-box">
                                                                    {(item.뱃지1) && <span><img src={item.뱃지1} alt="" /></span>}
                                                                    {(item.뱃지2) &&<span><img src={item.뱃지2} alt="" /></span>}
                                                                    {(item.뱃지3) &&<span><img src={item.뱃지3} alt="" /></span>}
                                                                    {(item.뱃지4) &&<span><img src={item.뱃지4} alt="" /></span>}
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div className="inner-box">
                                                            <div className="inner-row1">
                                                                <dl>
                                                                    <dd>220</dd>
                                                                    <dd>225</dd>
                                                                    <dd>230</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                </dl>
                                                            </div>
                                                            <div className="inner-row2">
                                                                <div className="inner-left">
                                                                    <input type="checkbox" />
                                                                    <input type="checkbox" />
                                                                    <input type="checkbox" />                                                                    
                                                                </div>
                                                                <div className="inner-right">
                                                                    <button>바로구매</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            }                                            
                                        })                                    
                                    )
                                    }
                                </ul>
                            </div>
                        </div>
                        
                                  
                    </div>
                </div>
            </div>  
            }        

            {vans &&
            <div className="container">
                <div className="gap">
                    <div className="title hide">
                        반스
                    </div>
                    <div className="content">
                        <div className="row1">
                            <button onClick={abcChange} className={`${abcGrand?'on':''}`}><figure><img src="./img/brand/bg_channel_sel.png" alt="" /></figure>({vansAbcN})</button>
                            <button onClick={grandChange} className={`${abcGrand?'':'on'}`}><figure><img src="./img/brand/bg_channel_sel.png" alt="" /></figure>({vansGrandN})</button>
                        </div>
                        <div className="row2">
                            <div className="row2-title">
                                WEEKLY BEST
                            </div>
                            <div className="row2-content">
                                <ul>
                                    {abcGrand?
                                    (
                                        반스ABC.map((item,idx)=>{
                                            if(idx<=4){
                                                return(
                                                    <li key={idx} dkey={idx}>
                                                        <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                            <div className="img-box">
                                                                <img src={item.이미지} alt="" />
                                                                <span className='rank-red'>{idx+1}</span>
                                                            </div>
                                                            <div className="info-box">
                                                                <h3>{item.제조사}</h3>
                                                                <h4>{item.제품명}</h4>
                                                                <h2>
                                                                    {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                    {(item.할인율)!==0 &&
                                                                    <>
                                                                    <i>{(item.가격).toLocaleString()}</i>
                                                                    <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{(item.할인율*100)}%]</em></strong>
                                                                    </>
                                                                    }
                                                                </h2>
                                                                <div className="badge-box">
                                                                    {(item.뱃지1) && <span><img src={item.뱃지1} alt="" /></span>}
                                                                    {(item.뱃지2) &&<span><img src={item.뱃지2} alt="" /></span>}
                                                                    {(item.뱃지3) &&<span><img src={item.뱃지3} alt="" /></span>}
                                                                    {(item.뱃지4) &&<span><img src={item.뱃지4} alt="" /></span>}
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div className="inner-box">
                                                            <div className="inner-row1">
                                                                <dl>
                                                                    <dd>120</dd>
                                                                    <dd>130</dd>
                                                                    <dd>140</dd>
                                                                    <dd>150</dd>
                                                                    <dd>160</dd>
                                                                    <dd>180</dd>
                                                                    <dd>200</dd>
                                                                    <dd>210</dd>
                                                                    <dd>220</dd>
                                                                    <dd>230</dd>
                                                                    <dd>240</dd>
                                                                    <dd>260</dd>
                                                                    <dd>270</dd>
                                                                    <dd>280</dd>
                                                                </dl>
                                                            </div>
                                                            <div className="inner-row2">
                                                                <div className="inner-left">
                                                                    <input type="checkbox" />
                                                                    <input type="checkbox" />
                                                                    <input type="checkbox" />                                                                    
                                                                </div>
                                                                <div className="inner-right">
                                                                    <button>바로구매</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            }
                                            
                                        })
                                    
                                    )
                                    :
                                    (
                                        반스GRAND.map((item,idx)=>{
                                            if(idx<=4){
                                                return(
                                                    <li key={idx} dkey={idx}>
                                                        <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                            <div className="img-box">
                                                                <img src={item.이미지} alt="" />
                                                                <span className='rank-green'>{idx+1}</span>
                                                            </div>
                                                            <div className="info-box">
                                                                <h3>{item.제조사}</h3>
                                                                <h4>{item.제품명}</h4>
                                                                <h2>
                                                                    {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                    {(item.할인율)!==0 &&
                                                                    <>
                                                                    <i>{(item.가격).toLocaleString()}</i>
                                                                    <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{(item.할인율*100)}%]</em></strong>
                                                                    </>
                                                                    }
                                                                </h2>
                                                                <div className="badge-box">
                                                                    {(item.뱃지1) && <span><img src={item.뱃지1} alt="" /></span>}
                                                                    {(item.뱃지2) &&<span><img src={item.뱃지2} alt="" /></span>}
                                                                    {(item.뱃지3) &&<span><img src={item.뱃지3} alt="" /></span>}
                                                                    {(item.뱃지4) &&<span><img src={item.뱃지4} alt="" /></span>}
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div className="inner-box">
                                                            <div className="inner-row1">
                                                                <dl>
                                                                    <dd>220</dd>
                                                                    <dd>225</dd>
                                                                    <dd>230</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                </dl>
                                                            </div>
                                                            <div className="inner-row2">
                                                                <div className="inner-left">
                                                                    <input type="checkbox" />
                                                                    <input type="checkbox" />
                                                                    <input type="checkbox" />                                                                    
                                                                </div>
                                                                <div className="inner-right">
                                                                    <button>바로구매</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            }                                            
                                        })                                    
                                    )
                                    }
                                </ul>
                            </div>
                        </div>
                        
                                  
                    </div>
                </div>
            </div>  
            }        

            {newbalance &&
            <div className="container">
                <div className="gap">
                    <div className="title hide">
                        뉴발란스
                    </div>
                    <div className="content">
                        <div className="row1">
                            <button onClick={abcChange} className={`${abcGrand?'on':''}`}><figure><img src="./img/brand/bg_channel_sel.png" alt="" /></figure>({newbalanceAbcN})</button>
                            <button onClick={grandChange} className={`${abcGrand?'':'on'}`}><figure><img src="./img/brand/bg_channel_sel.png" alt="" /></figure>({newbalanceGrandN})</button>
                        </div>
                        <div className="row2">
                            <div className="row2-title">
                                WEEKLY BEST
                            </div>
                            <div className="row2-content">
                                <ul>
                                    {abcGrand?
                                    (
                                        뉴발란스ABC.map((item,idx)=>{
                                            if(idx<=4){
                                                return(
                                                    <li key={idx} dkey={idx}>
                                                        <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                            <div className="img-box">
                                                                <img src={item.이미지} alt="" />
                                                                <span className='rank-red'>{idx+1}</span>
                                                            </div>
                                                            <div className="info-box">
                                                                <h3>{item.제조사}</h3>
                                                                <h4>{item.제품명}</h4>
                                                                <h2>
                                                                    {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                    {(item.할인율)!==0 &&
                                                                    <>
                                                                    <i>{(item.가격).toLocaleString()}</i>
                                                                    <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{(item.할인율*100)}%]</em></strong>
                                                                    </>
                                                                    }
                                                                </h2>
                                                                <div className="badge-box">
                                                                    {(item.뱃지1) && <span><img src={item.뱃지1} alt="" /></span>}
                                                                    {(item.뱃지2) &&<span><img src={item.뱃지2} alt="" /></span>}
                                                                    {(item.뱃지3) &&<span><img src={item.뱃지3} alt="" /></span>}
                                                                    {(item.뱃지4) &&<span><img src={item.뱃지4} alt="" /></span>}
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div className="inner-box">
                                                            <div className="inner-row1">
                                                                <dl>
                                                                    <dd>120</dd>
                                                                    <dd>130</dd>
                                                                    <dd>140</dd>
                                                                    <dd>150</dd>
                                                                    <dd>160</dd>
                                                                    <dd>180</dd>
                                                                    <dd>200</dd>
                                                                    <dd>210</dd>
                                                                    <dd>220</dd>
                                                                    <dd>230</dd>
                                                                    <dd>240</dd>
                                                                    <dd>260</dd>
                                                                    <dd>270</dd>
                                                                    <dd>280</dd>
                                                                </dl>
                                                            </div>
                                                            <div className="inner-row2">
                                                                <div className="inner-left">
                                                                    <input type="checkbox" />
                                                                    <input type="checkbox" />
                                                                    <input type="checkbox" />                                                                    
                                                                </div>
                                                                <div className="inner-right">
                                                                    <button>바로구매</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            }
                                            
                                        })
                                    
                                    )
                                    :
                                    (
                                        뉴발란스GRAND.map((item,idx)=>{
                                            if(idx<=4){
                                                return(
                                                    <li key={idx} dkey={idx}>
                                                        <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                            <div className="img-box">
                                                                <img src={item.이미지} alt="" />
                                                                <span className='rank-green'>{idx+1}</span>
                                                            </div>
                                                            <div className="info-box">
                                                                <h3>{item.제조사}</h3>
                                                                <h4>{item.제품명}</h4>
                                                                <h2>
                                                                    {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                    {(item.할인율)!==0 &&
                                                                    <>
                                                                    <i>{(item.가격).toLocaleString()}</i>
                                                                    <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{(item.할인율*100)}%]</em></strong>
                                                                    </>
                                                                    }
                                                                </h2>
                                                                <div className="badge-box">
                                                                    {(item.뱃지1) && <span><img src={item.뱃지1} alt="" /></span>}
                                                                    {(item.뱃지2) &&<span><img src={item.뱃지2} alt="" /></span>}
                                                                    {(item.뱃지3) &&<span><img src={item.뱃지3} alt="" /></span>}
                                                                    {(item.뱃지4) &&<span><img src={item.뱃지4} alt="" /></span>}
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div className="inner-box">
                                                            <div className="inner-row1">
                                                                <dl>
                                                                    <dd>220</dd>
                                                                    <dd>225</dd>
                                                                    <dd>230</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                    <dd>240</dd>
                                                                </dl>
                                                            </div>
                                                            <div className="inner-row2">
                                                                <div className="inner-left">
                                                                    <input type="checkbox" />
                                                                    <input type="checkbox" />
                                                                    <input type="checkbox" />                                                                    
                                                                </div>
                                                                <div className="inner-right">
                                                                    <button>바로구매</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            }                                            
                                        })                                    
                                    )
                                    }
                                </ul>
                            </div>
                        </div>
                        
                                  
                    </div>
                </div>
            </div>  
            }        
        </section>
    );
}

