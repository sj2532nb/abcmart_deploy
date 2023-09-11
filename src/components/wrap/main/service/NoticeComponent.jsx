import React from 'react';

export default function NoticeComponent({notice, loginId, sortNotice, setItem,setMenu, setIndex}) {
    

    
    const onClickWrite =(value)=>{
        setMenu(value);
    }

    const onClickDetail=(e, item, index)=>{
        e.preventDefault();
        
        setItem(item);
        setIndex(index);
        setMenu('글보기'); 
    }


     //페이지 버튼

    //목록개수
    const [list] = React.useState(8);  

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

        // window.scrollTo({
        //     top:200
        // })

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

    const onClickFixed=(e)=>{
        e.preventDefault();
        setMenu('고정');
    }


    return (
        <>
        <div className='sub-title'>
            <h2>공지사항</h2>
        </div>
        <div className="notice-content">
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody> 
                    
                        <tr>
                            <td><img src="./img/service/common_icon_bbs_notice.png" alt="" /></td>
                            <td><a onClick={(e)=>onClickFixed(e,'글보기')} href="!#">개인정보처리방침 개정 안내</a></td>
                            <td>공지사항</td>
                            <td>2023.06.22</td>
                        </tr>
                   
                    
                    {
                        notice.map((item,idx)=>{
                            if( Math.ceil((idx+1)/list) === pageNumber ){
                            return(                                
                                <tr key={idx}>
                                    {isNaN(item.번호)? <td><img src={item.번호} alt="" /></td>:<td>{item.번호}</td>}
                                    <td><a onClick={(e)=>onClickDetail(e, item, idx)} href="!#">{item.제목}</a></td>
                                    <td>{item.작성자}</td>
                                    <td>{item.작성일.substring(0, 10).replace(/-/g, '.')}</td>
                                </tr>  
                            )
                            }
                        })
                    }
                                   
                </tbody>    
            </table>
            <div className="page-button-box">
                <div className="prev-btn-box">
                    { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}><img src="./img/service/select_icon_arrow.png" alt="" /></a> }
                </div>                                
                <div className='num-btn-box'>
                {
                (()=>{
                        let arr = []; 
                        for(let i=startNum; i<endtNum; i++){                                    
                            if(i<Math.ceil(notice.length/list)){ // 100/6
                                arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                
                            }
                        }
                        return  arr                                                                      
                })() 
                }                        
                </div>
                <div className="next-btn-box">
                    {cnt < Math.ceil(notice.length/list/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}><img src="./img/service/select_icon_arrow.png" alt="" /></a>}
                </div> 
            </div>
            {loginId!=='' && <button onClick={()=>onClickWrite('글쓰기')}>글쓰기</button>}
        </div>
        </>
    );
}

