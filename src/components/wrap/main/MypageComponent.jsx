import React from 'react';
import './scss/mypage.scss';
import { Link } from 'react-router-dom';
import MypageSubComponent from './mypage/MypageSubComponent';
import MySizeComponent from './mypage/MySizeComponent';
import PrivacyComponent from './mypage/PrivacyComponent';
import PasswordComponent from './mypage/PasswordComponent';
import WithdrawalComponent from './mypage/WithdrawalComponent';
import MypageModalComponent from './mypage/modal/MypageModalComponent';
import PrivacySubComponent from './mypage/privacy/PrivacySubComponent';
function MypageComponent({loginId, signinKey, cartCount, cartCountNumber, cartKey}) {
    const [menu, setMenu]=React.useState('마이페이지');
    const[userInfo, setUserInfo]= React.useState(null);

    React.useEffect(()=>{
        if(localStorage.getItem(cartKey)!==null){
            let arr = JSON.parse(localStorage.getItem(cartKey));
            cartCountNumber(arr.length);
        }
    },[]);

    const onClickMenu=(value)=>{
        setMenu(value);
    }

    const[modalOpen, setModalOpen]=React.useState(false);
    const onClickModal =()=>{
        setModalOpen(true);
    }

    const modalClose=()=>{
        setModalOpen(false)
    }

    const [image, setImage] = React.useState('');

    const onChangeImg = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
  
      reader.onload = () => {
        setImage(reader.result);
      };
  
      if (file) {
        reader.readAsDataURL(file);
      }
    };


    const onClickSave=()=>{
        alert('저장 되었습니다.');
        modalClose();
        localStorage.setItem('profile',image);
    }

    React.useEffect(()=>{
        const saveProfile = localStorage.getItem('profile');
        if(saveProfile){
            setImage(saveProfile)
        }
    },[])

    const img = localStorage.getItem('profile');

    return (
        <main id='mypage'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <div className="row1">
                            <ul>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><Link to="/INTRO">HOME</Link></li>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><Link to="/MYPAGE">마이페이지</Link></li>
                                {
                                menu==='마이페이지' && 
                                <>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><Link to="/MYPAGE">마이페이지</Link></li>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><Link to="/MYPAGE">{menu}</Link></li>
                                </>
                                }
                                {
                                (menu==='나의 사이즈 관리' || menu==='개인정보 수정' || menu==='비밀번호 변경' || menu==='회원 탈퇴')&& 
                                <>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><Link to="/MYPAGE">개인정보</Link></li>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><Link to="/MYPAGE">{menu}</Link></li>
                                </>
                                }                                
                            </ul>
                        </div>
                        <div className="row2">
                            <h1>마이페이지</h1>
                        </div>                        
                    </div>
                    <div className="content">
                        <div className="left">
                            <div className="row1">
                                <ul>
                                    <li>
                                        <h2>마이페이지</h2>
                                        <button onClick={()=>onClickMenu('마이페이지')} className={`${menu==='마이페이지'?'on':''}`} >마이페이지</button>
                                    </li>                                    
                                    <li>
                                        <h2>개인정보</h2>
                                        <button onClick={()=>onClickMenu('나의 사이즈 관리')} className={`${menu==='나의 사이즈 관리'?'on':''}`} >나의 사이즈 관리</button>
                                        <button onClick={()=>onClickMenu('개인정보')} className={`${menu==='개인정보 수정' || menu==='개인정보'?'on':''}`} >개인정보 수정</button>
                                        <button onClick={()=>onClickMenu('비밀번호 변경')} className={`${menu==='비밀번호 변경'?'on':''}`} >비밀번호 변경</button>
                                        <button onClick={()=>onClickMenu('회원 탈퇴')} className={`${menu==='회원 탈퇴'?'on':''}`} >회원 탈퇴</button>
                                    </li>                                  
                                </ul>
                            </div>
                            <div className="row2">
                                <div className="info-box">
                                    <h3><span><img src="./img/service/customer_icon_cs_info.png" alt="" /></span>CS CENTER</h3>
                                    <h4>1588-9667</h4>
                                    <ul>
                                        <li>월~금</li>
                                        <li>
                                            09:00~12:00 <br />13:00~18:00
                                        </li>
                                    </ul>
                                    <p>(주말,공휴일 휴무)</p>
                                </div>                                
                            </div>
                        </div>
                        <div className="right">
                            <div className="summary">
                                <div className="profile-box">
                                    <div className='img-box'>
                                    {img && <img src={img} alt="" /> }                                    
                                        <button onClick={onClickModal}></button>
                                        {modalOpen && <MypageModalComponent modalClose={modalClose} onChangeImg={onChangeImg} onClickSave={onClickSave} image={image} setImage={setImage}/>}
                                    </div>
                                </div>
                                <div className="grade-box">
                                    <h3><em>{loginId}</em>&nbsp;님은&nbsp;<strong>온라인 회원</strong>입니다.</h3>
                                    <button>통합멤버십 전환</button>
                                </div>
                                <div className="shopping-box">
                                    <div className="col1">
                                        <ul>
                                            <li>
                                                <h4><i><img src="./img/mypage/mypage_icon_shopping_info.png" alt="" /></i>포인트</h4>
                                                <span>맴버십회원 전용 <br /> 혜택입니다.</span>
                                            </li>
                                            <li>
                                                <h4><i><img src="./img/mypage/mypage_icon_shopping_info.png" alt="" /></i>쿠폰</h4>
                                                <span><a href="!#"><strong>1</strong>개</a></span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col2">
                                        <ul>
                                            <li>
                                                <h4><i><img src="./img/mypage/mypage_icon_shopping_info.png" alt="" /></i>장바구니</h4>
                                                <span><a href="!#"><strong>{cartCount}</strong>개</a></span>
                                            </li>
                                            <li>
                                                <h4><i><img src="./img/mypage/mypage_icon_shopping_info.png" alt="" /></i>찜한상품</h4>
                                                <span><a href="!#"><strong>0</strong>개</a></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                                {menu==='마이페이지' && <MypageSubComponent/>}
                                {menu==='나의 사이즈 관리' && <MySizeComponent />}
                                {menu==='개인정보' && <PrivacyComponent setMenu={setMenu} loginId={loginId} signinKey={signinKey} setUserInfo={setUserInfo}/>}
                                {menu==='개인정보 수정' && <PrivacySubComponent userInfo={userInfo} setUserInfo={setUserInfo}/>}
                                {menu==='비밀번호 변경' && <PasswordComponent loginId={loginId} signinKey={signinKey}/>}
                                {menu==='회원 탈퇴' && <WithdrawalComponent loginId={loginId} signinKey={signinKey}/>}
                        </div>
                    </div>                    
                </div>
            </div>
        </main>
    );
}

export default MypageComponent;