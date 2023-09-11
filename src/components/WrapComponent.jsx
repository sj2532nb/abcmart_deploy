import React from 'react';
import FooterComponent from './wrap/FooterComponent';
import HeaderComponent from './wrap/HeaderComponent';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import IntroComponent from './wrap/main/IntroComponent';
import BrandComponent from './wrap/main/BrandComponent';
import ProductDetailComponent from './wrap/main/ProductDetailComponent';
import NotFoundComponent from './wrap/main/NotFoundComponent';
import EventComponent from './wrap/main/EventComponent';
import CartComponent from './wrap/main/CartComponent';
import LoginComponent from './wrap/main/LoginComponent';
import ProductComponent from './wrap/main/ProductComponent';
import ServiceComponent from './wrap/main/ServiceComponent';
import MypageComponent from './wrap/main/MypageComponent';
import TopCookieComponent from './wrap/TopCookieComponent';
import CookieComponent from './wrap/CookieComponent';
import SignupaComponent from './wrap/main/SignupaComponent';
import SignupbComponent from './wrap/main/SignupbComponent';
import KidsComponent from './wrap/main/KidsComponent';
import OnlyAbcComponent from './wrap/main/OnlyAbcComponent';
import CouponComponent from './wrap/main/CouponComponent';
import EventSubComponent from './wrap/main/event/EventSubComponent';
import GoTopComponent from './wrap/GoTopComponent';



