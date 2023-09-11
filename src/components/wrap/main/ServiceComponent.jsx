import React from 'react';
import './scss/service.scss';
import NoticeComponent from './service/NoticeComponent';
import FaqComponent from './service/FaqComponent';
import WriteComponent from './service/notice/WriteComponent';
import DetailComponent from './service/notice/DetailComponent';
import axios from 'axios';
import UpdateComponent from './service/notice/UpdateComponent';
import FixedComponent from './service/notice/FixedComponent';

export default function ServiceComponent({loginId}) {
    const [menu, setMenu]=React.useState('공지사항');
    const [item, setItem] = React.useState([]);
    const [index, setIndex]=React.useState(0);

    const onClickMenu=(value)=>{
        
        setMenu(value);
        
    }

    // const [state, setState] = React.useState({
    //     게시판: []
    // });
    // React.useEffect(()=>{
    //     axios({
    //         url:'./data/service/notice.json',
    //         method:'GET'
    //     })
    //     .then((res)=>{
    //         if(res.status===200){
    //             setState({
    //                 ...state,
    //                 게시판:res.data.notice
    //             })
    //         }
    //     })
    //     .catch()
    // },[])

    // const sortNotice=[...state.게시판].sort((a, b) => b.번호 - a.번호);

    const [notice, setNotice] = React.useState([]);

    React.useEffect(()=>{

        axios({
            url:'/bbs/bbsNoticeJSON.jsp',
            method:'GET'
        })
        .then((res)=>{
            
            setNotice(res.data);
            setNotice(res.data.공지사항);

            console.log( res.data )
            console.log( res.data.공지사항 )
            
            
            
        })
        .catch((err)=>{
            console.log( err );
        });

    },[]);





    return (
        <main id='service'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <div className="row1">
                            <ul>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">HOME</a></li>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">고객센터</a></li>
                                <li><span><img src="./img/brand/comm_breadcrumb_icon_ots.png" alt="" /></span><a href="!#">{menu}</a></li>
                            </ul>
                        </div>
                        <div className="row2">
                            <h1>고객센터</h1>
                        </div>                        
                    </div>
                    <div className="content">
                        <div className="left">
                            <div className="row1">
                                <ul>
                                <li><button onClick={()=>onClickMenu('공지사항')} className={`${(menu==='공지사항' || menu==='글보기' || menu==='글쓰기' || menu==='수정' || menu==='고정')?'on':''}`} >공지사항</button></li>
                                    <li><button onClick={()=>onClickMenu('FAQ')} className={`${menu==='FAQ'?'on':''}`} >FAQ</button></li>                                    
                                    <li><button onClick={()=>onClickMenu('매장 찾기')} className={`${menu==='매장 찾기'?'on':''}`} >매장 찾기</button></li>
                                    <li><button onClick={()=>onClickMenu('1:1상담')} className={`${menu==='1:1상담'?'on':''}`}>1:1상담</button></li>
                                    <li><button onClick={()=>onClickMenu('고객의 소리')} className={`${menu==='고객의 소리'?'on':''}`} >고객의 소리</button></li>
                                    <li><button onClick={()=>onClickMenu('회원 혜택 안내')} className={`${menu==='회원 혜택 안내'?'on':''}`}>회원 혜택 안내</button></li>
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
                            {menu==='FAQ' && <FaqComponent/>}

                            {menu==='공지사항' && <NoticeComponent loginId={loginId} notice={notice} setItem={setItem}setMenu={setMenu} setIndex={setIndex}/>}
                            {menu==='고정' && <FixedComponent setMenu={setMenu}/>}
                            {menu==='글쓰기' && <WriteComponent setMenu={setMenu}/>}
                            {menu==='글보기' && <DetailComponent loginId={loginId} notice={notice} item={item} setMenu={setMenu} index={index}/>}
                            {menu==='수정' && <UpdateComponent  item={item} setMenu={setMenu} setItem={setItem} index={index}/>}

                            {/* {menu==='공지사항' && <NoticeComponent islogin={islogin} sortNotice={sortNotice} setItem={setItem}setMenu={setMenu} setIndex={setIndex}/>}
                            {menu==='글쓰기' && <WriteComponent setMenu={setMenu}/>}
                            {menu==='글보기' && <DetailComponent islogin={islogin} sortNotice={sortNotice} item={item} setMenu={setMenu} index={index}/>}
                            {menu==='수정' && <UpdateComponent  item={item} setMenu={setMenu} setItem={setItem} index={index}/>} */}
                        </div>
                    </div>                    
                </div>
            </div>
        </main>
    );
}


