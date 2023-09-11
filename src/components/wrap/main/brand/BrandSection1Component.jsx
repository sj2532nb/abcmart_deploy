import React from 'react';
import './scss/brandSection1.scss';

export default function BrandSection1Component({abcGrand, adidas, 아디다스ABC, 아디다스GRAND, nike, 나이키ABC, 나이키GRAND, converse, 컨버스ABC, 컨버스GRAND, vans, 반스ABC, 반스GRAND, newbalance, 뉴발란스ABC, 뉴발란스GRAND}) {
    const [favorite, setFavorite] = React.useState(false);
    const [share, setShare] = React.useState(false);

    const onClickOn =()=>{
        setFavorite(on => !on);
    }
    const onMouseEnterShare =()=>{
        setShare(true);
    }
    const onMouseLeaveShare =()=>{
        setShare(false);
    }

    return (
        <section id='brandSection1'>

            {adidas &&
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <div className="row1">
                            <ul>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">HOME</a></li>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">BRAND</a></li>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">ADIDAS</a></li>
                            </ul>
                        </div>
                        <div className="row2">
                            <div className='row2-container'>
                                ADIDAS
                                <span>
                                    <button onClick={onClickOn} className={`${favorite?'on':''}`}><img src="./img/brand/btn_icon_prod_favorite.png" alt="" /></button>
                                    <button onMouseEnter={onMouseEnterShare}><img src="./img/brand/btn_icon_share.png" alt="" /></button>
                                </span>
                                <div onMouseLeave={onMouseLeaveShare} className={`inner-box ${share?'on':''}`}>
                                    <ul>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#">URL</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    

                    <div className="content">                        
                        <div className="txt-box">
                            <h2>아디다스</h2>
                            <p>1949년부터,스토리와 스타일,스포츠를 이끌다.
                                <br/>세상의 모든 스포츠를 포용하는 브랜드
                                <br/>아디다스는 모두의 스포츠 브랜드입니다.
                            </p>
                        </div> 
                        <div className="logo-box">
                            <img src="./img/brand/adidas/logo.png" alt="" />
                        </div>
                        
                        {
                            abcGrand?
                            (
                                아디다스ABC.map((item,idx)=>{
                                    if( idx===0){
                                    return(
                                        <span key={idx} className='background'>
                                            <img src={item.배경} alt="" />
                                        </span> 
                                    )
                                    }
                                })
                                )
                            :
                            (
                                아디다스GRAND.map((item,idx)=>{
                                    if( idx===0){
                                    return(
                                        <span key={idx} className='background'>
                                            <img src={item.배경} alt="" />
                                        </span> 
                                    )
                                    }
                            })
                            )                                           
                        }
                        
                    </div>
                    

                    
                    
                </div>
            </div>            
            }

            {nike &&
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <div className="row1">
                            <ul>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">HOME</a></li>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">BRAND</a></li>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">NIKE</a></li>
                            </ul>
                        </div>
                        <div className="row2">
                            <div className='row2-container'>
                                NIKE
                                <span>
                                    <button onClick={onClickOn} className={`${favorite?'on':''}`}><img src="./img/brand/btn_icon_prod_favorite.png" alt="" /></button>
                                    <button onMouseEnter={onMouseEnterShare}><img src="./img/brand/btn_icon_share.png" alt="" /></button>
                                </span>
                                <div onMouseLeave={onMouseLeaveShare} className={`inner-box ${share?'on':''}`}>
                                    <ul>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#">URL</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    

                    <div className="content">                        
                        <div className="txt-box">
                            <h2>나이키</h2>
                            <p>1964년에 설립된 전세계 1위 브랜드 나이키.
                                <br/>다양한 컬래버레이션과 두터운 매니아층을 통해 세계적으로 그 위치를 증명하고 있습니다.
                            </p>
                        </div> 
                        <div className="logo-box">
                            <img src="./img/brand/nike/logo.png" alt="" />
                        </div>
                        
                        {
                            abcGrand?
                            (
                                나이키ABC.map((item,idx)=>{
                                    if( idx===0){
                                    return(
                                        <span key={idx} className='background'>
                                            <img src={item.배경} alt="" />
                                        </span> 
                                    )
                                    }
                                })
                                )
                            :
                            (
                                나이키GRAND.map((item,idx)=>{
                                    if( idx===0){
                                    return(
                                        <span key={idx} className='background'>
                                            <img src={item.배경} alt="" />
                                        </span> 
                                    )
                                    }
                            })
                            )                                           
                        }
                        
                    </div>
                    

                    
                    
                </div>
            </div>            
            }

            {converse &&
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <div className="row1">
                            <ul>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">HOME</a></li>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">BRAND</a></li>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">CONVERSE</a></li>
                            </ul>
                        </div>
                        <div className="row2">
                            <div className='row2-container'>
                                CONVERSE
                                <span>
                                    <button onClick={onClickOn} className={`${favorite?'on':''}`}><img src="./img/brand/btn_icon_prod_favorite.png" alt="" /></button>
                                    <button onMouseEnter={onMouseEnterShare}><img src="./img/brand/btn_icon_share.png" alt="" /></button>
                                </span>
                                <div onMouseLeave={onMouseLeaveShare} className={`inner-box ${share?'on':''}`}>
                                    <ul>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#">URL</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    

                    <div className="content">                        
                        <div className="txt-box">
                            <h2>컨버스</h2>
                            <p>젊은이들의 '자유로움의 표상'이 된 컨버스.
                                <br/>100년의 역사를 가진 Original America 브랜드로, 없어선 안될 스테디셀러 아이콘으로 자리잡았습니다.
                            </p>
                        </div> 
                        <div className="logo-box">
                            <img src="./img/brand/converse/logo.png" alt="" />
                        </div>
                        
                        {
                            abcGrand?
                            (
                                컨버스ABC.map((item,idx)=>{
                                    if( idx===0){
                                    return(
                                        <span key={idx} className='background'>
                                            <img src={item.배경} alt="" />
                                        </span> 
                                    )
                                    }
                                })
                                )
                            :
                            (
                                컨버스GRAND.map((item,idx)=>{
                                    if( idx===0){
                                    return(
                                        <span key={idx} className='background'>
                                            <img src={item.배경} alt="" />
                                        </span> 
                                    )
                                    }
                            })
                            )                                           
                        }
                        
                    </div>
                    

                    
                    
                </div>
            </div>            
            }

            {vans &&
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <div className="row1">
                            <ul>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">HOME</a></li>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">BRAND</a></li>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">VANS</a></li>
                            </ul>
                        </div>
                        <div className="row2">
                            <div className='row2-container'>
                                VANS
                                <span>
                                    <button onClick={onClickOn} className={`${favorite?'on':''}`}><img src="./img/brand/btn_icon_prod_favorite.png" alt="" /></button>
                                    <button onMouseEnter={onMouseEnterShare}><img src="./img/brand/btn_icon_share.png" alt="" /></button>
                                </span>
                                <div onMouseLeave={onMouseLeaveShare} className={`inner-box ${share?'on':''}`}>
                                    <ul>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#">URL</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    

                    <div className="content">                        
                        <div className="txt-box">
                            <h2>반스</h2>
                            <p>미국 동부에서 스케이트보드화의 시초가 된 브랜드입니다.
                                <br/>스트리트 서브컬쳐를 선도하는 브랜드이며, 반스만의 개성이 담긴 다양한 제품들을 선보입니다.
                            </p>
                        </div> 
                        <div className="logo-box">
                            <img src="./img/brand/vans/logo.png" alt="" />
                        </div>
                        
                        {
                            abcGrand?
                            (
                                반스ABC.map((item,idx)=>{
                                    if( idx===0){
                                    return(
                                        <span key={idx} className='background'>
                                            <img src={item.배경} alt="" />
                                        </span> 
                                    )
                                    }
                                })
                                )
                            :
                            (
                                반스GRAND.map((item,idx)=>{
                                    if( idx===0){
                                    return(
                                        <span key={idx} className='background'>
                                            <img src={item.배경} alt="" />
                                        </span> 
                                    )
                                    }
                            })
                            )                                           
                        }
                        
                    </div>
                    

                    
                    
                </div>
            </div>            
            }

            {newbalance &&
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <div className="row1">
                            <ul>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">HOME</a></li>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">BRAND</a></li>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">NEW BALANCE</a></li>
                            </ul>
                        </div>
                        <div className="row2">
                            <div className='row2-container'>
                                NEW BALANCE
                                <span>
                                    <button onClick={onClickOn} className={`${favorite?'on':''}`}><img src="./img/brand/btn_icon_prod_favorite.png" alt="" /></button>
                                    <button onMouseEnter={onMouseEnterShare}><img src="./img/brand/btn_icon_share.png" alt="" /></button>
                                </span>
                                <div onMouseLeave={onMouseLeaveShare} className={`inner-box ${share?'on':''}`}>
                                    <ul>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#"><img src="./img/event/btn_icon_sns.png" alt="" /></a></li>
                                        <li><a href="!#">URL</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    

                    <div className="content">                        
                        <div className="txt-box">
                            <h2>뉴발란스</h2>
                            <p>불균형한 발에 새로운 균형을 창조한다.
                                <br/>편안함과 균형감을 선사하는 혁신적인 브랜드, 뉴발란스입니다.
                            </p>
                        </div> 
                        <div className="logo-box">
                            <img src="./img/brand/newbalance/logo.png" alt="" />
                        </div>
                        
                        {
                            abcGrand?
                            (
                                뉴발란스ABC.map((item,idx)=>{
                                    if( idx===0){
                                    return(
                                        <span key={idx} className='background'>
                                            <img src={item.배경} alt="" />
                                        </span> 
                                    )
                                    }
                                })
                                )
                            :
                            (
                                뉴발란스GRAND.map((item,idx)=>{
                                    if( idx===0){
                                    return(
                                        <span key={idx} className='background'>
                                            <img src={item.배경} alt="" />
                                        </span> 
                                    )
                                    }
                            })
                            )                                           
                        }
                        
                    </div>
                    

                    
                    
                </div>
            </div>            
            }
        </section>
    );
}

