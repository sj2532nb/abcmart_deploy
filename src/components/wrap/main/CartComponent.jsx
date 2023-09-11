import React from 'react';
import './scss/cart.scss';

export default function CartComponent(){

    const [cart, setCart] = React.useState([]);
    const [isSelectAll, setIsSelectAll] = React.useState(false);
    const [checkAll, setCheckAll] = React.useState([]);
    const [check, setCheck] = React.useState([]);
    const [isSelectDel, setIsSelectDel] = React.useState(false);  // false일때 disabled
    const [isPickUp, setIspickUp] = React.useState(false);
    const [isRecentView, setIsRecentView] = React.useState(false);
    const [isOptionModal, setIsOptionModal] = React.useState(false);
    const [optionChange, setOptionChange] = React.useState([]);

    
    const onClickRecentView=(e)=>{
        e.preventDefault();
        if(isRecentView===true){
            setIsRecentView(false);
        }
        else{
            setIsRecentView(true);
        }
    }

    const onClickKeepShopping=(e)=>{
        e.preventDefault();
        if(window.confirm('메인페이지로 이동하시겠습니까?')){
            window.location.href="/INTRO";
        }
        else{
            return false;
        }
    }

    const onClickPickUp=(e)=>{
        e.preventDefault();
        if(isPickUp===true){
            setIspickUp(false);
        }
        else{
            setIspickUp(true);
        }
    }

    // 장바구니 집계
    const [state, setState] = React.useState({
        주문금액: 0,
        상품금액: 0,
        추가배송비: 0,
        총할인금액: 0,
        상품할인: 0,
        프로모션: 0,
        결제예정금액: 0,
        예상적립포인트: 0
    });

    const {주문금액, 상품금액, 추가배송비, 총할인금액, 상품할인, 프로모션, 결제예정금액, 예상적립포인트} = state;

    // 수량감소 카운트
    const onClickSub=(e, record)=>{
        e.preventDefault();
        // console.log(record);
        const result = cart.map((item)=>{
            return(
                (item.상품코드&&item.사이즈) === (record.상품코드&&record.사이즈) ? ({...item, 수량: (item.수량>=2 ? item.수량-1 : 1), 총결제금액 : Math.round((item.수량>=2 ? item.수량-1 : 1)*(item.가격*(1-item.할인율))) }) : ({...item})
            )
        });
        setCart(result);
        localStorage.setItem('ABCMARTCART', JSON.stringify(result));
    }

    // 수량증가 카운트
    const onClickAdd=(e, record)=>{
        e.preventDefault();
        // console.log(record);
        const result = cart.map((item)=>{
            return(
                (item.상품코드&&item.사이즈) === (record.상품코드&&record.사이즈) ? ({...item, 수량: (item.수량+1), 총결제금액 : Math.round((item.수량+1)*(item.가격*(1-item.할인율))) }) : ({...item})
            )
        });
        setCart(result);
        localStorage.setItem('ABCMARTCART', JSON.stringify(result));
    }

    // 개별 삭제
    const onClickDel=(e, record)=>{
        e.preventDefault();
        // console.log(record);
        if(window.confirm('삭제하시겠습니까?')){
            const result = cart.filter((item)=>(item.상품코드&&item.사이즈)!==(record.상품코드&&record.사이즈));
            setCart(result);
            localStorage.setItem('ABCMARTCART', JSON.stringify(result));
            initMethod();
        }
        else{
            return false;
        }
    }


    React.useEffect(()=>{

        let 상품금액 = 0;
        let 추가배송비 = 0;
        let 주문금액 = 0;
        let 상품할인 = 0;
        let 프로모션 = 0;
        let 총할인금액 = 0;
        let 결제예정금액 = 0;
        let 예상적립포인트 = 0;

        cart.map((item, idx)=>{

            if(item.수량!==undefined && item.총결제금액!==undefined){
                상품금액 += (item.가격*item.수량);
                추가배송비 = ((상품금액-상품할인) < 20000 ? 2500 : 0);
                주문금액 = 상품금액+추가배송비;
                상품할인 += Math.round((item.가격*item.수량)-item.총결제금액);
                프로모션 = 0;
                총할인금액 = 상품할인+프로모션;
                결제예정금액 = 주문금액-총할인금액;
                예상적립포인트 += Math.round((item.총결제금액)*0.01);
            }
        });

        setState({
            ...state,
            상품금액: 상품금액,
            추가배송비: 추가배송비,
            주문금액: 주문금액,
            상품할인: 상품할인,
            프로모션: 프로모션,
            총할인금액: 총할인금액,
            결제예정금액: 결제예정금액,
            예상적립포인트: 예상적립포인트
        });
        
    },[cart]);


    const initMethod=()=>{
        if(localStorage.getItem('ABCMARTCART')!==null){
            let result = JSON.parse(localStorage.getItem('ABCMARTCART'));
            // console.log(result);

            setCart(result);

            let temp = [];
            result.map((item, idx)=>{
                // console.log(idx, item)
                temp = [...temp, item.상품코드+item.사이즈];
            });
            setCheckAll(temp);
        }
    }


    // 장바구니 가져오기
    React.useEffect(()=>{
        initMethod();
    },[]);


    // 전체 체크
    const onClickSelectAll=(e)=>{
        if(isSelectAll===false){
            setIsSelectAll(true);
            setCheck(checkAll);
        }
        else{
            setIsSelectAll(false);
            setCheck([]);
        }
    }

    // 개별 체크
    const onChangeCheck=(e)=>{

        let temp = [];
        if(e.target.checked===true){
            setCheck([...check, e.target.value]);
        }
        else if(e.target.checked===false){
            temp = check.filter((item)=>item!==e.target.value);
            setCheck(temp);
        }
    }


    // 선택 삭제
    const onClickSelectDelete=(e)=>{
        e.preventDefault();

        const result = cart.filter((item)=> !check.includes(item.상품코드+item.사이즈));
        setCheck([]);
        setCart(result);
        localStorage.setItem('ABCMARTCART', JSON.stringify(result));
        initMethod();
        alert('삭제되었습니다.');
    }

    // 선택 삭제 버튼
    React.useEffect(()=>{
        if(check.length>0){
            setIsSelectDel(true);
        }
        else{
            setIsSelectDel(false);
        }
    },[cart.length, check]);

    React.useEffect(()=>{
        setIsSelectAll(true);
        setCheck(checkAll);
    },[checkAll]);


    // 옵션변경 버튼 클릭해서 모달창 열기
    const onClickOptionChangeBtn=(e, record)=>{
        e.preventDefault();
        if(isOptionModal===true){
            setIsOptionModal(false);
        }
        else{
            const result = cart.filter((item)=>(item.상품코드&&item.사이즈)===(record.상품코드&&record.사이즈));
            // console.log(result);
            setOptionChange(result);
            setIsOptionModal(true);
        }
    }

    
    // 옵션변경 모달창 확인 버튼 클릭
    const onClickOptChangeSave=(e)=>{
        e.preventDefault();
        setIsOptionModal(false);
    }


    return (
        <>
            <div id='cart'>
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h1>장바구니</h1>
                            <ul>
                                <li className='on'>01. 장바구니</li>
                                <li>02. 주문서작성/결제</li>
                                <li>03. 주문완료</li>
                            </ul>
                        </div>
                        <div className="delivery-category">
                            <ul>
                                <li id='defaultDelivery'><a href="#defaultDelivery">일반배송 <span>({cart.length})</span></a></li>
                                <li><a href="#artDelivery">아트배송 <span>(0)</span></a></li>
                            </ul>
                        </div>
                        <div className="content">
                            {
                                cart.length===0 ?
                                    (
                                        <p className='empty-box'>장바구니에 담긴 상품이 없습니다.</p>
                                    )
                                    :
                                    (
                                        <div className="inner-container">
                                            <ul>
                                                <li onClick={onClickPickUp} className={isPickUp?'':'on'}><a href="!#">전체 <span>{cart.length}</span>개</a></li>
                                                <li onClick={onClickPickUp} className={isPickUp?'on':''}><a href="!#">ABC-MART 매장 픽업 가능상품</a></li>
                                            </ul>
                                            <div className="cart-box">
                                                <div className="cart-top-box">
                                                    <span className='all-select-btn'>
                                                        <input type="checkbox" id='allSelect' checked={check.length===cart.length} onClick={onClickSelectAll} readOnly />
                                                        <label htmlFor="allSelect">전체선택</label>
                                                    </span>
                                                    <div className="right-box">
                                                        <span>매장픽업 가능상품</span>
                                                        <span><em>가능상품</em></span>
                                                        <button></button>
                                                    </div>
                                                </div>
                                                <div className="cart-middle-box">
                                                    <div className="cart-header">
                                                        <div className="left-box">
                                                            <span><strong className={isPickUp?'':'on'}>일반 </strong><strong className={isPickUp?'on':''}>ABC-MART </strong>배송 상품 </span>
                                                            <span><em>{cart.length}</em>개</span>
                                                        </div>
                                                        <span>무료배송</span>
                                                    </div>
                                                    <div className="cart-container">
                                                        <table>
                                                            <tbody>
                                                                {
                                                                    cart.map((item, idx)=>{
                                                                        return(
                                                                            <tr key={idx}>
                                                                                <td className='col1'>
                                                                                    <span className='select-btn'>
                                                                                        <input onChange={onChangeCheck} checked={check.includes(item.상품코드+item.사이즈)} type="checkbox" name='select' id='select1' value={item.상품코드+item.사이즈} />
                                                                                    </span>
                                                                                </td>
                                                                                <td className='col2'>
                                                                                    <div className="product-box">
                                                                                        <figure>
                                                                                            <a href="!#">
                                                                                                <img src={item.이미지} alt="" />
                                                                                            </a>
                                                                                        </figure>
                                                                                        <div className="information">
                                                                                            <h3>
                                                                                                {item.제조사}
                                                                                                <span className='icon-box'>
                                                                                                    <i className='pickup'></i>
                                                                                                    <i className='art-delivery'></i>
                                                                                                </span>
                                                                                            </h3>
                                                                                            <a href="!#">
                                                                                                {item.제품명}
                                                                                                <br />
                                                                                                {item.색상}
                                                                                            </a>
                                                                                            <p>
                                                                                                <span>{item.사이즈}</span>
                                                                                                <button onClick={(e)=>onClickOptionChangeBtn(e, item)}>옵션변경</button>
                                                                                            </p>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td className='col3'>
                                                                                    <span>
                                                                                        <a onClick={(e)=>onClickSub(e,item)} className='sub-btn' href="!#"><em></em></a>
                                                                                        <input type="number" value={item.수량} readOnly/>
                                                                                        <a onClick={(e)=>onClickAdd(e,item)} className='add-btn' href="!#"><em></em></a>
                                                                                    </span>
                                                                                    <button>변경</button>
                                                                                </td>
                                                                                <td className='col4'>
                                                                                    <span className='point'>{((item.총결제금액)*0.01).toLocaleString('ko-KR')}P</span>
                                                                                    <p>
                                                                                        통합멤버십 회원 가입 시
                                                                                        <br />
                                                                                        예상적립 포인트
                                                                                    </p>
                                                                                </td>
                                                                                <td className='col5'>
                                                                                    <p>
                                                                                        <s className='cost-price'>{(item.가격*item.수량).toLocaleString('ko-KR')}<em>원</em></s>
                                                                                        <strong className='discount-price'>{(item.총결제금액).toLocaleString('ko-KR')}<em>원</em></strong>
                                                                                        <span></span>
                                                                                    </p>
                                                                                    <button>쿠폰적용</button>
                                                                                </td>
                                                                                <td className='col6'>
                                                                                    <button className='buy-btn'>바로구매</button>
                                                                                    <button onClick={(e)=>onClickDel(e, item)} className='delete-btn'><span>삭제</span></button>
                                                                                </td>
                                                                            </tr>
                                                                        )
                                                                    })
                                                                }
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="cart-footer">
                                                        <div className="cart-btn-box">
                                                            <button onClick={onClickSelectDelete} disabled={!isSelectDel} className='select-delete-btn'>선택 삭제</button>
                                                            <button className='change-delivery-btn'>배송변경</button>
                                                            <button className='end-delete-btn'>품절/판매종료 삭제</button>
                                                        </div>
                                                        <p>비로그인 상태에서 장바구니에 담긴 상품은 저장되지 않습니다.</p>
                                                    </div>
                                                </div>
                                                <div className="cart-bottom-box">
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td className='col1'>
                                                                    <p>
                                                                        <span className='order-price'>주문금액</span>
                                                                        <span className='order-price-value'>{(주문금액).toLocaleString('ko-KR')}<em>원</em></span>
                                                                    </p>
                                                                </td>
                                                                <td className='col2'>
                                                                    <p>
                                                                        <span className='total-discount-price'>총 할인금액</span>
                                                                        <span className='total-discount-price-value'>{(총할인금액).toLocaleString('ko-KR')}<em>원</em></span>
                                                                    </p>
                                                                </td>
                                                                <td className='col3'>
                                                                    <p>
                                                                        <span className='expected-payment-amount'>결제예정금액</span>
                                                                        <span className='expected-payment-amount-value'>{(결제예정금액).toLocaleString('ko-KR')}<em>원</em></span>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                        <tfoot>
                                                            <tr>
                                                                <td className='col1'>
                                                                    <p>
                                                                        <span className='product-price'>상품금액</span>
                                                                        <span className='product-price-value'>{(상품금액).toLocaleString('ko-KR')}<em>원</em></span>
                                                                    </p>
                                                                    <p>
                                                                        <span className='delivery-charge'>추가 배송비</span>
                                                                        <span className='delivery-charge-value'>{(추가배송비).toLocaleString('ko-KR')}<em>원</em></span>
                                                                    </p>
                                                                </td>
                                                                <td className='col2'>
                                                                    <p>
                                                                        <span className='product-discount'>상품할인</span>
                                                                        <span className='product-discount-value'>{(상품할인).toLocaleString('ko-KR')}<em>원</em></span>
                                                                    </p>
                                                                    <p>
                                                                        <span className='promotion'>프로모션</span>
                                                                        <span className='promotion-value'>{(프로모션).toLocaleString('ko-KR')}<em>원</em></span>
                                                                    </p>
                                                                </td>
                                                                <td className='col3'>
                                                                    <p>
                                                                        <span className='expected-point'>예상적립 포인트</span>
                                                                        <span className='expected-point-value'>{(예상적립포인트).toLocaleString('ko-KR')}<em>P</em></span>
                                                                    </p>
                                                                    <p className='point-text'>- 통합멤버십 회원 가입시 적립예정 포인트</p>
                                                                </td>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
                                                </div>
                                                <div className="main-button-box">
                                                    <button onClick={onClickKeepShopping} className='keep-shopping'>계속 쇼핑하기</button>
                                                    <button className='select-product-order'>일반배송 선택상품 주문하기</button>
                                                    <button className='all-product-order'>일반배송 전체상품 주문하기</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                            }
                            <div className="notice-box">
                                <h2>상품 주문 전 꼭 확인해주세요!</h2>
                                <ul>
                                    <li>A-RT 배송 상품은 ABC-MART 온라인 물류센터 또는 ABC-MART 매장에서 발송되는 상품입니다</li>
                                    <li>On the spot배송 상품은 ABC-MART 온라인 물류센터 또는 On the spot 매장에서 발송되는 상품입니다.</li>
                                    <li>매장에서 발송되는 경우 온라인 물류센터 상품보다 평균 배송기간이 2~3일 정도 더 소요될 수 있습니다.</li>
                                    <li>발송 매장 정보는 주문 완료 후 ‘마이페이지 &gt; 쇼핑내역 &gt; 주문/배송 현황조회’에서 확인 가능합니다.</li>
                                    <li>업체 배송 상품의 경우 업체별 배송비 정책에 따라 배송비가 부과됩니다.</li>
                                    <li>업체 배송 상품은 매장 픽업, 편의점 픽업이 불가능합니다.</li>
                                    <li>2개 이상의 상품 주문 시 재고 여부에 따라 분리 발송될 수 있습니다.</li>
                                    <li>매장 픽업이 불가능한 상품을 포함하여 주문할 경우 주문서 작성/결제 페이지에서 매장픽업 선택이 불가능합니다.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="art-delivery-content">
                            <div className="delivery-category">
                                <ul>
                                    <li><a href="#defaultDelivery">일반배송 <span>({cart.length})</span></a></li>
                                    <li id='artDelivery'><a href="#artDelivery">아트배송 <span>(0)</span></a></li>
                                </ul>
                            </div>
                            <div className="content">
                                <p className='empty-box'>장바구니에 담긴 상품이 없습니다.</p>
                                <div className="notice-box">
                                    <h2>아트배송 상품 주문 전 꼭 확인해주세요!</h2>
                                    <ul>
                                        <li>월요일 ~ 금요일 21시 이전 주문 시 익일 7시 이전에 도착합니다.(연휴 및 공휴일은 발송 불가) 금요일 21시 이후 또는 주말에는 서비스 이용이 불가합니다.</li>
                                        <li>아트배송이 가능한 주문 수량이 마감되는 경우 또는 기상상태에 따라 발송이 지연되거나 불가할 수 있습니다.</li>
                                        <li>당사 사정에 따라 아트배송이 불가능한 날이 있을 수 있으며, 사전에 공지 드립니다.</li>
                                        <li>아트배송은 한 번에 주문 가능한 기준 규격에 따라 여러 개의 상품 구매 시 기준 규격을 초과할 경우 주문이 불가능할 수 있습니다.</li>
                                        <li>배송 가능한 상품의 재고가 변경될 수 있습니다.</li>
                                        <li>아트배송 주문 시 결제 수단은 실시간 결제만 가능합니다. (무통장입금, 편의점결제 불가)</li>
                                        <li>아트배송 주문 시 일반 무료배송 쿠폰은 적용 불가합니다.</li>
                                        <li>아트배송 주문 후 상품 옵션 및 배송지 정보 변경이 불가합니다.</li>
                                        <li>아트배송 주문 상품의 도착 예상 시간은 익일 7시이전 입니다.</li>
                                        <li>상품을 보관하기 어려운 배송지의 경우 자동 반송 처리될 수 있으며, 반송 시 배송비는 고객 부담입니다.</li>
                                        <li>(기숙사, 상가 등 심야 출입 제한 또는 분실 우려가 있는 경우 배송불가)</li>
                                        <li>선물하기 주문 시에는 아트배송이 불가합니다.</li>
                                        <li>배송 완료 후 교환/반품은 일반배송과 동일한 방식으로 진행됩니다.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="recent-view-box">
                            <div className="inner-container">
                                <ul>
                                    <li onClick={onClickRecentView} className={isRecentView?'':'on'}><a href="!#">최근 본 상품</a></li>
                                    <li onClick={onClickRecentView} className={isRecentView?'on':''}><a href="!#">내가 찜한 상품</a></li>
                                </ul>
                            </div>
                            <p className='empty-box'>최근 본 상품이 없습니다.</p>
                        </div>
                    </div>
                </div>
            </div>
            {
                isOptionModal &&
                    <div id='optionChangeModal'>
                        <div className="option-container">
                            {
                                optionChange.map((item, idx)=>{
                                    return(
                                        <div className="option-gap" key={idx}>
                                            <div className="option-title">
                                                <h2>옵션변경</h2>
                                                <button onClick={(e)=>onClickOptionChangeBtn(e, item)}><span></span></button>
                                            </div>
                                            <div className="option-content">
                                                <div className='inner-box'>
                                                    <div className="product-box">
                                                        <figure>
                                                            <img src={item.이미지} alt="" />
                                                        </figure>
                                                        <div className="information">
                                                            <h3>{item.제조사}</h3>
                                                            <p>{item.제품명}</p>
                                                            <span>{item.사이즈}</span>
                                                        </div>
                                                    </div>
                                                    <div className="size-box">
                                                        <span>사이즈</span>
                                                        <div className="select-box">
                                                            <select name="size-menu" id="sizeMenu" readOnly>
                                                                <option value="선택하세요.">선택하세요.</option>
                                                                <option value="220">220</option>
                                                                <option value="230">230</option>
                                                                <option value="240">240</option>
                                                                <option value="250">250</option>
                                                                <option value="260">260</option>
                                                                <option value="270">270</option>
                                                                <option value="280">280</option>
                                                            </select>
                                                            <span className='select-arrow'></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="option-button-box">
                                                    <button onClick={(e)=>onClickOptChangeSave(e, item)}>확인</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
            }
        </>
    );
};
