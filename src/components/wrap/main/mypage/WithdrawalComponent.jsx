import React from 'react';
import axios from 'axios';

export default function WithdrawalComponent({loginId, signinKey}) {

    const [state, setState]=React.useState({
        userPw:""
    })

    const onChangeUserPw=(e)=>{
        setState({
            ...state,
            userPw:e.target.value
        })
        
    }

    const onSubmitDel =(e)=>{
        e.preventDefault();
        axios({
            url:`/bbs/user_delete_action.jsp`,
            method: 'POST',
            data:{},
            params: {
                "userPw": state.userPw,
                "userId": loginId
            }
            
        })
        .then((res)=>{
            console.log( res );
            console.log( res.data );
    
            if(res.status===200){
                const result =res.data.result;
                try {                    
                    if( result === true ){
                        alert('비밀번호를 입력해주세요.');                                                       
                    }
                    else if( result === 0 ){
                        alert('비밀번호를 다시 확인해주세요.');                    
                    }
                    else{
                        const confirmed = window.confirm('정말로 삭제하시겠습니까?');
                        if (!confirmed) {
                            return; // 
                        }    
                        alert('회원을 탈퇴하셨습니다.');    
                        localStorage.removeItem(signinKey);                    
                        window.location.pathname='/INTRO';                     
    
                    }
                } catch (error) {
                    console.log( error );
                }
            }
    
            
            // setMenu('글보기');
    
        })
        .catch((err)=>{
            console.log(`AXIOS 실패! ${err} `)
        });
    }
    
    return (
        <>
        <div className='sub-title'>
            <h2>회원탈퇴</h2>
        </div>
        <div className="password-content">
            <form onSubmit={onSubmitDel} action="">
                <div className="form-box">
                    <label htmlFor="">비밀번호<input onChange={onChangeUserPw} type="password" placeholder='비밀번호 입력해 주세요.' value={state.userPw}/></label>
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

