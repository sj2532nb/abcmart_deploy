import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import './scss/header.scss';
import $ from 'jquery';

export default function HeaderComponent({signinKey, loginId, setSelectButton, cartCount, cartCountNumber, cartKey}){


    const onClickLogOut=(e)=>{
        e.preventDefault();
        localStorage.removeItem(signinKey); // 로그인 정보 모두 삭제
        window.location.pathname='/INTRO';
    }

    React.useEffect(()=>{
        if(localStorage.getItem(cartKey)!==null){
            let arr = JSON.parse(localStorage.getItem(cartKey));
            cartCountNumber(arr.length);
        }
    },[]);


    const [isShow, setIsShow] = React.useState('');
    const onMouseEnterShow=(value)=>{
        setIsShow(value);
    }
    const onMouseLeaveShow=(e)=>{
        setIsShow('');
    }

    const onClickSelect=(value)=>{
        setSelectButton(value);
        setIsShow('');

        
    }


    //헤더 브랜드 히든메뉴 json데이터
    const [state, setState] = React.useState({
        카테고리A: [],
        카테고리B: [],
        카테고리C: [],
        카테고리D: [],
        카테고리E: [],
        카테고리F: [],
        카테고리G: [],
        카테고리H: [],
        카테고리I: [],
        카테고리J: [],
        카테고리K: [],
        카테고리L: [],
        카테고리M: [],
        카테고리N: [],
        카테고리O: [],
        카테고리P: [],
        카테고리Q: [],
        카테고리R: [],
        카테고리S: [],
        카테고리T: [],
        카테고리U: [],
        카테고리V: [],
        카테고리W: [],
        카테고리X: [],
        카테고리Y: [],
        카테고리Z: [],
        카테고리123: [],
    });
    React.useEffect(()=>{
        axios({
            url:'./data/brand/category.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    카테고리A:res.data.category_a,
                    카테고리B:res.data.category_b,
                    카테고리C:res.data.category_c,
                    카테고리D:res.data.category_d,
                    카테고리E:res.data.category_e,
                    카테고리F:res.data.category_f,
                    카테고리G:res.data.category_g,
                    카테고리H:res.data.category_h,
                    카테고리I:res.data.category_i,
                    카테고리J:res.data.category_j,
                    카테고리K:res.data.category_k,
                    카테고리L:res.data.category_l,
                    카테고리M:res.data.category_m,
                    카테고리N:res.data.category_n,
                    카테고리O:res.data.category_o,
                    카테고리P:res.data.category_p,
                    카테고리Q:res.data.category_q,
                    카테고리R:res.data.category_r,
                    카테고리S:res.data.category_s,
                    카테고리T:res.data.category_t,
                    카테고리U:res.data.category_u,
                    카테고리V:res.data.category_v,
                    카테고리W:res.data.category_w,
                    카테고리X:res.data.category_x,
                    카테고리Y:res.data.category_y,
                    카테고리Z:res.data.category_z,
                    카테고리123:res.data.category_123,
                })
            }
        })
        .catch()
    },[])
    
    const [search, setSearch]=React.useState(false);

    const onClickSearch =()=>{
        setSearch(on=>!on);
    }

    const onClickClose=()=>{
        setSearch(false);
    }

    React.useEffect(()=>{
        const searchBox = $('.search_box, .search_box_inner');
        
        $(document).on({
            click(e){
                if( !searchBox.is(e.target) && !searchBox.has(e.target).length){
                    setSearch(false);
                }
            }
        })
    })

    const [inputValue, setInputValue] = React.useState('');
      
    const onChangeValue = (e) => {
      setInputValue(e.target.value);
      
    };
        
    const onClickValue=(e,value)=>{
        e.preventDefault();
        setInputValue(value);
        setSearch(false);
    }

    const onClickPath=(e)=>{
        e.preventDefault();

        if(inputValue==='아디다스'){
            setSelectButton('ADIDAS');
        }
        else if(inputValue==='나이키'){
            setSelectButton('NIKE');
        }
        else if(inputValue==='컨버스'){
            setSelectButton('CONVERSE');
        }
        else if(inputValue==='뉴발란스'){
            setSelectButton('NEW BALANCE');
        }
        else if(inputValue==='반스'){
            setSelectButton('VANS');
        }
        
        window.location.pathname='/BRAND';
    }
    
    return (
        <>
        <header id="header">
            <div className="wrap">
                <div className="container">
                    <div className="gap">
                        <div className="content">
                            <div className="box1">
                                <div className="box1_1">
                                    <Link to="/INTRO">
                                        <img src="./img/headereventfooter/1658299296317.png" alt=''/>
                                    </Link>
                                </div>
                                <div className="box1_2">
                                    <div className="search_box">
                                        <label htmlFor="search" onClick={onClickSearch}><input value={inputValue} onChange={onChangeValue} type="text" id='search' placeholder='아디다스 키즈 페스티벌 ★ 최대 50% 할인에 10% 추가 할인' autoComplete='off'/></label>
                                        <div className="icon-box">
                                            <a href="http://localhost:3000/INTRO" className="a1"><img src="./img/headereventfooter/comm_header_icon_smart.png" alt=''/></a>
                                            <a onClick={onClickPath} href='!#' className="a2"><img src="./img/headereventfooter/comm_header_icon_search.png" alt=''/></a>
                                        </div>                                        
                                    </div>
                                    <div className={`search_box_inner ${search?'on':''}`}>
                                        <div className="inner-gap">
                                            <div className="inner left">
                                                <h2>최근 검색어</h2>
                                                <p>최근 검색어가 없습니다.</p>
                                            </div>
                                            <div className="inner center">
                                                <h2>인기 검색어</h2>
                                                <ul>
                                                    <li><a onClick={(e)=>onClickValue(e,'아디다스')} href="!#"><span>01</span><h3>아디다스</h3><i><img src="./img/headereventfooter/comm_icon_keyword_rank.png" alt="" /></i></a></li>
                                                    <li><a onClick={(e)=>onClickValue(e,'나이키')} href="!#"><span>02</span><h3>나이키</h3><i><img src="./img/headereventfooter/comm_icon_keyword_rank.png" alt="" /></i></a></li>
                                                    <li><a onClick={(e)=>onClickValue(e,'컨버스')} href="!#"><span>03</span><h3>컨버스</h3><i><img src="./img/headereventfooter/comm_icon_keyword_rank.png" alt="" /></i></a></li>
                                                    <li><a onClick={(e)=>onClickValue(e,'뉴발란스')} href="!#"><span>04</span><h3>뉴발란스</h3><i><img src="./img/headereventfooter/comm_icon_keyword_rank.png" alt="" /></i></a></li>
                                                    <li><a onClick={(e)=>onClickValue(e,'반스')} href="!#"><span>05</span><h3>반스</h3><i><img src="./img/headereventfooter/comm_icon_keyword_rank.png" alt="" /></i></a></li>
                                                    <li><a onClick={(e)=>onClickValue(e,'크록스')} href="!#"><span>06</span><h3>크록스</h3><i><img src="./img/headereventfooter/comm_icon_keyword_rank.png" alt="" /></i></a></li>
                                                    <li><a onClick={(e)=>onClickValue(e,'샌들')} href="!#"><span>07</span><h3>샌들</h3><i><img src="./img/headereventfooter/comm_icon_keyword_rank.png" alt="" /></i></a></li>
                                                    <li><a onClick={(e)=>onClickValue(e,'로퍼')} href="!#"><span>08</span><h3>로퍼</h3><i><img src="./img/headereventfooter/comm_icon_keyword_rank.png" alt="" /></i></a></li>
                                                    <li><a onClick={(e)=>onClickValue(e,'운동화')} href="!#"><span>09</span><h3>운동화</h3><i><img src="./img/headereventfooter/comm_icon_keyword_rank.png" alt="" /></i></a></li>
                                                    <li><a onClick={(e)=>onClickValue(e,'캐주얼')} href="!#"><span>10</span><h3>캐주얼</h3><i><img src="./img/headereventfooter/comm_icon_keyword_rank.png" alt="" /></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="inner right">
                                                <h2>추천 검색어</h2>
                                                <p>NIKE SPORTS</p>
                                                <p>ADIDAS SANDAL</p>
                                                <p>NEW BALANCE RUNNING</p>
                                                <p>VANS CAUSAL</p>
                                            </div>
                                            <button onClick={onClickClose}><img src="./img/headereventfooter/comm_icon_btn_search_layer_close.png" alt="" /></button>
                                        </div>                                        
                                    </div>
                                </div>
                                <div className="box1_3">
                                    <ul>
                                        {loginId==='' &&
                                        <>
                                        <Link to="/LOGIN" className="a1">
                                            <li className="box3_ul_li1">
                                                <figure><img src="./img/headereventfooter/comm_header_util_link_abc_mart.png" alt=''/></figure>
                                                <div className="h6">LOGIN</div>
                                            </li>
                                        </Link>
                                        <Link to="/SIGNUPA" className="a2">
                                        <li className="box3_ul_li2">
                                            <figure><img src="./img/headereventfooter/comm_header_util_link_abc_mart.png" alt=''/></figure>
                                            <div className="h6">JOIN</div>
                                        </li>
                                        </Link>
                                        </>
                                        }
                                        {loginId!=='' &&
                                        <>
                                        <a onClick={onClickLogOut} href="!#" className="a1">
                                            <li className="box3_ul_li1">
                                                <figure className='logout-figure'><img  src="./img/headereventfooter/comm_header_util_link_abc_mart.png" alt=''/></figure>
                                                <div className="h6">LOGOUT</div>
                                            </li>
                                        </a>
                                        <Link to="/MYPAGE" className="a2">
                                            <li className="box3_ul_li2">
                                                <figure><img src="./img/headereventfooter/comm_header_util_link_abc_mart.png" alt=''/></figure>
                                                <div className="h6">MY</div>
                                            </li>
                                        </Link>
                                        </>
                                        }
                                        
                                        
                                        <Link to="/CART" className="a3">
                                            <li className="box3_ul_li3">
                                                <figure><img src="./img/headereventfooter/comm_header_util_link_abc_mart.png" alt=''/></figure>
                                                <div className="h6">CART</div>
                                                <span className='cart-badge'>{cartCount}</span>
                                            </li>
                                        </Link>
                                        <Link to="/SERVICE" className="a4">
                                            <li className="box3_ul_li4">
                                                <figure><img src="./img/headereventfooter/comm_header_util_link_abc_mart_store.png" alt=''/></figure>
                                                <div className="h6">SERVICE</div>
                                            </li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                            <div className="box2">
                                <div className="box2-container">
                                <div className="box2_1" onMouseLeave={onMouseLeaveShow}>
                                    <ul>
                                        <li className={`BRAND ${isShow==='BRAND'?' on':''}`} onMouseEnter={()=>onMouseEnterShow('BRAND')}><button >BRAND</button></li>
                                        <li className={`MEN ${isShow==='MEN'?' on':''}`} onMouseEnter={()=>onMouseEnterShow('MEN')}><button>MEN</button></li>
                                        <li className={`WOMEN ${isShow==='WOMEN'?' on':''}`} onMouseEnter={()=>onMouseEnterShow('WOMEN')}><button>WOMEN</button></li>
                                        <li className={`KIDS ${isShow==='KIDS'?' on':''}`} onMouseEnter={()=>onMouseEnterShow('KIDS')}><button>KIDS</button></li>
                                        <li className="SALE"><Link to='/PRODUCT' onMouseEnter={()=>onMouseEnterShow('SALE')} onClick={()=>onClickSelect('SALE')}>SALE</Link></li>
                                    </ul>
                                    <ul  >
                                        <li className={`brand-inner ${isShow==='BRAND'?' on':''}`} >
                                            <div className="brand-inner-container">
                                                <div className="left">
                                                    <div className="left-head">                                                        
                                                        <div className="search-box">
                                                            <input type="text" placeholder='브랜드를 검색하세요'/>
                                                            <span><img src="./img/brand/comm_gnb_search_icon.png" alt="" /></span>
                                                        </div>
                                                        <div className="btn-box">
                                                            <button className='on'>ABC, 123</button>
                                                            <button>ㄱㄴㄷ</button>
                                                        </div>
                                                    </div>
                                                    <div className="left-content">                                                        
                                                        <div className="category A">
                                                            <h2>A</h2>                                                            
                                                            <dl> 
                                                                {
                                                                    state.카테고리A.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor={`${item.eng}`}><input type="checkbox" id={`${item.eng}`}/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                                  
                                                            </dl>      
                                                        </div>
                                                        <div className="category B">
                                                            <h2>B</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리B.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor={`${item.eng}`}><input type="checkbox" id={`${item.eng}`}/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category C">
                                                            <h2>C</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리C.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor={`${item.eng}`}><input type="checkbox" id={`${item.eng}`}/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category D">
                                                            <h2>D</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리D.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor={`${item.eng}`}><input type="checkbox" id={`${item.eng}`}/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category E">
                                                            <h2>E</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리E.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor={`${item.eng}`}><input type="checkbox" id={`${item.eng}`}/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category F">
                                                            <h2>F</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리F.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor={`${item.eng}`}><input type="checkbox" id={`${item.eng}`}/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category G">
                                                            <h2>G</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리G.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor={`${item.eng}`}><input type="checkbox" id={`${item.eng}`}/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category H">
                                                            <h2>H</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리H.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor={`${item.eng}`}><input type="checkbox" id={`${item.eng}`}/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category I">
                                                            <h2>I</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리I.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor={`${item.eng}`}><input type="checkbox" id={`${item.eng}`}/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category J">
                                                            <h2>J</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리J.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor={`${item.eng}`}><input type="checkbox" id={`${item.eng}`}/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category K">
                                                            <h2>K</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리K.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor={`${item.eng}`}><input type="checkbox" id={`${item.eng}`}/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category L">
                                                            <h2>L</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리L.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor={`${item.eng}`}><input type="checkbox" id={`${item.eng}`}/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category M">
                                                            <h2>M</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리M.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor={`${item.eng}`}><input type="checkbox" id={`${item.eng}`}/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category N">
                                                            <h2>N</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리N.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor={`${item.eng}`}><input type="checkbox" id={`${item.eng}`}/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category O">
                                                            <h2>O</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리O.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor={`${item.eng}`}><input type="checkbox" id={`${item.eng}`}/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category P">
                                                            <h2>P</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리P.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor={`${item.eng}`}><input type="checkbox" id={`${item.eng}`}/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category Q">
                                                            <h2>Q</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리Q.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor={`${item.eng}`}><input type="checkbox" id={`${item.eng}`}/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category R">
                                                            <h2>R</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리R.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor={`${item.eng}`}><input type="checkbox" id={`${item.eng}`}/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category S">
                                                            <h2>S</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리S.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor={`${item.eng}`}><input type="checkbox" id={`${item.eng}`}/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category T">
                                                            <h2>T</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리T.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor={`${item.eng}`}><input type="checkbox" id={`${item.eng}`}/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category U">
                                                            <h2>U</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리U.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor={`${item.eng}`}><input type="checkbox" id={`${item.eng}`}/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category V">
                                                            <h2>V</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리V.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor={`${item.eng}`}><input type="checkbox" id={`${item.eng}`}/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category W">
                                                            <h2>W</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리W.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor={`${item.eng}`}><input type="checkbox" id={`${item.eng}`}/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category X">
                                                            <h2>X</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리X.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor={`${item.eng}`}><input type="checkbox" id={`${item.eng}`}/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category Y">
                                                            <h2>Y</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리Y.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor={`${item.eng}`}><input type="checkbox" id={`${item.eng}`}/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category Z">
                                                            <h2>Z</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리Z.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor={`${item.eng}`}><input type="checkbox" id={`${item.eng}`}/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                        <div className="category 123">
                                                            <h2>123</h2>
                                                            <dl>
                                                                {
                                                                    state.카테고리123.map((item,idx)=>{
                                                                        return(                                                               
                                                                        <dd key={idx}>
                                                                            <Link to={`/BRAND?${item.eng}`} onClick={()=>onClickSelect(`${item.eng}`)}>
                                                                                <span>{item.eng}</span>
                                                                                <span>{item.kor}</span>
                                                                            </Link>
                                                                            <label htmlFor={`${item.eng}`}><input type="checkbox" id={`${item.eng}`}/></label>
                                                                        </dd> 
                                                                        )
                                                                    }) 
                                                                }                                              
                                                            </dl>        
                                                        </div>
                                                    </div>   
                                                </div>
                                                <div className="right">
                                                    <div className="row row1">
                                                        <h2>Family site</h2>
                                                        <button></button>
                                                        <button></button>
                                                    </div>
                                                    <div className="row row2">
                                                        <h2>My Brands</h2>
                                                        {loginId==='' && <a href="http://localhost:3000/LOGIN">로그인 하여 나의 관심브랜드를 <br /> 확인해보세요.</a>}
                                                    </div>
                                                    <div className="row row3">
                                                        <h2>Hot Brands</h2>
                                                        <div className="content-box content-box1">
                                                            <div className="inner-box nike">
                                                                <Link to='/BRAND?NIKE' onClick={()=>onClickSelect('NIKE')}>
                                                                    <div className="img-box">
                                                                        <img src="./img/brand/1629843492243.jpg" alt="" />
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <span>NIKE </span>
                                                                        <span>나이키</span>
                                                                    </div>                                                                
                                                                </Link>
                                                                <label htmlFor="nike"><input type="checkbox" id='nike'/></label>
                                                            </div>
                                                            <div className="inner-box adidas">
                                                                <Link to='/BRAND?ADIDAS' onClick={()=>onClickSelect('ADIDAS')}>
                                                                    <div className="img-box">
                                                                        <img src="./img/brand/1629844261525.jpg" alt="" />
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <span>ADIDAS </span>
                                                                        <span>아디다스</span>
                                                                    </div>                                                                
                                                                </Link>
                                                                <label htmlFor="adidas"><input type="checkbox" id='adidas'/></label>
                                                            </div>
                                                            <div className="inner-box converse">
                                                                <Link to='/BRAND?CONVERSE' onClick={()=>onClickSelect('CONVERSE')}>
                                                                    <div className="img-box">
                                                                        <img src="./img/brand/1629844323216.jpg" alt="" />
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <span>CONVERSE </span>
                                                                        <span>컨버스</span>
                                                                    </div>                                                                
                                                                </Link>
                                                                <label htmlFor="converse"><input type="checkbox" id='converse'/></label>
                                                            </div>
                                                            <div className="inner-box vans">
                                                                <Link to='/BRAND?VANS' onClick={()=>onClickSelect('VANS')}>
                                                                    <div className="img-box">
                                                                        <img src="./img/brand/1629844226333.jpg" alt="" />
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <span>VANS </span>
                                                                        <span>반스</span>
                                                                    </div>                                                                
                                                                </Link>
                                                                <label htmlFor="vans"><input type="checkbox" id='vans'/></label>
                                                            </div>
                                                            <div className="inner-box newbalance">
                                                                <Link to='/BRAND?NEW BALANCE' onClick={()=>onClickSelect('NEW BALANCE')}>
                                                                    <div className="img-box">
                                                                        <img src="./img/brand/1629844162667.jpg" alt="" />
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <span>NEW BALANCE</span>
                                                                        <span>뉴발란스</span>
                                                                    </div>                                                                       
                                                                </Link>
                                                                <label htmlFor="newBalance"><input type="checkbox" id='newBalance'/></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={`men-inner mwk-inner ${isShow==='MEN'?' on':''}`}>
                                            <div className="men-inner-container mwk-inner-container">
                                                <div className="left">                                             
                                                    <div className='content'>
                                                        <dl>
                                                            <dt>스포츠</dt>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>런닝화</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>워킹화</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>테니스화</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>골프화</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>등산화</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>배드민턴화</Link></dd>                                                            
                                                        </dl>
                                                        <dl>
                                                            <dt>캐주얼</dt>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>스니커즈</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>데크슈즈</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>워킹슈즈</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>로퍼</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>레이스업</Link></dd>
                                                        </dl>
                                                        <dl>
                                                            <dt>구두</dt>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>로퍼</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>레이스업</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>뮬/블로퍼</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>몽크스트랩</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>토오픈/슬링백</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>레이스업</Link></dd>
                                                        </dl>
                                                        <dl>
                                                            <dt>샌들</dt>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>슬라이드</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>아쿠아슈즈</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>스포츠샌들</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>코르크샌들</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>윈터샌들</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>플립플랍</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>레더샌들</Link></dd>
                                                        </dl>
                                                        <dl>
                                                            <dt>의류</dt>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>상의</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>하의</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>아우터</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>스포츠</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>기타</Link></dd>
                                                        </dl>
                                                        <dl>
                                                            <dt>잡화</dt>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>가방</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>모자</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>양말</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>쥬얼리</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>악세서리</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>디지털</Link></dd>
                                                        </dl>
                                                        <dl>
                                                            <dt>용품</dt>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>신발용품</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>수납용품</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>관리용품</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>스포츠</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화M')}>레저</Link></dd>
                                                        </dl>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <a href="!#">
                                                        <img src="./img/product/1688093196573.jpg" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={`women-inner mwk-inner ${isShow==='WOMEN'?' on':''}`}>
                                            <div className="women-inner-container mwk-inner-container">
                                                <div className="left">                                             
                                                    <div className='content'>
                                                        <dl>
                                                            <dt>스포츠</dt>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>런닝화</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>워킹화</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>테니스화</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>골프화</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>등산화</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>배드민턴화</Link></dd>                                                            
                                                        </dl>
                                                        <dl>
                                                            <dt>캐주얼</dt>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>스니커즈</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>데크슈즈</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>워킹슈즈</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>로퍼</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>레이스업</Link></dd>
                                                        </dl>
                                                        <dl>
                                                            <dt>구두</dt>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>로퍼</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>레이스업</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>뮬/블로퍼</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>몽크스트랩</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>토오픈/슬링백</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>레이스업</Link></dd>
                                                        </dl>
                                                        <dl>
                                                            <dt>샌들</dt>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>슬라이드</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>아쿠아슈즈</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>스포츠샌들</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>코르크샌들</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>윈터샌들</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>플립플랍</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>레더샌들</Link></dd>
                                                        </dl>
                                                        <dl>
                                                            <dt>의류</dt>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>상의</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>하의</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>아우터</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>스포츠</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>기타</Link></dd>
                                                        </dl>
                                                        <dl>
                                                            <dt>잡화</dt>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>가방</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>모자</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>양말</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>쥬얼리</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>악세서리</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>디지털</Link></dd>
                                                        </dl>
                                                        <dl>
                                                            <dt>용품</dt>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>신발용품</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>수납용품</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>관리용품</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>스포츠</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화W')}>레저</Link></dd>
                                                        </dl>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <a href="!#">
                                                        <img src="./img/product/1676858646590.jpg" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className={`kids-inner mwk-inner ${isShow==='KIDS'?' on':''}`}>
                                            <div className="kids-inner-container mwk-inner-container">
                                                <div className="left">                                             
                                                    <div className='content'>
                                                        <dl>
                                                            <dt>스포츠</dt>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>런닝화</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>워킹화</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>테니스화</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>골프화</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>등산화</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>배드민턴화</Link></dd>                                                            
                                                        </dl>
                                                        <dl>
                                                            <dt>캐주얼</dt>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>스니커즈</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>데크슈즈</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>워킹슈즈</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>로퍼</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>레이스업</Link></dd>
                                                        </dl>
                                                        <dl>
                                                            <dt>구두</dt>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>로퍼</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>레이스업</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>뮬/블로퍼</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>몽크스트랩</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>토오픈/슬링백</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>레이스업</Link></dd>
                                                        </dl>
                                                        <dl>
                                                            <dt>샌들</dt>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>슬라이드</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>아쿠아슈즈</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>스포츠샌들</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>코르크샌들</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>윈터샌들</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>플립플랍</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>레더샌들</Link></dd>
                                                        </dl>
                                                        <dl>
                                                            <dt>의류</dt>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>상의</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>하의</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>아우터</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>스포츠</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>기타</Link></dd>
                                                        </dl>
                                                        <dl>
                                                            <dt>잡화</dt>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>가방</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>모자</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>양말</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>쥬얼리</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>악세서리</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>디지털</Link></dd>
                                                        </dl>
                                                        <dl>
                                                            <dt>용품</dt>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>신발용품</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>수납용품</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>관리용품</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>스포츠</Link></dd>
                                                            <dd><Link to='/PRODUCT' onClick={()=>onClickSelect('런닝화K')}>레저</Link></dd>
                                                        </dl>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <a href="!#">
                                                        <img src="./img/product/1688109728421.jpg" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className={`back ${isShow!=='' && isShow!=='SALE'?' on':''}`}></div>
                                </div>
                                <div className="box2_2">
                                    <ul>
                                        <li><Link to="/EVENT">기획전</Link></li>
                                        <li><Link to="/KIDS">KIDS마트</Link></li>
                                        <li><Link to="/ONLY">ONLY ABC</Link></li>
                                        <li><Link to="/COUPON">이벤트/쿠폰</Link></li>
                                    </ul>
                                </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <Outlet/>
        </>
    );
};