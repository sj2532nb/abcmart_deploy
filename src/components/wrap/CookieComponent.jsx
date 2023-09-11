import React from 'react';
import './scss/cookie.scss';

export default function CookieComponent({CookieClose}){

    const onClickCookieClose=(e)=>{
        e.preventDefault();
        CookieClose('yes', 0);
    }

    const onClickOnedayCookieClose=(e)=>{
        e.preventDefault();
        CookieClose('yes', 1);
    }


    return (
        <div id='cookie'>
            <div className="container">
                <a className='cookie-box' href="http://localhost:3000/BRAND?ADIDAS" ><img src="./img/cookie/1688362006670.png" alt="" /></a>
                <div className="close-box">
                    <a className='oneday-close' onClick={onClickOnedayCookieClose} href="!#">오늘 하루 그만 보기</a>
                    <a className='close' onClick={onClickCookieClose} href="!#">닫기</a>
                </div>
            </div>
        </div>
    );
};

