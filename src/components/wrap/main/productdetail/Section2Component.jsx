import React from 'react';
import '../scss/productdetail.scss';

export default function Section2Component(){
    return (
        <section id='section2'>
            <div className="container">
                <div className="gap">
                    <div className="title-box">
                        <div className="title">
                            <h4>기획전/이벤트</h4>
                        </div>
                    </div>
                    <div className="content">
                        <a href="/EVENT"><span><img src="./img/detail/1686894468370.jpg" alt="" /></span></a>
                        <a href="/EVENT"><p>이달의 월간슈즈 #스포츠 슈즈</p></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

