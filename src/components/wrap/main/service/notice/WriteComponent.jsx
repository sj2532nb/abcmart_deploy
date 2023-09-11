import React from 'react';
import axios from 'axios';

export default function WriteComponent({setMenu}) {

    

    
    React.useEffect(()=>{
        window.scrollTo(0, 200);
    },[])


    const [state, setState] = React.useState({
        subject:'',
        content:''
        
    });
    const {subject, content} = state;

   

    const onChangeSubject=(e)=>{
        setState({
            ...state,
            subject: e.target.value,
        })
    }
    const onChangeContents=(e)=>{
        setState({
            ...state,
            content: e.target.value,
        })
    }

    const onSubmitWrite=(e)=>{
        e.preventDefault();
       
        axios({
            url:'/bbs/writeAction.jsp',
            method: 'POST',
            data:{},
            params: {
                "subject": subject,
                "content": content
            }
        })
        .then((res)=>{
    
    
            console.log( res );
            console.log( res.data );
            window.location.pathname='/SERVICE';
        

        })
        .catch((err)=>{
            console.log(`AXIOS 실패! ${err} `)
        });   
                 
    }
   
    return (        
        <>
        <div className='sub-title'>
            <h2>공지사항</h2>
        </div>
        <div className="write-content">
            <form  onSubmit={onSubmitWrite}>
                <ul>
                    <li>
                        <label htmlFor="">
                            <span>제목</span>
                            <input 
                                    onChange={onChangeSubject}
                                    type="text" 
                                    name='subject' 
                                    id='subject' 
                                    value={subject} 
                                    placeholder='제목을 입력해 주세요' 
                                    autoComplete='off'
                                    />
                        </label>
                    </li>
                    <li>
                        <label htmlFor="">
                            <span>내용</span>
                            <textarea 
                                    onChange={onChangeContents}
                                    name="content" 
                                    id="content"  
                                    placeholder='내용을 입력해 주세요' 
                                    value={content}
                                    ></textarea>
                        </label>
                    </li>
                </ul>
                <div className="btn-box">
                    <button onClick={()=>setMenu('공지사항')}>취소</button>
                    <button>등록</button>
                </div>
            </form>
        </div>
        </>
    );
}

