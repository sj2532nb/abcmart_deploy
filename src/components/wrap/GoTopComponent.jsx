import React from 'react';
import $ from 'jquery';

export default function GoTopComponent() {
    const onClickGoTop =(e)=>{
        e.preventDefault();
        window.scrollTo(0, 0);
    }

    React.useEffect(()=>{
        let secTop = 500;
        let goTop =  $('#goTop');      
  
        // try{
        //     secTop = $('#section2').offset().top;
        // }
        // catch(e) {
        //     secTop = 600;
        // }        

        // 스크롤이벤트
        $(window).scroll(function(){
            if($(window).scrollTop() >= secTop){
                goTop.stop().css({bottom: '25px'});
            }
            else{
                goTop.stop().css({bottom: '-100px'});
            }
        });

    },[]);

    return (
        <div id='goTop'>
            <a onClick={onClickGoTop} href="#wrap" className='gotop-btn'>
                <img src="./img/gotop/comm_footer_util_top.png" alt="" />    
            </a>    
        </div>
    );
};