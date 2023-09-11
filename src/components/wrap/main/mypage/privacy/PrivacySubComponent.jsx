import React from 'react';
import axios from 'axios';

export default function PrivacySubComponent({userInfo, setUserInfo}) {

    

    
    const onChangeUserEmail=(e)=>{
        setUserInfo({
            ...userInfo,
            userPw:e.target.value
        })
        
    }
    const onChangeUserPhone=(e)=>{
        setUserInfo({
            ...userInfo,
            userPhone:e.target.value
        })
        
    }

    const onSubmitSignin=(e)=>{
        e.preventDefault();
        axios({
            url:'/bbs/user_update_action.jsp',
            method: 'POST',
            data:{},
            params: {
                "userId": userInfo.userId,                
                "userName": userInfo.userName,
                "userEmail": userInfo.userEmail,
                "userPhone": userInfo.userPhone,
                "userPw": userInfo.userPw
            }
        })
        .then((res)=>{
            console.log( res );
            console.log( res.data ); 
            if(res.status===200){
                const result =res.data.result;
                console.log( res.data.result );
                try {                    
                    if( result === false ){
                        alert('빈값이 존재합니다. \n확인하고 다시시도해주세요');                                                  
                    }
                    else if( result === 1 ){
                        alert('회원 정보가 수정되었습니다.');
                        window.location.pathname='/MYPAGE'                        
                    }
                    else{                        
                        alert('회원 정보의 수정이 실패 했습니다. \n데이터 확인하고 다시 시도하세요.');
                    }
                } catch (error) {
                    console.log( error );
                }
            }
            
        })
        .catch((err)=>{
            console.log(`AXIOS 실패! ${err} `)
        });
    }

   
    return (
        <>
        <div className='sub-title'>
            <h2>개인정보 수정</h2>
        </div>
        <div className="password-content">
            <form onSubmit={onSubmitSignin} action="">
                <div className="form-box">  
                    <ul>
                        <li>
                            <label htmlFor="">아이디<span>{userInfo.userId}</span></label>
                        </li>
                        <li>
                            <label htmlFor="">이름<span>{userInfo.userName}</span></label>
                        </li>
                        <li>
                            <label htmlFor="">이메일<input onChange={onChangeUserEmail} value={userInfo.userEmail} type="text" placeholder='비밀번호 입력해 주세요.'/></label>
                        </li>
                        <li>
                            <label htmlFor="">핸드폰번호<input onChange={onChangeUserPhone} value={userInfo.userPhone} type="text" placeholder='비밀번호 입력해 주세요.'/></label>
                        </li>
                    </ul>                  
                    
                </div>
                <div className="btn-box">
                    <button>변경</button>
                </div>
            </form>        
        </div>
        
        </>
    );
}

