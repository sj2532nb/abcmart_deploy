import React from 'react';
import axios from 'axios';
import './scss/section5.scss';

export default function Section5Component(){

    const [isCrocs, setIsCrocs] = React.useState(true);
    const [isSlide, setIsSlide] = React.useState(false);
    const [isMule, setIsMule] = React.useState(false);
    const [isZaxy, setIsZaxy] = React.useState(false);

    const [state, setState] = React.useState({
        mdsPickCrocs: [],
        mdsPickSlide: [],
        mdsPickMule: [],
        mdsPickZaxy: []
    });

    React.useEffect(()=>{

        axios({
            url: './data/intro/section5.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    mdsPickCrocs: res.data.mds_pick_crocs,
                    mdsPickSlide: res.data.mds_pick_slide,
                    mdsPickMule: res.data.mds_pick_mule,
                    mdsPickZaxy: res.data.mds_pick_zaxy
                });
            }
        })
        .catch((err)=>{
            console.log(`err` + err);
        });

    },[]);

    const onClickCrocs=(e)=>{
        e.preventDefault();
        setIsCrocs(true);
        setIsSlide(false);
        setIsMule(false);
        setIsZaxy(false);
    }
    const onClickSlide=(e)=>{
        e.preventDefault();
        setIsCrocs(false);
        setIsSlide(true);
        setIsMule(false);
        setIsZaxy(false);
    }
    const onClickMule=(e)=>{
        e.preventDefault();
        setIsCrocs(false);
        setIsSlide(false);
        setIsMule(true);
        setIsZaxy(false);
    }
    const onClickZaxy=(e)=>{
        e.preventDefault();
        setIsCrocs(false);
        setIsSlide(false);
        setIsMule(false);
        setIsZaxy(true);
    }


    return (
        <section id="section5">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>MD’S PICK</h2>
                    </div>
                    <div className="catecory">
                        <ul>
                            <li className={isCrocs?'on':''}><a onClick={onClickCrocs} href="!#">CROCS</a></li>
                            <li className={isSlide?'on':''}><a onClick={onClickSlide} href="!#">SLIDE</a></li>
                            <li className={isMule?'on':''}><a onClick={onClickMule} href="!#">MULE</a></li>
                            <li className={isZaxy?'on':''}><a onClick={onClickZaxy} href="!#">ZAXY</a></li>
                        </ul>
                    </div>
                    <div className="content">
                        <ul className={`crocs-section ${isCrocs?' on':''}`}>
                            {
                                state.mdsPickCrocs.map((item, idx)=>{
                                    return(
                                        <li key={idx}>
                                            <a href="!#">
                                                <figure>
                                                    <img src={item.src} alt="" />
                                                </figure>
                                                <div className='information-box'>
                                                    <h3>{item.title}</h3>
                                                    <p>{item.info}</p>
                                                    <div className="price-box">
                                                        {item.product_price===""?'':<strong className='product-price'>{item.product_price}<em>원</em></strong>}
                                                        {item.cost_price===""?'':<s className='cost-price'>{item.cost_price}<em>원</em></s>}
                                                        {item.discount_price===""?'':<strong className='discount-price'>{item.discount_price}<em>원</em></strong>}
                                                        {item.discount_rate===""?'':<span className="discount-rate"><em>[</em>{item.discount_rate}<em>%]</em></span>}
                                                    </div>
                                                    {item.best===""?'':
                                                        <div className="icon_box best">
                                                            <img src="./img/intro/icon_best.png" alt="" />
                                                        </div>
                                                    }
                                                    {item.coupon===""?'':
                                                        <div className="icon_box coupon">
                                                            <img src="./img/intro/icon_coupon.gif" alt="" />
                                                        </div>
                                                    }
                                                    {item.only===""?'':
                                                        <div className="icon_box only">
                                                            <img src="./img/intro/icon_only.jpg" alt="" />
                                                        </div>
                                                    }
                                                    {item.delivery===""?'':
                                                        <div className="icon_box delivery">
                                                            <img src="./img/intro/icon_delivery.png" alt="" />
                                                        </div>
                                                    }
                                                </div>
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <ul className={`slide-section ${isSlide?' on':''}`}>
                            {
                                state.mdsPickSlide.map((item, idx)=>{
                                    return(
                                        <li key={idx}>
                                            <a href="!#">
                                                <figure>
                                                    <img src={item.src} alt="" />
                                                </figure>
                                                <div className='information-box'>
                                                    <h3>{item.title}</h3>
                                                    <p>{item.info}</p>
                                                    <div className="price-box">
                                                        {item.product_price===""?'':<strong className='product-price'>{item.product_price}<em>원</em></strong>}
                                                        {item.cost_price===""?'':<s className='cost-price'>{item.cost_price}<em>원</em></s>}
                                                        {item.discount_price===""?'':<strong className='discount-price'>{item.discount_price}<em>원</em></strong>}
                                                        {item.discount_rate===""?'':<span className="discount-rate"><em>[</em>{item.discount_rate}<em>%]</em></span>}
                                                    </div>
                                                    {item.best===""?'':
                                                        <div className="icon_box best">
                                                            <img src="./img/intro/icon_best.png" alt="" />
                                                        </div>
                                                    }
                                                    {item.coupon===""?'':
                                                        <div className="icon_box coupon">
                                                            <img src="./img/intro/icon_coupon.gif" alt="" />
                                                        </div>
                                                    }
                                                    {item.only===""?'':
                                                        <div className="icon_box only">
                                                            <img src="./img/intro/icon_only.jpg" alt="" />
                                                        </div>
                                                    }
                                                    {item.delivery===""?'':
                                                        <div className="icon_box delivery">
                                                            <img src="./img/intro/icon_delivery.png" alt="" />
                                                        </div>
                                                    }
                                                </div>
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <ul className={`mule-section ${isMule?' on':''}`}>
                            {
                                state.mdsPickMule.map((item, idx)=>{
                                    return(
                                        <li key={idx}>
                                            <a href="!#">
                                                <figure>
                                                    <img src={item.src} alt="" />
                                                </figure>
                                                <div className='information-box'>
                                                    <h3>{item.title}</h3>
                                                    <p>{item.info}</p>
                                                    <div className="price-box">
                                                        {item.product_price===""?'':<strong className='product-price'>{item.product_price}<em>원</em></strong>}
                                                        {item.cost_price===""?'':<s className='cost-price'>{item.cost_price}<em>원</em></s>}
                                                        {item.discount_price===""?'':<strong className='discount-price'>{item.discount_price}<em>원</em></strong>}
                                                        {item.discount_rate===""?'':<span className="discount-rate"><em>[</em>{item.discount_rate}<em>%]</em></span>}
                                                    </div>
                                                    {item.best===""?'':
                                                        <div className="icon_box best">
                                                            <img src="./img/intro/icon_best.png" alt="" />
                                                        </div>
                                                    }
                                                    {item.coupon===""?'':
                                                        <div className="icon_box coupon">
                                                            <img src="./img/intro/icon_coupon.gif" alt="" />
                                                        </div>
                                                    }
                                                    {item.only===""?'':
                                                        <div className="icon_box only">
                                                            <img src="./img/intro/icon_only.jpg" alt="" />
                                                        </div>
                                                    }
                                                    {item.delivery===""?'':
                                                        <div className="icon_box delivery">
                                                            <img src="./img/intro/icon_delivery.png" alt="" />
                                                        </div>
                                                    }
                                                </div>
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <ul className={`zaxy-section ${isZaxy?' on':''}`}>
                            {
                                state.mdsPickZaxy.map((item, idx)=>{
                                    return(
                                        <li key={idx}>
                                            <a href="!#">
                                                <figure>
                                                    <img src={item.src} alt="" />
                                                </figure>
                                                <div className='information-box'>
                                                    <h3>{item.title}</h3>
                                                    <p>{item.info}</p>
                                                    <div className="price-box">
                                                        {item.product_price===""?'':<strong className='product-price'>{item.product_price}<em>원</em></strong>}
                                                        {item.cost_price===""?'':<s className='cost-price'>{item.cost_price}<em>원</em></s>}
                                                        {item.discount_price===""?'':<strong className='discount-price'>{item.discount_price}<em>원</em></strong>}
                                                        {item.discount_rate===""?'':<span className="discount-rate"><em>[</em>{item.discount_rate}<em>%]</em></span>}
                                                    </div>
                                                    {item.best===""?'':
                                                        <div className="icon_box best">
                                                            <img src="./img/intro/icon_best.png" alt="" />
                                                        </div>
                                                    }
                                                    {item.coupon===""?'':
                                                        <div className="icon_box coupon">
                                                            <img src="./img/intro/icon_coupon.gif" alt="" />
                                                        </div>
                                                    }
                                                    {item.only===""?'':
                                                        <div className="icon_box only">
                                                            <img src="./img/intro/icon_only.jpg" alt="" />
                                                        </div>
                                                    }
                                                    {item.delivery===""?'':
                                                        <div className="icon_box delivery">
                                                            <img src="./img/intro/icon_delivery.png" alt="" />
                                                        </div>
                                                    }
                                                </div>
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};