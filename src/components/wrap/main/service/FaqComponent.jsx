import React from 'react';

export default function FaqComponent(props) {
    const [list, setList] = React.useState({})
    

    const onClickList =(value)=>{
        setList((prevList)=>({
            ...prevList,
            [value]:!prevList[value]
        }));

    };
    return (
        <>
        <div className='sub-title'>
            <h2>FAQ</h2>
        </div>
        <div className="faq-content">
            <div className="search-box">
                <label htmlFor="">FAQ 검색<input type="text" placeholder='궁금한 내용을 입력해주세요.' /> <button>검색</button></label>
            </div>
            <div className="nav-box">
                <table>
                    <tbody>
                        <tr>
                            <td><a href="!#">상품정보</a></td>
                            <td><a href="!#">배송현황</a></td>
                            <td><a href="!#">교환/반품/환불</a></td>
                            <td><a href="!#">주문/결제/취소</a></td>
                            <td><a href="!#">AS</a></td>
                            <td><a href="!#">회원정보</a></td>
                        </tr>
                        <tr>
                            <td><a href="!#">일반정보</a></td>
                            <td><a href="!#">영수증/증빙서류</a></td>
                            <td><a href="!#">멤버십</a></td>
                            <td><a href="!#">모바일</a></td>
                            <td><a href="!#">매장픽업</a></td>
                            <td><a href="!#">입점/기타</a></td>
                        </tr>
                        <tr>
                            <td><a href="!#">선물하기</a></td>
                            <td><a href="!#">아트배송</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="list-box">
                <h3>자주 묻는 질문 BEST 10</h3>
                <ul>
                    <li className={list['list1']?'on':''}>
                        <div onClick={()=>onClickList('list1')} className="list-front">
                            <span><img src="./img/service/mypage_icon_faq.png" alt="" /></span>
                            <h2>[A-RT] 결제방법(결제수단)을 변경하고 싶어요.</h2>
                        </div>
                        <div className="list-back">
                            <span><img src="./img/service/mypage_icon_faq.png" alt="" /></span>
                            결제완료 후 '배송완료' 상태까지만 결제수단 변경이 가능하므로 (구매확정 이후 변경 불가)<br/>
                            주문상태를 확인하신 후 고객센터(1588-9667)로 요청해 주시면 재결제 가능하도록 처리해 드리고 있습니다.<br/>
                            <br/>
                            &lt;결제수단 변경 안내&gt;<br/>
                            &nbsp;- 신용카드, 계좌이체 결제건에 한해서 결제수단 변경이 가능합니다. (이외 결제수단은 처리 불가능)<br/>
                            &nbsp;&nbsp; (포인트, 기프트카드를 같이 사용한 경우 제외)<br/>
                            &nbsp;- 주문건에 입점사 상품이 포함된 경우 결제수단 변경이 불가능 합니다.<br/>
                            &nbsp;- 아트배송으로 주문하신 상품은 결제수단 변경이 불가능 합니다.<br/>
                            <br/>
                            *재 결제 경로 : [마이페이지 &gt; 주문/배송 현황 조회 &gt; 주문상세 &gt; 결제수단 변경 버튼 클릭]
                        </div>
                    </li>
                    <li className={list['list2']?'on':''}>
                        <div onClick={()=>onClickList('list2')} className="list-front">
                            <span><img src="./img/service/mypage_icon_faq.png" alt="" /></span>
                            <h2>[A-RT] 포인트 사용은 어떻게 하나요?</h2>
                        </div>
                        <div className="list-back">
                            <span><img src="./img/service/mypage_icon_faq.png" alt="" /></span>
                            적립된 A-RT 포인트는 바로 사용 가능하며, 100 POINT단위로 사용할 수 있습니다.<br/>
                            온라인 홈페이지에서는 상품 결제시 포인트를 함께 사용 할 수 있으며<br/>
                            ABC-MART 오프라인 매장에서는 멤버십 카드를 사용하시거나<br/>
                            개인정보 인증으로 포인트 사용 비밀번호 입력 후 가능합니다.<br/>
                            최초의 비밀번호는 고객님의 생월일 4자리입니다.<br/>
                            예) 생일이 1월 1일인 경우 비밀번호는 <u>0101</u> 입니다.
                        </div>
                    </li>
                    <li className={list['list3']?'on':''}>
                        <div onClick={()=>onClickList('list3')} className="list-front">
                            <span><img src="./img/service/mypage_icon_faq.png" alt="" /></span>
                            <h2>[A-RT] 교환/반품/AS 신청 시 택배비는 어떻게 결제 해야 하나요?</h2>
                        </div>
                        <div className="list-back">
                            <span><img src="./img/service/mypage_icon_faq.png" alt="" /></span>
                            택배비는 교환/반품/AS 신청 시 선결제 하실 수 있습니다.
                        </div>
                    </li>
                    <li className={list['list4']?'on':''}>
                        <div onClick={()=>onClickList('list4')} className="list-front">
                            <span><img src="./img/service/mypage_icon_faq.png" alt="" /></span>
                            <h2>[On the spot] 다른 상품으로 교환할 수 있나요?</h2>
                        </div>
                        <div className="list-back">
                            <span><img src="./img/service/mypage_icon_faq.png" alt="" /></span>
                            교환의 경우 사이즈 교환만 가능하며, 색상 변경 및 다른상품으로의 교환은 반품(환불)후 재 주문 해주셔야 합니다.
                        </div>
                    </li>
                    <li className={list['list5']?'on':''}>
                        <div onClick={()=>onClickList('list5')} className="list-front">
                            <span><img src="./img/service/mypage_icon_faq.png" alt="" /></span>
                            <h2>[On the spot] 멤버십 포인트 비밀번호가 기억나지 않아요</h2>
                        </div>
                        <div className="list-back">
                            <span><img src="./img/service/mypage_icon_faq.png" alt="" /></span>
                            [마이페이지 &gt; 쇼핑혜택 &gt; 포인트 비밀번호 변경] 에서 비밀번호 재설정 가능합니다.<br/>
                            포인트 &nbsp;사용 비밀번호를 설정하지 않으신 경우 고객님의 생월일 4자리로 초기 설정되어 있습니다.<br/>
                            Ex) 5월 5일이 생일인 경우 =&gt; 0505
                        </div>
                    </li>
                    <li className={list['list6']?'on':''}>
                        <div onClick={()=>onClickList('list6')} className="list-front">
                            <span><img src="./img/service/mypage_icon_faq.png" alt="" /></span>
                            <h2>[A-RT] 온라인, 모바일, 오프라인의 가격이 왜 다른가요?</h2>
                        </div>
                        <div className="list-back">
                            <span><img src="./img/service/mypage_icon_faq.png" alt="" /></span>
                            온라인쇼핑몰 및 A-RT앱, 오프라인 매장의 소비자 가격은 모두 동일합니다.<br/>
                            다만, 온라인쇼핑몰과 A-RT 앱에서는 쿠폰 및 단독 이벤트가 수시로 진행되기 때문에 가격이 다를 수 있습니다.
                        </div>
                    </li>
                    <li className={list['list7']?'on':''}>
                        <div onClick={()=>onClickList('list7')} className="list-front">
                            <span><img src="./img/service/mypage_icon_faq.png" alt="" /></span>
                            <h2>[A-RT] 같은날 주문했는데 배송이 따로 왔어요 </h2>
                        </div>
                        <div className="list-back">
                            <span><img src="./img/service/mypage_icon_faq.png" alt="" /></span>
                            온라인쇼핑몰에서는 온라인과 오프라인 매장의 상품이 동시에 판매되고 있습니다.<br/>
                            이에 같은 날 주문을 했더라도, 발송처에 따라 상품을 받는 시기가 다를 수 있습니다.
                        </div>
                    </li>
                    <li className={list['list8']?'on':''}>
                        <div onClick={()=>onClickList('list8')} className="list-front">
                            <span><img src="./img/service/mypage_icon_faq.png" alt="" /></span>
                            <h2>[A-RT] 무통장으로 입금했는데 며칠 이내에 입금을 해야 하나요?</h2>
                        </div>
                        <div className="list-back">
                            <span><img src="./img/service/mypage_icon_faq.png" alt="" /></span>
                            3일 이내에 입금해 주셔야 합니다.<br/>
                            입금마감 시간은 오후 4시 입니다.<br/>
                            예) 월요일 주문 &gt; 수요일 오후 4시까지 입금<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp; 금요일 주문 &gt; 일요일 오후 4시까지 입금
                        </div>
                    </li>
                    <li className={list['list9']?'on':''}>
                        <div onClick={()=>onClickList('list9')} className="list-front">
                            <span><img src="./img/service/mypage_icon_faq.png" alt="" /></span>
                            <h2>[A-RT] ABC-MART 기프트 카드 구매는 어떻게 하나요?</h2>
                        </div>
                        <div className="list-back">
                            <span><img src="./img/service/mypage_icon_faq.png" alt="" /></span>
                            기프트 카드란?<br/>
                            ABC마트에서 운영하는 온/오프라인 매장(ABC-MART, GRAND STAGE, ABC KID'S MART, ABC-FACTORY, ON THE SPOT) 에서<br/>
                            사용 가능한 무기명 선불 카드 입니다.<br/>
                            오프라인 매장에서 구매 가능한 PVC형과 온라인몰에서 판매하는 MMS형으로 나누어져 있습니다.<br/>
                            구매는 온/오프라인 매장에서 모두 가능하오니, 많은 이용 부탁드립니다.<br/>
                            <br/>
                            기프트카드 구매하러 가기 =&gt;&nbsp;<a href="!#">https://www.a-rt.com/giftcard/giftcard-guide</a><br/>
                            * 일부 매장 제외, 홈페이지 우측 상단 '매장찾기' 참고 요망
                        </div>
                    </li>
                    <li className={list['list10']?'on':''}>
                        <div onClick={()=>onClickList('list10')} className="list-front">
                            <span><img src="./img/service/mypage_icon_faq.png" alt="" /></span>
                            <h2>[A-RT] 반품 후 사용했던 할인쿠폰을 재사용할 수 있나요?</h2>
                        </div>
                        <div className="list-back">
                            <span><img src="./img/service/mypage_icon_faq.png" alt="" /></span>
                            이벤트쿠폰 및 행사기간에 발행 된 쿠폰은 재사용이 불가합니다.
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
}

