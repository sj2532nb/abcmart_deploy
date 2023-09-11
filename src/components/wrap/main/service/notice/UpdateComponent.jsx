import React from 'react';
import axios from 'axios';

export default function UpdateComponent({islogin, item, setMenu, setItem}) {
    

    // 수정시 입력
    const onChangeSubject=(e)=>{
        setItem((prevItem) => ({
            ...prevItem,
            제목: e.target.value
        }));
    };

    
    // 수정시 입력
    const onChangeContents=(e)=>{
        setItem((prevItem) => ({
            ...prevItem,
            내용: e.target.value
        }));
        
    };

    const onSubmitWrite=(e)=>{
        e.preventDefault();
        

        const confirmed = window.confirm('정말로 수정하시겠습니까?');
        if (!confirmed) {
            return; // 
        }

        axios({
            url:`/bbs/updateAction.jsp?bbsId=${item.번호}`,
            method: 'POST',
            data:{},
            params: {
                "subject": item.제목,
                "content": item.내용
            }
            
        })
        .then((res)=>{
    
            
            
            console.log( res );
            console.log( res.data );

            if(res.status===200){
                const result =res.data.result;
                try {                    
                    if( result === false ){
                        alert('본인이 작성한 글만 수정 할 수 있습니다.');                                                       
                    }
                    else if( result === -1 ){
                        alert('글 수정 실패했습니다');                        
                    }
                    else{
                        alert('글 수정 성공했습니다.');                        
                        setMenu('글보기');                        

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

    

    
    React.useEffect(()=>{
        window.scrollTo(0, 200);
    },[])
   
    return (        
        <>
        <div className='sub-title'>
            <h2>공지사항</h2>
        </div>
        <div className="write-content">
            <form onSubmit={onSubmitWrite}>
                <ul>
                    <li>
                        <label htmlFor="subject">
                            <span>제목</span>
                            <input 
                                onChange={onChangeSubject}
                                type="text" 
                                name='subject' 
                                id='subject' 
                                value={item.제목}
                                placeholder='제목을 입력해 주세요' 
                                />
                        </label>
                    </li>
                    <li>
                        <label htmlFor="content">
                            <span>내용</span>
                            <textarea 
                                    onChange={onChangeContents}
                                    name="content" 
                                    id="content"  
                                    placeholder='내용을 입력해 주세요' 
                                    value={item.내용}
                                    ></textarea>
                        </label>
                    </li>
                </ul>
                <div className="btn-box">
                    <button onClick={()=>setMenu('공지사항')}>취소</button>
                    <button type='submit'>수정</button>
                </div>
            </form>
        </div>
        </>
    );
}

