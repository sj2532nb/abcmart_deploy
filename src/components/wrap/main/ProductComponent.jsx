import React from 'react';
import './scss/product.scss';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ProductComponent({sale, running1, running2, running3, setViewProductDetail, d_key}) {

    const[abcGrand, setAbcGrand]=React.useState(true);

    const abcChange =()=>{
        setAbcGrand(true);
    }
    const grandChange =()=>{
        setAbcGrand(false);
    }

    React.useEffect(()=>{
        if(running1){
            setAbcGrand(true);
        }
        else{
            setAbcGrand(true);
        }
    },[running1, running2, running3, sale])

    //줌인 줌아웃 
    const [zoom, setZoom] = React.useState(false);

    const onChangeZoom =(e)=>{
        const targetValue = e.target.value;

        if(targetValue==='zoomOut'){
            setZoom(false);
            
        }
        else if(targetValue==='zoomIn'){
            setZoom(true);
            
        }
    }

    //정렬
    const[sort, setSort] = React.useState('신상품순');
    const[sortBox, setSortBox] =React.useState(false);

    const onClickSort=(order)=>{
        setSort(order);
        setSortBox(false);
        setCategory('')
        setDelivery(false);
        setPickup(false);
        setFilter(false);
    };

    const onClickBox=()=>{
        setSortBox(!sortBox);
    };

    //정렬상자 닫기
    React.useEffect(()=>{
        const selectBox = $('.select-box input');
        
        $(document).on({
            click(e){
                if(!selectBox.is(e.target)){
                    setSortBox(false);
                }
            }
        })
    })

    //카테고리
    const [filter, setFilter] = React.useState({});    
    const[category, setCategory] = React.useState('전체');

    const onChangeCategory=(order)=>{
        setCategory(order);
        setSort('신상품순');
        setDelivery(false);
        setPickup(false);
    }

    const onClickOn =(value)=>{
        setFilter((prevFilter)=>({
            ...prevFilter,
            [value]:!prevFilter[value]
        }));

    };

    const onClickFilter=()=>{
        setCategory('');

        setFilter(false);
        setSort('신상품순');
        setDelivery(false);
        setPickup(false);
    }   


    //아트배송 & 매장픽업
    const [delivery, setDelivery] = React.useState(false)
    const [pickup, setPickup] = React.useState(false)
    
    const onChangeOrder = (e)=>{
        const targetValue = e.target.value;

        setSort('신상품순')
        setFilter(false);
        setCategory('');
        if(targetValue==='delivery'){
            setDelivery(open=>!open);
            
        }
        else if(targetValue==='pickup'){
            setPickup(open=>!open);
        }
        
    }

    //아트배송, 매장픽업 버튼 제거
    const onClickDeliveryDel=()=>{
        setDelivery(false);
    }
    const onClickPickupDel=()=>{
        setPickup(false);
    }
    const onClickAllDel=()=>{
        setDelivery(false);
        setPickup(false);
    }

    //레프트상자 감추기
    const [leftbox, setLeftbox] = React.useState(false);
    const onClickLeftbox=()=>{
        setLeftbox(on=>!on)
    }


       //페이지 버튼

    //목록개수
    const [list] = React.useState(8); 
    const [zoomInList] = React.useState(4);  

    //페이지번호
    const [pageNumber, setPageNumber] = React.useState(1); 
    //버튼개수
    const [groupPage] = React.useState(5); 
    const [cnt, setCnt] = React.useState(1); 

    //그룹 시작끝 번호
    const [startNum, setStartNum] = React.useState(); 
    const [endtNum, setEndtNum] = React.useState(); 

    //  페이지번호 클릭 이벤트
    const onClickPageNum=(e, num)=>{
        e.preventDefault();
        setPageNumber(num);

        window.scrollTo({
            top:1330
        })

    }

    // 그룹페이지 클릭  다음카운트
    const onClickNextGroup=(e)=>{
        e.preventDefault();
        setCnt(cnt+1);
    }

    // 그룹페이지 클릭  이전카운트
    const onClickPrevGroup=(e)=>{
        e.preventDefault();
        setCnt(cnt-1);
    }

    // 그룹 시작번호 설정
    React.useEffect(()=>{
        setStartNum( (cnt-1)*groupPage );
    },[cnt, groupPage]);

    // 그룹 끝번호 설정
    React.useEffect(()=>{
        setEndtNum( startNum + groupPage );
    },[startNum, groupPage]);
    
    // 버튼클릭시 그룹의 첫페이지로 설정
    React.useEffect(()=>{
        setPageNumber(startNum+1);
    },[endtNum, startNum]);


    const [state, setState] = React.useState({
        스포츠ABC: [],
        스포츠GRAND: []
    });
    React.useEffect(()=>{
        axios({
            url:'./data/product/product.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    스포츠ABC:res.data.sports_abc,
                    스포츠GRAND:res.data.sports_grand
                })
            }
        })
        .catch()
    },[])


    //정렬
    const[sortAbcSports, setSortAbcSports] =React.useState(state.스포츠ABC)
    const[sortGrandSports, setSortGrandSports] =React.useState(state.스포츠GRAND)

    React.useEffect(()=>{
        let arrSportsAbc = [...state.스포츠ABC]
        let arrSportsGrand = [...state.스포츠GRAND]

        if(running1){
            arrSportsAbc = arrSportsAbc.filter(item => item.카테고리 === '런닝화')
            arrSportsGrand = arrSportsGrand.filter(item => item.카테고리 === '런닝화')
            if(delivery && pickup){
                arrSportsAbc = arrSportsAbc.filter(item => item.뱃지2 !=="" && item.뱃지3 !== "")
                arrSportsGrand = arrSportsGrand.filter(item => item.뱃지2 !=="" && item.뱃지3 !== "")
            }
            else if(delivery){
                arrSportsAbc = arrSportsAbc.filter(item => item.뱃지3 !== "")
                arrSportsGrand = arrSportsGrand.filter(item => item.뱃지3 !== "")
            }
            else if(pickup){
                arrSportsAbc = arrSportsAbc.filter(item => item.뱃지2 !== "")
                arrSportsGrand = arrSportsGrand.filter(item => item.뱃지2 !== "")
            }
        }
        else if(running2){
            arrSportsAbc = arrSportsAbc.filter(item => item.카테고리 === '런닝화')
            arrSportsGrand = arrSportsGrand.filter(item => item.카테고리 === '런닝화')
            if(delivery && pickup){
                arrSportsAbc = arrSportsAbc.filter(item => item.뱃지2 !=="" && item.뱃지3 !== "")
                arrSportsGrand = arrSportsGrand.filter(item => item.뱃지2 !=="" && item.뱃지3 !== "")
            }
            else if(delivery){
                arrSportsAbc = arrSportsAbc.filter(item => item.뱃지3 !== "")
                arrSportsGrand = arrSportsGrand.filter(item => item.뱃지3 !== "")
            }
            else if(pickup){
                arrSportsAbc = arrSportsAbc.filter(item => item.뱃지2 !== "")
                arrSportsGrand = arrSportsGrand.filter(item => item.뱃지2 !== "")
            }
        }
        else if(running3){
            arrSportsAbc = arrSportsAbc.filter(item => item.카테고리 === '런닝화')
            arrSportsGrand = arrSportsGrand.filter(item => item.카테고리 === '런닝화')
            if(delivery && pickup){
                arrSportsAbc = arrSportsAbc.filter(item => item.뱃지2 !=="" && item.뱃지3 !== "")
                arrSportsGrand = arrSportsGrand.filter(item => item.뱃지2 !=="" && item.뱃지3 !== "")
            }
            else if(delivery){
                arrSportsAbc = arrSportsAbc.filter(item => item.뱃지3 !== "")
                arrSportsGrand = arrSportsGrand.filter(item => item.뱃지3 !== "")
            }
            else if(pickup){
                arrSportsAbc = arrSportsAbc.filter(item => item.뱃지2 !== "")
                arrSportsGrand = arrSportsGrand.filter(item => item.뱃지2 !== "")
            }
        }
        else if(sale){
            arrSportsAbc = arrSportsAbc.filter(item => item.할인율 !==0 )
            arrSportsGrand = arrSportsGrand.filter(item => item.할인율 !== 0)
            if(delivery && pickup){
                arrSportsAbc = arrSportsAbc.filter(item => item.뱃지2 !=="" && item.뱃지3 !== "")
                arrSportsGrand = arrSportsGrand.filter(item => item.뱃지2 !=="" && item.뱃지3 !== "")
            }
            else if(delivery){
                arrSportsAbc = arrSportsAbc.filter(item => item.뱃지3 !== "")
                arrSportsGrand = arrSportsGrand.filter(item => item.뱃지3 !== "")
            }
            else if(pickup){
                arrSportsAbc = arrSportsAbc.filter(item => item.뱃지2 !== "")
                arrSportsGrand = arrSportsGrand.filter(item => item.뱃지2 !== "")
            }
        }
        

        setSortAbcSports(arrSportsAbc);
        setSortGrandSports(arrSportsGrand);
    },[state.스포츠ABC, state.스포츠GRAND, running1,running2,running3, sale, delivery, pickup])

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
        }
   
        console.log(item);
        setViewProductDetail(obj);
       window.location.pathname='/PRODUCTDETAIL';
    }

    return (
        <main id='product'>
            <div className="container">
                <div className="gap">
                    <div className={`left ${leftbox?'on':''}`}>
                        <div className="left-container">
                            <div className="left-header">
                                <h2>FILTER</h2>
                                <button onClick={onClickLeftbox}><span><img src="./img/product/btn_icon_filter_onoff.png" alt="" /></span></button>
                            </div>
                            <dl>
                                <dt onClick={()=>onClickOn('브랜드')} className={filter['브랜드']?"on":""}>브랜드<span><img src="./img/brand/icon_down.png" alt="" /></span></dt>
                                <dd className={filter['브랜드']?"on":""}>
                                    <ul>
                                        <li className='category-li'>
                                            <span>A</span>
                                            <label htmlFor="brandADIDAS">
                                                ADIDAS
                                                <input onChange={()=>onChangeCategory('brandADIDAS')} checked={category==='brandADIDAS'} type="radio" name='checkCategory' id='brandADIDAS'  />
                                            </label>
                                        </li>
                                        <li className='category-li'>
                                            <span>C</span>
                                            <label htmlFor="brandCONVERSE">
                                                CONVERSE
                                                <input onChange={()=>onChangeCategory('brandCONVERSE')} checked={category==='brandCONVERSE'} type="radio" name='checkCategory' id='brandCONVERSE'  />
                                            </label>
                                        </li>
                                        <li className='category-li'>
                                            <span>N</span>
                                            <label htmlFor="brandNIKE">
                                                NIKE
                                                <input onChange={()=>onChangeCategory('brandNIKE')} checked={category==='brandNIKE'} type="radio" name='checkCategory' id='brandNIKE'  />
                                            </label>
                                            <label htmlFor="brandNEWBALANCE">
                                                NEWBALANCE
                                                <input onChange={()=>onChangeCategory('brandNEWBALANCE')} checked={category==='brandNEWBALANCE'} type="radio" name='checkCategory' id='brandNEWBALANCE'/>
                                            </label>
                                        </li>
                                        <li className='category-li'>
                                            <span>V</span>
                                            <label htmlFor="brandVANS">
                                                VANS
                                                <input onChange={()=>onChangeCategory('brandVANS')} checked={category==='brandVANS'} type="radio" name='checkCategory' id='brandVANS'  />
                                            </label>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt onClick={()=>onClickOn('사이즈')} className={filter['사이즈']?"on":""}>사이즈<span><img src="./img/brand/icon_down.png" alt="" /></span></dt>
                                <dd className={filter['사이즈']?"on":""}>
                                    <ul>
                                        <li className='size-li'>
                                            <input type="checkbox" name='size120' id='size120' />
                                            <label htmlFor="size120">120</label>
                                        </li>
                                        <li className='size-li'>
                                            <input type="checkbox" name='size130' id='size130' />
                                            <label htmlFor="size130">130</label>
                                        </li>
                                        <li className='size-li'>
                                            <input type="checkbox" name='size140' id='size140' />
                                            <label htmlFor="size140">140</label>
                                        </li>
                                        <li className='size-li'>
                                            <input type="checkbox" name='size150' id='size150' />
                                            <label htmlFor="size150">150</label>
                                        </li>
                                        <li className='size-li'>
                                            <input type="checkbox" name='size160' id='size160' />
                                            <label htmlFor="size160">160</label>
                                        </li>
                                        <li className='size-li'>
                                            <input type="checkbox" name='size170' id='size170' />
                                            <label htmlFor="size170">170</label>
                                        </li>
                                        <li className='size-li'>
                                            <input type="checkbox" name='size180' id='size180' />
                                            <label htmlFor="size180">180</label>
                                        </li>
                                        <li className='size-li'>
                                            <input type="checkbox" name='size190' id='size190' />
                                            <label htmlFor="size190">190</label>
                                        </li>
                                        <li className='size-li'>
                                            <input type="checkbox" name='size200' id='size200' />
                                            <label htmlFor="size200">200</label>
                                        </li>
                                        <li className='size-li'>
                                            <input type="checkbox" name='size210' id='size210' />
                                            <label htmlFor="size210">210</label>
                                        </li>
                                        <li className='size-li'>
                                            <input type="checkbox" name='size215' id='size215' />
                                            <label htmlFor="size215">215</label>
                                        </li>
                                        <li className='size-li'>
                                            <input type="checkbox" name='size220' id='size220' />
                                            <label htmlFor="size220">220</label>
                                        </li>
                                        <li className='size-li'>
                                            <input type="checkbox" name='size225' id='size225' />
                                            <label htmlFor="size225">225</label>
                                        </li>
                                        <li className='size-li'>
                                            <input type="checkbox" name='size230' id='size230' />
                                            <label htmlFor="size230">230</label>
                                        </li>
                                        <li className='size-li'>
                                            <input type="checkbox" name='size235' id='size235' />
                                            <label htmlFor="size235">235</label>
                                        </li>
                                        <li className='size-li'>
                                            <input type="checkbox" name='size240' id='size240' />
                                            <label htmlFor="size240">240</label>
                                        </li>
                                        <li className='size-li'>
                                            <input type="checkbox" name='size245' id='size245' />
                                            <label htmlFor="size245">245</label>
                                        </li>
                                        <li className='size-li'>
                                            <input type="checkbox" name='size250' id='size250' />
                                            <label htmlFor="size250">250</label>
                                        </li>
                                        <li className='size-li'>
                                            <input type="checkbox" name='size255' id='size255' />
                                            <label htmlFor="size255">255</label>
                                        </li>
                                        <li className='size-li'>
                                            <input type="checkbox" name='size260' id='size260' />
                                            <label htmlFor="size260">260</label>
                                        </li>
                                        <li className='size-li'>
                                            <input type="checkbox" name='size265' id='size265' />
                                            <label htmlFor="size265">265</label>
                                        </li>
                                        <li className='size-li'>
                                            <input type="checkbox" name='size270' id='size270' />
                                            <label htmlFor="size270">270</label>
                                        </li>
                                        <li className='size-li'>
                                            <input type="checkbox" name='size275' id='size275' />
                                            <label htmlFor="size275">275</label>
                                        </li>
                                        <li className='size-li'>
                                            <input type="checkbox" name='size280' id='size280' />
                                            <label htmlFor="size280">280</label>
                                        </li>
                                        <li className='size-li'>
                                            <input type="checkbox" name='size285' id='size285' />
                                            <label htmlFor="size285">285</label>
                                        </li>
                                        <li className='size-li'>
                                            <input type="checkbox" name='size290' id='size290' />
                                            <label htmlFor="size290">290</label>
                                        </li>
                                        <li className='size-li'>
                                            <input type="checkbox" name='size295' id='size295' />
                                            <label htmlFor="size295">295</label>
                                        </li>
                                        <li className='size-li'>
                                            <input type="checkbox" name='size300' id='size300' />
                                            <label htmlFor="size300">300</label>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt onClick={()=>onClickOn('색상')} className={filter['색상']?"on":""}>색상<span><img src="./img/brand/icon_down.png" alt="" /></span></dt>
                                <dd className={filter['색상']?"on":""}>
                                    <ul>
                                        <li className='color-li'>                                                
                                            <label htmlFor="white">
                                                <input type="checkbox" name='white' id='white' />
                                            </label>
                                        </li>
                                        <li className='color-li'>                                                
                                            <label htmlFor="black">
                                                <input type="checkbox" name='black' id='black' />
                                            </label>
                                        </li>
                                        <li className='color-li'>                                                
                                            <label htmlFor="color">
                                                <input type="checkbox" name='color' id='color' />
                                            </label>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                            <dl>
                                <dt onClick={()=>onClickOn('가격')} className={filter['가격']?"on":""}>가격<span><img src="./img/brand/icon_down.png" alt="" /></span></dt>
                                <dd className={filter['가격']?"on":""}>
                                    <ul>
                                        <li className='price-li'>
                                            
                                            <input id='price1' type="checkbox"/>
                                            
                                            <label htmlFor="price1"> ~ 10,000원</label>
                                        </li>
                                        <li className='price-li'>
                                            <input id='price2' type="checkbox"/>
                                            <label htmlFor="price2">~ 50,000원 </label>
                                        </li>
                                        <li className='price-li'>
                                            <input id='price3' type="checkbox"/>
                                            <label htmlFor="price3">~ 100,000원 </label>
                                        </li>
                                        <li className='price-li'>
                                            <input id='price4' type="checkbox"/>
                                            <label htmlFor="price4">~ 150,000원 </label>
                                        </li>
                                        <li className='price-li'>
                                            <input id='price5' type="checkbox"/>
                                            <label htmlFor="price5">~ 200,000원 </label>
                                        </li>
                                        <li className='price-li'>
                                            <input id='price6' type="checkbox"/>
                                            <label htmlFor="price6">~ 250,000원 </label>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                            <div className="left-bottom">
                                <ul>
                                    <li><button onClick={onClickFilter} title='초기화'>초기화</button></li>
                                    <li><button>검색</button></li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                    <div className={`left-hidden ${leftbox?'':'on'}`}>
                        <div className="left-hidden-container">
                            <figure><img src="./img/product/comm_icon_filter.png" alt="" /></figure>
                            <h3>FILTER</h3>
                            <button onClick={onClickLeftbox}><span><img src="./img/product/btn_icon_filter_onoff.png" alt="" /></span></button>
                        </div>                        
                    </div>
                    {running1 &&
                        <>
                        {abcGrand?
                            (
                            <div className="right">
                                <div className="title">
                                    <div className="row1">
                                        <ul>
                                            <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">HOME</a></li>
                                            <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">MEN</a></li>
                                            <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">스포츠</a></li>
                                            <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">런닝화</a></li>
                                        </ul>
                                    </div>
                                    <div className="row2">
                                        <h1>런닝화</h1>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="abc-grand">
                                        <button onClick={abcChange} className={`${abcGrand?'on':''}`}><figure><img src="./img/brand/bg_channel_sel.png" alt="" /></figure>({sortAbcSports.length})</button>
                                        <button onClick={grandChange} className={`${abcGrand?'':'on'}`}><figure><img src="./img/brand/bg_channel_sel.png" alt="" /></figure>({sortGrandSports.length})</button>
                                    </div>
                                    <div className="sortbar">
                                        <ul>
                                            <li>
                                                <label htmlFor="delivery"><input onChange={onChangeOrder} id='delivery' type="checkbox" value={'delivery'} checked={delivery}/><img src="./img/brand/filter_chk_art_delivery.png" alt="" /></label>
                                                <label htmlFor="pickup"><input onChange={onChangeOrder} id='pickup' type="checkbox" value={'pickup'} checked={pickup}/>매장픽업</label>
                                                
                                            </li>
                                            <li>
                                                <div className="select-box">
                                                    <input onClick={onClickBox} type="text"  value={sort} readOnly/>
                                                    <span className={`${sortBox?'on':''}`}><img src="./img/brand/select_icon_arrow_down.png" alt="" /></span>
                                                    <dl className={`${sortBox?'on':''}`}>
                                                        <dd className={`${sort==='신상품순'?'on':''}`} onClick={()=>onClickSort('신상품순')}>신상품순</dd>
                                                        <dd className={`${sort==='낮은가격순'?'on':''}`} onClick={()=>onClickSort('낮은가격순')}>낮은가격순</dd>
                                                        <dd className={`${sort==='높은가격순'?'on':''}`} onClick={()=>onClickSort('높은가격순')}>높은가격순</dd>
                                                        <dd className={`${sort==='할인율 높은순'?'on':''}`} onClick={()=>onClickSort('할인율 높은순')}>할인율 상품순</dd>
                                                        <dd className={`${sort==='베스트상품순'?'on':''}`} onClick={()=>onClickSort('베스트상품순')}>베스트상품순</dd>                                                
                                                        <dd className={`${sort==='상품평순'?'on':''}`} onClick={()=>onClickSort('상품평순')}>상품평순</dd>
                                                    </dl>
                                                </div>
                                                <div className="radio-box">
                                                    <input title='3열 보기' onChange={onChangeZoom} type="radio" name='zoom' className='zoomOut' checked={!zoom} value={'zoomOut'}/>
                                                    <input title='2열 보기' onChange={onChangeZoom} type="radio" name='zoom' className='zoomIn'  checked={zoom} value={'zoomIn'}/>
                                                </div>                                        
                                            </li>
                                        </ul>
                                    </div>                            
                                    <div className={`sortbar-inner ${delivery||pickup?'on':''}`}>
                                        <ul>
                                            <li>
                                                {delivery &&<button className='inner-btn1'onClick={onClickDeliveryDel}>아트배송<img src="./img/brand/btn_icon_filter_icon_del.png" alt="" /></button>}
                                                {pickup &&<button className='inner-btn1'onClick={onClickPickupDel}>매장픽업<img src="./img/brand/btn_icon_filter_icon_del.png" alt="" /></button>}
                                            </li>
                                            <li>{(delivery||pickup) && <button className='inner-btn2'onClick={onClickAllDel}><img src="./img/brand/btn_icon_filter_icon_reset.png" alt="" />전체삭제</button>}</li>
                                        </ul>
                                    </div>
                                    <div className="products">
                                    <>
                                        {
                                            !zoom?
                                            (
                                                <>
                                                <p>총 <strong>{sortAbcSports.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    { (sortAbcSports).map((item,idx)=>{
                                                        if( Math.ceil((idx+1)/list) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} d_key={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>                                                                
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>} 
                                                                            {(item.할인율)!==0 && 
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{Math.round(item.할인율*100)}%]</em></strong>
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
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortAbcSports.length/list)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortAbcSports.length/list/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        :
                                            (
                                                <>
                                                <p>총 <strong>{sortAbcSports.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    {sortAbcSports.map((item,idx)=>{                                                
                                                        if( Math.ceil((idx+1)/zoomInList) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} d_key={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                            {(item.할인율)!==0 &&
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{Math.round(item.할인율*100)}%]</em></strong>
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
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortAbcSports.length/zoomInList)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortAbcSports.length/zoomInList/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        }  
                                        </> 
                                    </div>
                                </div>
                            </div> 
                            )
                        :
                            (
                            <div className="right">
                                <div className="title">
                                    <div className="row1">
                                        <ul>
                                            <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">HOME</a></li>
                                            <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">MEN</a></li>
                                            <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">스포츠</a></li>
                                            <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">런닝화</a></li>
                                        </ul>
                                    </div>
                                    <div className="row2">
                                        <h1>런닝화</h1>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="abc-grand">
                                        <button onClick={abcChange} className={`${abcGrand?'on':''}`}><figure><img src="./img/brand/bg_channel_sel.png" alt="" /></figure>({sortAbcSports.length})</button>
                                        <button onClick={grandChange} className={`${abcGrand?'':'on'}`}><figure><img src="./img/brand/bg_channel_sel.png" alt="" /></figure>({sortGrandSports.length})</button>
                                    </div>
                                    <div className="sortbar">
                                        <ul>
                                            <li>
                                                <label htmlFor="delivery"><input onChange={onChangeOrder} id='delivery' type="checkbox" value={'delivery'} checked={delivery}/><img src="./img/brand/filter_chk_art_delivery.png" alt="" /></label>
                                                <label htmlFor="pickup"><input onChange={onChangeOrder} id='pickup' type="checkbox" value={'pickup'} checked={pickup}/>매장픽업</label>
                                                
                                            </li>
                                            <li>
                                                <div className="select-box">
                                                    <input onClick={onClickBox} type="text"  value={sort} readOnly/>
                                                    <span className={`${sortBox?'on':''}`}><img src="./img/brand/select_icon_arrow_down.png" alt="" /></span>
                                                    <dl className={`${sortBox?'on':''}`}>
                                                        <dd className={`${sort==='신상품순'?'on':''}`} onClick={()=>onClickSort('신상품순')}>신상품순</dd>
                                                        <dd className={`${sort==='낮은가격순'?'on':''}`} onClick={()=>onClickSort('낮은가격순')}>낮은가격순</dd>
                                                        <dd className={`${sort==='높은가격순'?'on':''}`} onClick={()=>onClickSort('높은가격순')}>높은가격순</dd>
                                                        <dd className={`${sort==='할인율 높은순'?'on':''}`} onClick={()=>onClickSort('할인율 높은순')}>할인율 상품순</dd>
                                                        <dd className={`${sort==='베스트상품순'?'on':''}`} onClick={()=>onClickSort('베스트상품순')}>베스트상품순</dd>                                                
                                                        <dd className={`${sort==='상품평순'?'on':''}`} onClick={()=>onClickSort('상품평순')}>상품평순</dd>
                                                    </dl>
                                                </div>
                                                <div className="radio-box">
                                                    <input title='3열 보기' onChange={onChangeZoom} type="radio" name='zoom' className='zoomOut' checked={!zoom} value={'zoomOut'}/>
                                                    <input title='2열 보기' onChange={onChangeZoom} type="radio" name='zoom' className='zoomIn'  checked={zoom} value={'zoomIn'}/>
                                                </div>                                        
                                            </li>
                                        </ul>
                                    </div>                            
                                    <div className={`sortbar-inner ${delivery||pickup?'on':''}`}>
                                        <ul>
                                            <li>
                                                {delivery &&<button className='inner-btn1'onClick={onClickDeliveryDel}>아트배송<img src="./img/brand/btn_icon_filter_icon_del.png" alt="" /></button>}
                                                {pickup &&<button className='inner-btn1'onClick={onClickPickupDel}>매장픽업<img src="./img/brand/btn_icon_filter_icon_del.png" alt="" /></button>}
                                            </li>
                                            <li>{(delivery||pickup) && <button className='inner-btn2'onClick={onClickAllDel}><img src="./img/brand/btn_icon_filter_icon_reset.png" alt="" />전체삭제</button>}</li>
                                        </ul>
                                    </div>
                                    <div className="products">
                                    <>
                                        {
                                            !zoom?
                                            (
                                                <>
                                                <p>총 <strong>{sortGrandSports.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    { (sortGrandSports).map((item,idx)=>{
                                                        if( Math.ceil((idx+1)/list) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} d_key={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>                                                                
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>} 
                                                                            {(item.할인율)!==0 && 
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{Math.round(item.할인율*100)}%]</em></strong>
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
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortGrandSports.length/list)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortGrandSports.length/list/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        :
                                            (
                                                <>
                                                <p>총 <strong>{sortGrandSports.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    {sortGrandSports.map((item,idx)=>{                                                
                                                        if( Math.ceil((idx+1)/zoomInList) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} d_key={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                            {(item.할인율)!==0 &&
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{Math.round(item.할인율*100)}%]</em></strong>
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
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortGrandSports.length/zoomInList)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortGrandSports.length/zoomInList/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        }  
                                        </> 
                                    </div>
                                </div>
                            </div> 
                            )
                        }
                        </>
                    }                                       
                    {running2 &&
                        <>
                        {abcGrand?
                            (
                            <div className="right">
                                <div className="title">
                                    <div className="row1">
                                        <ul>
                                            <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">HOME</a></li>
                                            <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">WOMEN</a></li>
                                            <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">스포츠</a></li>
                                            <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">런닝화</a></li>
                                        </ul>
                                    </div>
                                    <div className="row2">
                                        <h1>런닝화</h1>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="abc-grand">
                                        <button onClick={abcChange} className={`${abcGrand?'on':''}`}><figure><img src="./img/brand/bg_channel_sel.png" alt="" /></figure>({sortAbcSports.length})</button>
                                        <button onClick={grandChange} className={`${abcGrand?'':'on'}`}><figure><img src="./img/brand/bg_channel_sel.png" alt="" /></figure>({sortGrandSports.length})</button>
                                    </div>
                                    <div className="sortbar">
                                        <ul>
                                            <li>
                                                <label htmlFor="delivery"><input onChange={onChangeOrder} id='delivery' type="checkbox" value={'delivery'} checked={delivery}/><img src="./img/brand/filter_chk_art_delivery.png" alt="" /></label>
                                                <label htmlFor="pickup"><input onChange={onChangeOrder} id='pickup' type="checkbox" value={'pickup'} checked={pickup}/>매장픽업</label>
                                                
                                            </li>
                                            <li>
                                                <div className="select-box">
                                                    <input onClick={onClickBox} type="text"  value={sort} readOnly/>
                                                    <span className={`${sortBox?'on':''}`}><img src="./img/brand/select_icon_arrow_down.png" alt="" /></span>
                                                    <dl className={`${sortBox?'on':''}`}>
                                                        <dd className={`${sort==='신상품순'?'on':''}`} onClick={()=>onClickSort('신상품순')}>신상품순</dd>
                                                        <dd className={`${sort==='낮은가격순'?'on':''}`} onClick={()=>onClickSort('낮은가격순')}>낮은가격순</dd>
                                                        <dd className={`${sort==='높은가격순'?'on':''}`} onClick={()=>onClickSort('높은가격순')}>높은가격순</dd>
                                                        <dd className={`${sort==='할인율 높은순'?'on':''}`} onClick={()=>onClickSort('할인율 높은순')}>할인율 상품순</dd>
                                                        <dd className={`${sort==='베스트상품순'?'on':''}`} onClick={()=>onClickSort('베스트상품순')}>베스트상품순</dd>                                                
                                                        <dd className={`${sort==='상품평순'?'on':''}`} onClick={()=>onClickSort('상품평순')}>상품평순</dd>
                                                    </dl>
                                                </div>
                                                <div className="radio-box">
                                                    <input title='3열 보기' onChange={onChangeZoom} type="radio" name='zoom' className='zoomOut' checked={!zoom} value={'zoomOut'}/>
                                                    <input title='2열 보기' onChange={onChangeZoom} type="radio" name='zoom' className='zoomIn'  checked={zoom} value={'zoomIn'}/>
                                                </div>                                        
                                            </li>
                                        </ul>
                                    </div>                            
                                    <div className={`sortbar-inner ${delivery||pickup?'on':''}`}>
                                        <ul>
                                            <li>
                                                {delivery &&<button className='inner-btn1'onClick={onClickDeliveryDel}>아트배송<img src="./img/brand/btn_icon_filter_icon_del.png" alt="" /></button>}
                                                {pickup &&<button className='inner-btn1'onClick={onClickPickupDel}>매장픽업<img src="./img/brand/btn_icon_filter_icon_del.png" alt="" /></button>}
                                            </li>
                                            <li>{(delivery||pickup) && <button className='inner-btn2'onClick={onClickAllDel}><img src="./img/brand/btn_icon_filter_icon_reset.png" alt="" />전체삭제</button>}</li>
                                        </ul>
                                    </div>
                                    <div className="products">
                                    <>
                                        {
                                            !zoom?
                                            (
                                                <>
                                                <p>총 <strong>{sortAbcSports.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    { (sortAbcSports).map((item,idx)=>{
                                                        if( Math.ceil((idx+1)/list) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} d_key={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>                                                                
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>} 
                                                                            {(item.할인율)!==0 && 
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{Math.round(item.할인율*100)}%]</em></strong>
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
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortAbcSports.length/list)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortAbcSports.length/list/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        :
                                            (
                                                <>
                                                <p>총 <strong>{sortAbcSports.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    {sortAbcSports.map((item,idx)=>{                                                
                                                        if( Math.ceil((idx+1)/zoomInList) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} d_key={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                            {(item.할인율)!==0 &&
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{Math.round(item.할인율*100)}%]</em></strong>
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
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortAbcSports.length/zoomInList)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortAbcSports.length/zoomInList/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        }  
                                        </> 
                                    </div>
                                </div>
                            </div> 
                            )
                        :
                            (
                            <div className="right">
                                <div className="title">
                                    <div className="row1">
                                        <ul>
                                            <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">HOME</a></li>
                                            <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">MEN</a></li>
                                            <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">스포츠</a></li>
                                            <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">런닝화</a></li>
                                        </ul>
                                    </div>
                                    <div className="row2">
                                        <h1>런닝화</h1>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="abc-grand">
                                        <button onClick={abcChange} className={`${abcGrand?'on':''}`}><figure><img src="./img/brand/bg_channel_sel.png" alt="" /></figure>({sortAbcSports.length})</button>
                                        <button onClick={grandChange} className={`${abcGrand?'':'on'}`}><figure><img src="./img/brand/bg_channel_sel.png" alt="" /></figure>({sortGrandSports.length})</button>
                                    </div>
                                    <div className="sortbar">
                                        <ul>
                                            <li>
                                                <label htmlFor="delivery"><input onChange={onChangeOrder} id='delivery' type="checkbox" value={'delivery'} checked={delivery}/><img src="./img/brand/filter_chk_art_delivery.png" alt="" /></label>
                                                <label htmlFor="pickup"><input onChange={onChangeOrder} id='pickup' type="checkbox" value={'pickup'} checked={pickup}/>매장픽업</label>
                                                
                                            </li>
                                            <li>
                                                <div className="select-box">
                                                    <input onClick={onClickBox} type="text"  value={sort} readOnly/>
                                                    <span className={`${sortBox?'on':''}`}><img src="./img/brand/select_icon_arrow_down.png" alt="" /></span>
                                                    <dl className={`${sortBox?'on':''}`}>
                                                        <dd className={`${sort==='신상품순'?'on':''}`} onClick={()=>onClickSort('신상품순')}>신상품순</dd>
                                                        <dd className={`${sort==='낮은가격순'?'on':''}`} onClick={()=>onClickSort('낮은가격순')}>낮은가격순</dd>
                                                        <dd className={`${sort==='높은가격순'?'on':''}`} onClick={()=>onClickSort('높은가격순')}>높은가격순</dd>
                                                        <dd className={`${sort==='할인율 높은순'?'on':''}`} onClick={()=>onClickSort('할인율 높은순')}>할인율 상품순</dd>
                                                        <dd className={`${sort==='베스트상품순'?'on':''}`} onClick={()=>onClickSort('베스트상품순')}>베스트상품순</dd>                                                
                                                        <dd className={`${sort==='상품평순'?'on':''}`} onClick={()=>onClickSort('상품평순')}>상품평순</dd>
                                                    </dl>
                                                </div>
                                                <div className="radio-box">
                                                    <input title='3열 보기' onChange={onChangeZoom} type="radio" name='zoom' className='zoomOut' checked={!zoom} value={'zoomOut'}/>
                                                    <input title='2열 보기' onChange={onChangeZoom} type="radio" name='zoom' className='zoomIn'  checked={zoom} value={'zoomIn'}/>
                                                </div>                                        
                                            </li>
                                        </ul>
                                    </div>                            
                                    <div className={`sortbar-inner ${delivery||pickup?'on':''}`}>
                                        <ul>
                                            <li>
                                                {delivery &&<button className='inner-btn1'onClick={onClickDeliveryDel}>아트배송<img src="./img/brand/btn_icon_filter_icon_del.png" alt="" /></button>}
                                                {pickup &&<button className='inner-btn1'onClick={onClickPickupDel}>매장픽업<img src="./img/brand/btn_icon_filter_icon_del.png" alt="" /></button>}
                                            </li>
                                            <li>{(delivery||pickup) && <button className='inner-btn2'onClick={onClickAllDel}><img src="./img/brand/btn_icon_filter_icon_reset.png" alt="" />전체삭제</button>}</li>
                                        </ul>
                                    </div>
                                    <div className="products">
                                    <>
                                        {
                                            !zoom?
                                            (
                                                <>
                                                <p>총 <strong>{sortGrandSports.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    { (sortGrandSports).map((item,idx)=>{
                                                        if( Math.ceil((idx+1)/list) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} d_key={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>                                                                
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>} 
                                                                            {(item.할인율)!==0 && 
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{Math.round(item.할인율*100)}%]</em></strong>
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
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortGrandSports.length/list)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortGrandSports.length/list/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        :
                                            (
                                                <>
                                                <p>총 <strong>{sortGrandSports.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    {sortGrandSports.map((item,idx)=>{                                                
                                                        if( Math.ceil((idx+1)/zoomInList) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} d_key={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                            {(item.할인율)!==0 &&
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{Math.round(item.할인율*100)}%]</em></strong>
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
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortGrandSports.length/zoomInList)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortGrandSports.length/zoomInList/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        }  
                                        </> 
                                    </div>
                                </div>
                            </div> 
                            )
                        }
                        </>
                    }                                       
                    {running3 &&
                        <>
                        {abcGrand?
                            (
                            <div className="right">
                                <div className="title">
                                    <div className="row1">
                                        <ul>
                                            <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">HOME</a></li>
                                            <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">KIDS</a></li>
                                            <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">스포츠</a></li>
                                            <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">런닝화</a></li>
                                        </ul>
                                    </div>
                                    <div className="row2">
                                        <h1>런닝화</h1>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="abc-grand">
                                        <button onClick={abcChange} className={`${abcGrand?'on':''}`}><figure><img src="./img/brand/bg_channel_sel.png" alt="" /></figure>({sortAbcSports.length})</button>
                                        <button onClick={grandChange} className={`${abcGrand?'':'on'}`}><figure><img src="./img/brand/bg_channel_sel.png" alt="" /></figure>({sortGrandSports.length})</button>
                                    </div>
                                    <div className="sortbar">
                                        <ul>
                                            <li>
                                                <label htmlFor="delivery"><input onChange={onChangeOrder} id='delivery' type="checkbox" value={'delivery'} checked={delivery}/><img src="./img/brand/filter_chk_art_delivery.png" alt="" /></label>
                                                <label htmlFor="pickup"><input onChange={onChangeOrder} id='pickup' type="checkbox" value={'pickup'} checked={pickup}/>매장픽업</label>
                                                
                                            </li>
                                            <li>
                                                <div className="select-box">
                                                    <input onClick={onClickBox} type="text"  value={sort} readOnly/>
                                                    <span className={`${sortBox?'on':''}`}><img src="./img/brand/select_icon_arrow_down.png" alt="" /></span>
                                                    <dl className={`${sortBox?'on':''}`}>
                                                        <dd className={`${sort==='신상품순'?'on':''}`} onClick={()=>onClickSort('신상품순')}>신상품순</dd>
                                                        <dd className={`${sort==='낮은가격순'?'on':''}`} onClick={()=>onClickSort('낮은가격순')}>낮은가격순</dd>
                                                        <dd className={`${sort==='높은가격순'?'on':''}`} onClick={()=>onClickSort('높은가격순')}>높은가격순</dd>
                                                        <dd className={`${sort==='할인율 높은순'?'on':''}`} onClick={()=>onClickSort('할인율 높은순')}>할인율 상품순</dd>
                                                        <dd className={`${sort==='베스트상품순'?'on':''}`} onClick={()=>onClickSort('베스트상품순')}>베스트상품순</dd>                                                
                                                        <dd className={`${sort==='상품평순'?'on':''}`} onClick={()=>onClickSort('상품평순')}>상품평순</dd>
                                                    </dl>
                                                </div>
                                                <div className="radio-box">
                                                    <input title='3열 보기' onChange={onChangeZoom} type="radio" name='zoom' className='zoomOut' checked={!zoom} value={'zoomOut'}/>
                                                    <input title='2열 보기' onChange={onChangeZoom} type="radio" name='zoom' className='zoomIn'  checked={zoom} value={'zoomIn'}/>
                                                </div>                                        
                                            </li>
                                        </ul>
                                    </div>                            
                                    <div className={`sortbar-inner ${delivery||pickup?'on':''}`}>
                                        <ul>
                                            <li>
                                                {delivery &&<button className='inner-btn1'onClick={onClickDeliveryDel}>아트배송<img src="./img/brand/btn_icon_filter_icon_del.png" alt="" /></button>}
                                                {pickup &&<button className='inner-btn1'onClick={onClickPickupDel}>매장픽업<img src="./img/brand/btn_icon_filter_icon_del.png" alt="" /></button>}
                                            </li>
                                            <li>{(delivery||pickup) && <button className='inner-btn2'onClick={onClickAllDel}><img src="./img/brand/btn_icon_filter_icon_reset.png" alt="" />전체삭제</button>}</li>
                                        </ul>
                                    </div>
                                    <div className="products">
                                    <>
                                        {
                                            !zoom?
                                            (
                                                <>
                                                <p>총 <strong>{sortAbcSports.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    { (sortAbcSports).map((item,idx)=>{
                                                        if( Math.ceil((idx+1)/list) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} d_key={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>                                                                
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>} 
                                                                            {(item.할인율)!==0 && 
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{Math.round(item.할인율*100)}%]</em></strong>
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
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortAbcSports.length/list)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortAbcSports.length/list/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        :
                                            (
                                                <>
                                                <p>총 <strong>{sortAbcSports.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    {sortAbcSports.map((item,idx)=>{                                                
                                                        if( Math.ceil((idx+1)/zoomInList) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} d_key={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                            {(item.할인율)!==0 &&
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{Math.round(item.할인율*100)}%]</em></strong>
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
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortAbcSports.length/zoomInList)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortAbcSports.length/zoomInList/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        }  
                                        </> 
                                    </div>
                                </div>
                            </div> 
                            )
                        :
                            (
                            <div className="right">
                                <div className="title">
                                    <div className="row1">
                                        <ul>
                                            <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">HOME</a></li>
                                            <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">MEN</a></li>
                                            <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">스포츠</a></li>
                                            <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">런닝화</a></li>
                                        </ul>
                                    </div>
                                    <div className="row2">
                                        <h1>런닝화</h1>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="abc-grand">
                                        <button onClick={abcChange} className={`${abcGrand?'on':''}`}><figure><img src="./img/brand/bg_channel_sel.png" alt="" /></figure>({sortAbcSports.length})</button>
                                        <button onClick={grandChange} className={`${abcGrand?'':'on'}`}><figure><img src="./img/brand/bg_channel_sel.png" alt="" /></figure>({sortGrandSports.length})</button>
                                    </div>
                                    <div className="sortbar">
                                        <ul>
                                            <li>
                                                <label htmlFor="delivery"><input onChange={onChangeOrder} id='delivery' type="checkbox" value={'delivery'} checked={delivery}/><img src="./img/brand/filter_chk_art_delivery.png" alt="" /></label>
                                                <label htmlFor="pickup"><input onChange={onChangeOrder} id='pickup' type="checkbox" value={'pickup'} checked={pickup}/>매장픽업</label>
                                                
                                            </li>
                                            <li>
                                                <div className="select-box">
                                                    <input onClick={onClickBox} type="text"  value={sort} readOnly/>
                                                    <span className={`${sortBox?'on':''}`}><img src="./img/brand/select_icon_arrow_down.png" alt="" /></span>
                                                    <dl className={`${sortBox?'on':''}`}>
                                                        <dd className={`${sort==='신상품순'?'on':''}`} onClick={()=>onClickSort('신상품순')}>신상품순</dd>
                                                        <dd className={`${sort==='낮은가격순'?'on':''}`} onClick={()=>onClickSort('낮은가격순')}>낮은가격순</dd>
                                                        <dd className={`${sort==='높은가격순'?'on':''}`} onClick={()=>onClickSort('높은가격순')}>높은가격순</dd>
                                                        <dd className={`${sort==='할인율 높은순'?'on':''}`} onClick={()=>onClickSort('할인율 높은순')}>할인율 상품순</dd>
                                                        <dd className={`${sort==='베스트상품순'?'on':''}`} onClick={()=>onClickSort('베스트상품순')}>베스트상품순</dd>                                                
                                                        <dd className={`${sort==='상품평순'?'on':''}`} onClick={()=>onClickSort('상품평순')}>상품평순</dd>
                                                    </dl>
                                                </div>
                                                <div className="radio-box">
                                                    <input title='3열 보기' onChange={onChangeZoom} type="radio" name='zoom' className='zoomOut' checked={!zoom} value={'zoomOut'}/>
                                                    <input title='2열 보기' onChange={onChangeZoom} type="radio" name='zoom' className='zoomIn'  checked={zoom} value={'zoomIn'}/>
                                                </div>                                        
                                            </li>
                                        </ul>
                                    </div>                            
                                    <div className={`sortbar-inner ${delivery||pickup?'on':''}`}>
                                        <ul>
                                            <li>
                                                {delivery &&<button className='inner-btn1'onClick={onClickDeliveryDel}>아트배송<img src="./img/brand/btn_icon_filter_icon_del.png" alt="" /></button>}
                                                {pickup &&<button className='inner-btn1'onClick={onClickPickupDel}>매장픽업<img src="./img/brand/btn_icon_filter_icon_del.png" alt="" /></button>}
                                            </li>
                                            <li>{(delivery||pickup) && <button className='inner-btn2'onClick={onClickAllDel}><img src="./img/brand/btn_icon_filter_icon_reset.png" alt="" />전체삭제</button>}</li>
                                        </ul>
                                    </div>
                                    <div className="products">
                                    <>
                                        {
                                            !zoom?
                                            (
                                                <>
                                                <p>총 <strong>{sortGrandSports.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    { (sortGrandSports).map((item,idx)=>{
                                                        if( Math.ceil((idx+1)/list) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} d_key={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>                                                                
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>} 
                                                                            {(item.할인율)!==0 && 
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{Math.round(item.할인율*100)}%]</em></strong>
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
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortGrandSports.length/list)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortGrandSports.length/list/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        :
                                            (
                                                <>
                                                <p>총 <strong>{sortGrandSports.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    {sortGrandSports.map((item,idx)=>{                                                
                                                        if( Math.ceil((idx+1)/zoomInList) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} d_key={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                            {(item.할인율)!==0 &&
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{Math.round(item.할인율*100)}%]</em></strong>
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
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortGrandSports.length/zoomInList)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortGrandSports.length/zoomInList/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        }  
                                        </> 
                                    </div>
                                </div>
                            </div> 
                            )
                        }
                        </>
                    }                                       
                    {sale &&
                        <>
                        {abcGrand?
                            (
                            <div className="right">
                                <div className="title">
                                    <div className="row1">
                                        <ul>
                                            <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">HOME</a></li>
                                            <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">SALE</a></li>
                                        </ul>
                                    </div>
                                    <div className="row2">
                                        <h1>SALE</h1>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="abc-grand">
                                        <button onClick={abcChange} className={`${abcGrand?'on':''}`}><figure><img src="./img/brand/bg_channel_sel.png" alt="" /></figure>({sortAbcSports.length})</button>
                                        <button onClick={grandChange} className={`${abcGrand?'':'on'}`}><figure><img src="./img/brand/bg_channel_sel.png" alt="" /></figure>({sortGrandSports.length})</button>
                                    </div>
                                    <div className="sortbar">
                                        <ul>
                                            <li>
                                                <label htmlFor="delivery"><input onChange={onChangeOrder} id='delivery' type="checkbox" value={'delivery'} checked={delivery}/><img src="./img/brand/filter_chk_art_delivery.png" alt="" /></label>
                                                <label htmlFor="pickup"><input onChange={onChangeOrder} id='pickup' type="checkbox" value={'pickup'} checked={pickup}/>매장픽업</label>
                                                
                                            </li>
                                            <li>
                                                <div className="select-box">
                                                    <input onClick={onClickBox} type="text"  value={sort} readOnly/>
                                                    <span className={`${sortBox?'on':''}`}><img src="./img/brand/select_icon_arrow_down.png" alt="" /></span>
                                                    <dl className={`${sortBox?'on':''}`}>
                                                        <dd className={`${sort==='신상품순'?'on':''}`} onClick={()=>onClickSort('신상품순')}>신상품순</dd>
                                                        <dd className={`${sort==='낮은가격순'?'on':''}`} onClick={()=>onClickSort('낮은가격순')}>낮은가격순</dd>
                                                        <dd className={`${sort==='높은가격순'?'on':''}`} onClick={()=>onClickSort('높은가격순')}>높은가격순</dd>
                                                        <dd className={`${sort==='할인율 높은순'?'on':''}`} onClick={()=>onClickSort('할인율 높은순')}>할인율 상품순</dd>
                                                        <dd className={`${sort==='베스트상품순'?'on':''}`} onClick={()=>onClickSort('베스트상품순')}>베스트상품순</dd>                                                
                                                        <dd className={`${sort==='상품평순'?'on':''}`} onClick={()=>onClickSort('상품평순')}>상품평순</dd>
                                                    </dl>
                                                </div>
                                                <div className="radio-box">
                                                    <input title='3열 보기' onChange={onChangeZoom} type="radio" name='zoom' className='zoomOut' checked={!zoom} value={'zoomOut'}/>
                                                    <input title='2열 보기' onChange={onChangeZoom} type="radio" name='zoom' className='zoomIn'  checked={zoom} value={'zoomIn'}/>
                                                </div>                                        
                                            </li>
                                        </ul>
                                    </div>                            
                                    <div className={`sortbar-inner ${delivery||pickup?'on':''}`}>
                                        <ul>
                                            <li>
                                                {delivery &&<button className='inner-btn1'onClick={onClickDeliveryDel}>아트배송<img src="./img/brand/btn_icon_filter_icon_del.png" alt="" /></button>}
                                                {pickup &&<button className='inner-btn1'onClick={onClickPickupDel}>매장픽업<img src="./img/brand/btn_icon_filter_icon_del.png" alt="" /></button>}
                                            </li>
                                            <li>{(delivery||pickup) && <button className='inner-btn2'onClick={onClickAllDel}><img src="./img/brand/btn_icon_filter_icon_reset.png" alt="" />전체삭제</button>}</li>
                                        </ul>
                                    </div>
                                    <div className="products">
                                    <>
                                        {
                                            !zoom?
                                            (
                                                <>
                                                <p>총 <strong>{sortAbcSports.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    { (sortAbcSports).map((item,idx)=>{
                                                        if( Math.ceil((idx+1)/list) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} d_key={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>                                                                
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>} 
                                                                            {(item.할인율)!==0 && 
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{Math.round(item.할인율*100)}%]</em></strong>
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
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortAbcSports.length/list)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortAbcSports.length/list/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        :
                                            (
                                                <>
                                                <p>총 <strong>{sortAbcSports.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    {sortAbcSports.map((item,idx)=>{                                                
                                                        if( Math.ceil((idx+1)/zoomInList) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} d_key={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                            {(item.할인율)!==0 &&
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{Math.round(item.할인율*100)}%]</em></strong>
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
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortAbcSports.length/zoomInList)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortAbcSports.length/zoomInList/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        }  
                                        </> 
                                    </div>
                                </div>
                            </div> 
                            )
                        :
                            (
                            <div className="right">
                                <div className="title">
                                    <div className="row1">
                                        <ul>
                                            <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">HOME</a></li>
                                            <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">SALE</a></li>
                                        </ul>
                                    </div>
                                    <div className="row2">
                                        <h1>SALE</h1>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="abc-grand">
                                        <button onClick={abcChange} className={`${abcGrand?'on':''}`}><figure><img src="./img/brand/bg_channel_sel.png" alt="" /></figure>({sortAbcSports.length})</button>
                                        <button onClick={grandChange} className={`${abcGrand?'':'on'}`}><figure><img src="./img/brand/bg_channel_sel.png" alt="" /></figure>({sortGrandSports.length})</button>
                                    </div>
                                    <div className="sortbar">
                                        <ul>
                                            <li>
                                                <label htmlFor="delivery"><input onChange={onChangeOrder} id='delivery' type="checkbox" value={'delivery'} checked={delivery}/><img src="./img/brand/filter_chk_art_delivery.png" alt="" /></label>
                                                <label htmlFor="pickup"><input onChange={onChangeOrder} id='pickup' type="checkbox" value={'pickup'} checked={pickup}/>매장픽업</label>
                                                
                                            </li>
                                            <li>
                                                <div className="select-box">
                                                    <input onClick={onClickBox} type="text"  value={sort} readOnly/>
                                                    <span className={`${sortBox?'on':''}`}><img src="./img/brand/select_icon_arrow_down.png" alt="" /></span>
                                                    <dl className={`${sortBox?'on':''}`}>
                                                        <dd className={`${sort==='신상품순'?'on':''}`} onClick={()=>onClickSort('신상품순')}>신상품순</dd>
                                                        <dd className={`${sort==='낮은가격순'?'on':''}`} onClick={()=>onClickSort('낮은가격순')}>낮은가격순</dd>
                                                        <dd className={`${sort==='높은가격순'?'on':''}`} onClick={()=>onClickSort('높은가격순')}>높은가격순</dd>
                                                        <dd className={`${sort==='할인율 높은순'?'on':''}`} onClick={()=>onClickSort('할인율 높은순')}>할인율 상품순</dd>
                                                        <dd className={`${sort==='베스트상품순'?'on':''}`} onClick={()=>onClickSort('베스트상품순')}>베스트상품순</dd>                                                
                                                        <dd className={`${sort==='상품평순'?'on':''}`} onClick={()=>onClickSort('상품평순')}>상품평순</dd>
                                                    </dl>
                                                </div>
                                                <div className="radio-box">
                                                    <input title='3열 보기' onChange={onChangeZoom} type="radio" name='zoom' className='zoomOut' checked={!zoom} value={'zoomOut'}/>
                                                    <input title='2열 보기' onChange={onChangeZoom} type="radio" name='zoom' className='zoomIn'  checked={zoom} value={'zoomIn'}/>
                                                </div>                                        
                                            </li>
                                        </ul>
                                    </div>                            
                                    <div className={`sortbar-inner ${delivery||pickup?'on':''}`}>
                                        <ul>
                                            <li>
                                                {delivery &&<button className='inner-btn1'onClick={onClickDeliveryDel}>아트배송<img src="./img/brand/btn_icon_filter_icon_del.png" alt="" /></button>}
                                                {pickup &&<button className='inner-btn1'onClick={onClickPickupDel}>매장픽업<img src="./img/brand/btn_icon_filter_icon_del.png" alt="" /></button>}
                                            </li>
                                            <li>{(delivery||pickup) && <button className='inner-btn2'onClick={onClickAllDel}><img src="./img/brand/btn_icon_filter_icon_reset.png" alt="" />전체삭제</button>}</li>
                                        </ul>
                                    </div>
                                    <div className="products">
                                    <>
                                        {
                                            !zoom?
                                            (
                                                <>
                                                <p>총 <strong>{sortGrandSports.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    { (sortGrandSports).map((item,idx)=>{
                                                        if( Math.ceil((idx+1)/list) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} d_key={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>                                                                
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>} 
                                                                            {(item.할인율)!==0 && 
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{Math.round(item.할인율*100)}%]</em></strong>
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
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortGrandSports.length/list)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortGrandSports.length/list/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        :
                                            (
                                                <>
                                                <p>총 <strong>{sortGrandSports.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    {sortGrandSports.map((item,idx)=>{                                                
                                                        if( Math.ceil((idx+1)/zoomInList) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} d_key={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                            {(item.할인율)!==0 &&
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{Math.round(item.할인율*100)}%]</em></strong>
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
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortGrandSports.length/zoomInList)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortGrandSports.length/zoomInList/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        }  
                                        </> 
                                    </div>
                                </div>
                            </div> 
                            )
                        }
                        </>
                    }                                       
                </div>
            </div>
        </main>
    );
}

