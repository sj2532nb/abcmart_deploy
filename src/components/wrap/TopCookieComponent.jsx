import React from 'react';
import './scss/topcookie.scss';
import { Link } from 'react-router-dom';

export default function TopCookieComponent({topCookieClose}){

    const onClickTopCookieClose=(e)=>{
        e.preventDefault();
        topCookieClose('yes', 3);
    }

    return (
        <div id='topCookie'>
            <div className="container">
              <a className='banner' href="http://localhost:3000/EVENTSUB"><img src="./img/cookie/1681192539922.jpg" alt="" /></a>
                <a className='close' onClick={onClickTopCookieClose} href="!#">
                    
                </a>
            </div>
        </div>
    );
};

