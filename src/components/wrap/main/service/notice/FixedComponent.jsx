import React from 'react';

export default function FixedComponent({setMenu}) {
    return (
        <>
        
        <div className='sub-title'>
            <h2>공지사항</h2>
        </div>
                <div className="detail-content">
                    <div className="content-head">
                        <ul>
                            <li>개인정보처리방침 개정 안내</li>
                            <li>2023.06.22</li>
                        </ul>
                    </div>
                    <div className="content-main">
                        <p id='itema'>안녕하세요.<br/>개인정보 처리방침 내용이 개정되어 공지 드립니다.<br/><br/>-개정 사유 : 개인정보 위탁 업체 삭제<br/>- 시행일: 2023년 7월 1일<br/><br/>사이트 이용에 참고 부탁드립니다.<br/>감사합니다</p>
                    </div>
                    <div className="content-footer">
                    </div>
                    <div className="btn-box">
                        <button onClick={()=>setMenu('공지사항')}>목록</button>                        
                    </div>
                </div>
        
            
        
        
        </>
    );
}

