import React from 'react';
import axios from 'axios';

export default function PasswordComponent({loginId, signinKey}) {

    const [state, setState]=React.useState({
        userPw:"",
        userPw1:"",
        userPw2:"",
    })

    const onChangeUserPw=(e)=>{
        setState({
            ...state,
            userPw:e.target.value
        })
        
    }
    const onChangeUserPw1=(e)=>{
        setState({
            ...state,
            userPw1:e.target.value
        })
        
    }
    const onChangeUserPw2=(e)=>{
        setState({
            ...state,
            userPw2:e.target.value
        })
        
    }

    const onSubmitPwChange =(e)=>{
        e.preventDefault();
        axios({
            url:`/bbs/pwResetAction.jsp`,
            method: 'POST',
            data:{},
            params: {
                "userId": loginId,
                "userPw": state.userPw,
                "userPw1": state.userPw1,
                "userPw2": state.userPw2,
            }
            
        })
        .then((res)=>{
            console.log( res );
            console.log( res.data );
    
            if(res.status===200){
                const result =res.data.result;
                try {                    
                    if( result === false ){
                        alert('새로운 비밀번호는 기존의 비밀번호와 일치할 수 없습니다.');                                                       
                    }
                    else if( result === 0 ){
                        alert('비밀번호를 다시 확인해주세요.');                    
                    }
                    else if( result === -1 ){
                        alert('새 비밀번호가 일치 하지 않습니다.');                    
                    }
                    else{
                        const confirmed = window.confirm('정말로 변경하시겠습니까?');
                        if (!confirmed) {
                            return; // 
                        }    
                        alert('비밀번호가 변경되었습니다. 다시 로그인해주세요.');                      
                        localStorage.removeItem(signinKey); 
                        window.location.pathname='/LOGIN';                     
    
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
            <h2>비밀번호 수정</h2>
        </div>
        <div className="password-content">
            <form onSubmit={onSubmitPwChange} action="">
                <div className="form-box">
                    <ul>
                        <li><label htmlFor="">비밀번호<input type="password" onChange={onChangeUserPw} value={state.userPw} name='userPw' id='userPw' placeholder='비밀번호 입력해 주세요.'/></label></li>
                        <li><label htmlFor="">새 비밀번호<input type="password" onChange={onChangeUserPw1} value={state.userPw1} name='userPw1' id='userPw1' placeholder='새로 사용하실 비밀번호를 입력해주세요..'/></label></li>
                        <li><label htmlFor="">새 비밀번호 확인<input type="password" onChange={onChangeUserPw2} value={state.userPw2} name='userPw2' id='userPw2' placeholder='새로 사용하실 비밀번호를 재입력해주세요..'/></label></li>
                    </ul>
                    
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

