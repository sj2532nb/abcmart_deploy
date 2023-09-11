import React from 'react';
import axios from 'axios';

export default function PrivacyComponent({loginId, setUserInfo, setMenu}) {
    

    const [state, setState]=React.useState({
        userId:"",
        userPw:""
    })

    const onChangeUserPw=(e)=>{
        setState({
            ...state,
            userPw:e.target.value
        })
        
    }

    const onSubmitSignin=(e)=>{
        e.preventDefault();
        axios({
            url:'/bbs/userJSON.jsp',
            method: 'POST',
            data:{},
            params: {
                "userId": loginId,
                "userPw": state.userPw
            }
        })
        .then((res)=>{
            console.log( res );
            // console.log( res.data );            
            

            if(res.status===200){
                const result =res.data.result;
                try {                    
                    if( result === 0 ){
                        alert('비밀번호를 다시 확인해주세요.');                                                  
                    }
                    else{                        
                        setUserInfo(res.data);
                        setMenu('개인정보 수정')
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
            <h2>개인정보</h2>
        </div>
        <div className="password-content">
            <form onSubmit={onSubmitSignin} action="">
                <div className="form-box">                    
                    <label htmlFor="">비밀번호<input onChange={onChangeUserPw} value={state.userPw} type="password" placeholder='비밀번호 입력해 주세요.'/></label>                                         
                </div>
                <div className="btn-box">
                    <button>확인</button>
                </div>
            </form>  
            <div className="caution">
                <h3><span><img src="./img/mypage/text_icon_notice.png" alt="" /></span>비밀번호 재확인</h3>
                <p>·고객님의 소중한 개인정보를 보호하기 위해 비밀번호를 다시 한번 확인합니다.</p>
                <p>·비밀번호 입력 시 타인에게 노출되지 않도록 주의해 주시기 바랍니다.</p>
            </div>          
        </div>
        
        </>
    );
}