export default function WrapComponent(){
    
    //로그인 정보 가지고 오기
    const [loginId, setLoginId]=React.useState('');
    const [photo, setPhoto]=React.useState('');
    const [signin, setSigin] = React.useState({
        signinKey: 'ABCUSERLOGIN',
        userId:'',
        expires:'',
        photo:''
    });
    const {signinKey, userId, expires} = signin;
    
    React.useEffect(()=>{
        // 로컬스토레이지 로그인 정보 가져오기
        let result='';
        if( localStorage.getItem(signinKey)!==null ){
             result = JSON.parse(localStorage.getItem(signinKey)); 
             if( new Date() > result.expires){
                alert('만료일이 지났습니다. 로그아웃되었습니다.');
                setSigin({
                    ...signin,
                    userId: '',
                    expires: '',
                    image:''
                })
                localStorage.removeItem(signinKey); // 로그인 정보 모두 삭제
                window.location.pathname='/INTRO'
             } 
             else{
                setSigin({
                    ...signin,
                    userId: result.userId,
                    expires: result.expires,
                    image:result.image
                 })                 
                setLoginId(signin.userId);
                setPhoto(signin.photo)
             }
        }
        
    },[userId, expires, signinKey]);



    const [cartCount, setCartCount] = React.useState(0);

    const cartCountNumber=(num)=>{
        setCartCount(num);
    }


    const [selectButton, setSelectButton ]= React.useState(null);
    
    //브랜드
    const [adidas, setAdidas] = React.useState(
        localStorage.getItem('ADIDAS') === 'true' ? true : false
    );
    const [nike, setNike] = React.useState(
      localStorage.getItem('NIKE') === 'true' ? true : false
    );
    const [converse, setConverse] = React.useState(
      localStorage.getItem('CONVERSE') === 'true' ? true : false
    );
    const [vans, setVans] = React.useState(
      localStorage.getItem('VANS') === 'true' ? true : false
    );
    const [newbalance, setNewbalance] = React.useState(
      localStorage.getItem('NEW BALANCE') === 'true' ? true : false
    );

    //men,women,kids
    const [running1, setRunning1] = React.useState(
        localStorage.getItem('런닝화M') === 'true' ? true : false
    );
    const [running2, setRunning2] = React.useState(
        localStorage.getItem('런닝화W') === 'true' ? true : false
    );
    const [running3, setRunning3] = React.useState(
        localStorage.getItem('런닝화K') === 'true' ? true : false
    );

    const [sale, setSale] = React.useState(
        localStorage.getItem('SALE') === 'true' ? true : false
    );

    React.useEffect(()=>{

        //브랜드
        if(selectButton==='ADIDAS'){
            setAdidas(true);

            setNike(false);   
            setConverse(false); 
            setVans(false);  
            setNewbalance(false); 
        }
        else if(selectButton==='NIKE'){
            setNike(true);  

            setAdidas(false);
            setConverse(false); 
            setVans(false);  
            setNewbalance(false); 
        }
        else if(selectButton==='CONVERSE'){
            setConverse(true);

            setAdidas(false);
            setNike(false);   
            setVans(false);  
            setNewbalance(false); 
        }
        else if(selectButton==='VANS'){
            setVans(true);     

            setAdidas(false);
            setNike(false);   
            setConverse(false);
            setNewbalance(false); 
        }
        else if(selectButton==='NEW BALANCE'){
            setNewbalance(true);  

            setAdidas(false);
            setNike(false);   
            setConverse(false); 
            setVans(false); 
        }

        // 남성, 여성, 아동
        else if(selectButton==='런닝화M'){
            setRunning1(true);

            setRunning2(false);
            setRunning3(false);
            setSale(false)
        }
        else if(selectButton==='런닝화W'){
            setRunning2(true);

            setRunning1(false);
            setRunning3(false); 
            setSale(false)
        }
        else if(selectButton==='런닝화K'){
            setRunning3(true);

            setRunning1(false);
            setRunning2(false); 
            setSale(false)
        }
        else if(selectButton==='SALE'){
            setSale(true)

            setRunning3(false);
            setRunning1(false);
            setRunning2(false);
        }

    },[selectButton])

    React.useEffect(() => {
        localStorage.setItem('ADIDAS', adidas);
        localStorage.setItem('NIKE', nike);
        localStorage.setItem('CONVERSE', converse);
        localStorage.setItem('VANS', vans);
        localStorage.setItem('NEW BALANCE', newbalance);

        //남성,여성, 아동
        localStorage.setItem('런닝화M', running1);
        localStorage.setItem('런닝화W', running2);
        localStorage.setItem('런닝화K', running3);

        localStorage.setItem('SALE', sale);
    }, [adidas, nike, converse, vans, newbalance, running1, running2, running3, sale ]);


    // 상품클릭 시 ProductDetail화면으로 이동
    const [productDetail, setProductDetail] = React.useState({
        dkey: 'PRODUCTDETAILKEY',
        sign: false,
        getProductDetail : [],
        cartKey:'ABCMARTCART',
    });

    // 비구조화
    const {dkey, sign, getProductDetail, cartKey} = productDetail;

    const setViewProductDetail=(value)=>{
        let arr = [];
        console.log('value  ' +value);
        if(localStorage.getItem(dkey)!==null){

            arr = JSON.parse(localStorage.getItem(dkey));
            arr = [value, ...arr]
            localStorage.setItem(dkey, JSON.stringify(arr));
            setProductDetail({
                ...productDetail,
                sign: !sign,
                getProductDetail: arr
            });
        }
        else{
            arr = [value]
            localStorage.setItem(dkey, JSON.stringify(arr));
            setProductDetail({
                ...productDetail,
                sign: !sign,
                getProductDetail: arr
            });
        }
      
    }


    // 쿠키
    const [topCookie, setTopCookie] = React.useState({
        key: 'TOPCOOKIE',
        isTopCookie: true
    })

    const [saleCookie, setSaleCookie] = React.useState({
        key: 'COOKIE',
        isCookie: true
    })

    const topCookieClose=(value, expires)=>{
        setTopCookie({
            ...topCookie,
            isTopCookie: false
        })
        setCookieMethod(value, expires);
    }

    const CookieClose=(value, expires)=>{
        setSaleCookie({
            ...saleCookie,
            isCookie: false
        })
        setCookieMethod2(value, expires);
    }

    const setCookieMethod=(value, expires)=>{
        let today = new Date();
        today.setDate(today.getDate() + expires);
        document.cookie = `${topCookie.key}=${value}; path=/; expires=${today.toUTCString()};`;
    }

    const setCookieMethod2=(value, expires)=>{
        let today = new Date();
        today.setDate(today.getDate() + expires);
        document.cookie = `${saleCookie.key}=${value}; path=/; expires=${today.toUTCString()};`;
    }

    const getCookieMethod=()=>{
        if(document.cookie==='') return;

        try{
            const result = document.cookie.split(';');

            let cookie = [];
            result.map((item, idx)=>{
                cookie[idx] = {
                    key: item.split('=')[0].trim(),
                    value: item.split('=')[1].trim()
                }
            });

            cookie.map((item)=>{
                if(item.key.includes(topCookie.key)===true && item.value.includes('yes')===true){
                    setTopCookie({
                        ...topCookie,
                        isTopCookie:false
                    })
                    return;
                }
            })
        }
        catch(e){
            console.log('상단쿠키X',e);
        }
    }

    const getCookieMethod2=()=>{
        if(document.cookie==='') return;

        try{
            const result = document.cookie.split(';');

            let cookie = [];
            result.map((item, idx)=>{
                cookie[idx] = {
                    key: item.split('=')[0].trim(),
                    value: item.split('=')[1].trim()
                }
            });

            cookie.map((item)=>{
                if(item.key.includes(saleCookie.key)===true && item.value.includes('yes')===true){
                    setSaleCookie({
                        ...cookie,
                        isCookie:false
                    })
                    return;
                }
            })
        }
        catch(e){
            console.log('중간쿠키X',e);
        }
    }

    React.useEffect(()=>{
        getCookieMethod();
    },[topCookie.isTopCookie]);

    React.useEffect(()=>{
        getCookieMethod2();
    },[saleCookie.isCookie]);


    return (
        <div id='wrap'>
            {
                topCookie.isTopCookie && <TopCookieComponent topCookieClose={topCookieClose}/>                
            }        
            {
                saleCookie.isCookie && <CookieComponent CookieClose={CookieClose}/>
            }
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>                    
                    <Route path='/' element={<HeaderComponent loginId={loginId} signinKey={signinKey} setSelectButton={setSelectButton} cartCount={cartCount} cartCountNumber={cartCountNumber} cartKey={cartKey} />}>
                        <Route index element={<IntroComponent/>}/>
                        <Route path='/INTRO' element={<IntroComponent />}/>                        
                        <Route path='/BRAND' element={<BrandComponent  adidas={adidas} nike={nike}  converse={converse}  vans={vans}  newbalance={newbalance} setViewProductDetail={setViewProductDetail} dkey={dkey} />}/>
                        <Route path='/PRODUCT' element={<ProductComponent sale={sale} running1={running1} running2={running2} running3={running3} setViewProductDetail={setViewProductDetail} dkey={dkey}/>}/>
                        <Route path='/PRODUCTDETAIL' element={<ProductDetailComponent dkey={dkey} cartCountNumber={cartCountNumber} cartKey={cartKey} />}/>
                        <Route path='/EVENT' element={<EventComponent/>}/>
                        <Route path='/EVENTSUB' element={<EventSubComponent/>}/>                        
                        <Route path='/CART' element={<CartComponent cartKey={cartKey} />}/>
                        <Route path='/LOGIN' element={<LoginComponent setSigin={setSigin}/>}/>
                        <Route path='/SIGNUPA' element={<SignupaComponent/>}/>
                        <Route path='/SIGNUPB' element={<SignupbComponent/>}/>
                        <Route path='/MYPAGE' element={<MypageComponent loginId={loginId} signinKey={signinKey} cartCount={cartCount} cartCountNumber={cartCountNumber} cartKey={cartKey}/>}/>
                        <Route path='/SERVICE' element={<ServiceComponent loginId={loginId} />}/>
                        <Route path='/KIDS' element={<KidsComponent/>}/>
                        <Route path='/ONLY' element={<OnlyAbcComponent/>}/>
                        <Route path='/COUPON' element={<CouponComponent/>}/>                  
                        
                        
                        
                        <Route path='/*' element={<NotFoundComponent/>}/>
                        
                    </Route>
                </Routes>

            </BrowserRouter>
            
            <GoTopComponent/>
            <FooterComponent/>
        </div>
    );
};

