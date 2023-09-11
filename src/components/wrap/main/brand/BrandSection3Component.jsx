import React from 'react';
import './scss/brandSection3.scss'
import $ from 'jquery';
import { Link } from 'react-router-dom';

export default function BrandSection3Component({abcGrand, adidas, 아디다스ABC, 아디다스GRAND, nike, 나이키ABC, 나이키GRAND,  converse, 컨버스ABC, 컨버스GRAND, vans, 반스ABC, 반스GRAND, newbalance, 뉴발란스ABC, 뉴발란스GRAND, setViewProductDetail, dkey}) {

    //좌측박스 토글
    const [filter, setFilter] = React.useState({'카테고리':true});

    const onClickOn =(value)=>{
        setFilter((prevFilter)=>({
            ...prevFilter,
            [value]:!prevFilter[value]
        }));

    };

    const onClickFilter=()=>{
        setCategory('전체');


        setFilter({'카테고리':true});
        setSort('신상품순');
        setDelivery(false);
        setPickup(false);
    }

    //줌인 줌아웃 
    const [zoom, setZoom] = React.useState(false);

    const onChangeZoom =(e)=>{
        const targetValue = e.target.value;

        setPageNumber(1);
        setCnt(1);

        if(targetValue==='zoomOut'){
            setZoom(false);
            
        }
        else if(targetValue==='zoomIn'){
            setZoom(true);
            
        }
    }

    //정렬
    const[sort, setSort] = React.useState('신상품순');
    const[category, setCategory] = React.useState('전체');

    const[sortAbcAdidas, setSortAbcAdidas] =React.useState(아디다스ABC)
    const[sortGrandcAdidas, setSortGrandAdidas] =React.useState(아디다스GRAND)

    const[sortAbcNike, setSortAbcNike] =React.useState(나이키ABC)
    const[sortGrandNike, setSortGrandNike] =React.useState(나이키GRAND)

    const[sortAbcConverse, setSortAbcConverse] =React.useState(컨버스ABC)
    const[sortGrandConverse, setSortGrandConverse] =React.useState(컨버스GRAND)

    const[sortAbcVans, setSortAbcVans] =React.useState(반스ABC)
    const[sortGrandVans, setSortGrandVans] =React.useState(반스GRAND)

    const[sortAbcNewbalance, setSortAbcNewbalance] =React.useState(뉴발란스ABC)
    const[sortGrandNewbalance, setSortGrandNewbalance] =React.useState(뉴발란스GRAND)

    const[sortBox, setSortBox] =React.useState(false);

    const onClickBox=()=>{
        setSortBox(!sortBox);
    };

    const onClickSort=(order)=>{
        setSort(order);
        setSortBox(false);
        setCategory('전체')
        setDelivery(false);
        setPickup(false);
        
    };

    React.useEffect(()=>{
        const selectBox = $('.select-box input');
        
        $(document).on({
            click(e){
                if(!selectBox.is(e.target)){
                    setSortBox(false);
                }
            }
        })
    })

    const onChangeCategory=(order)=>{
        setCategory(order);
        setSort('신상품순');
        setDelivery(false);
        setPickup(false);
    }

    //아트배송 & 매장픽업
    const [delivery, setDelivery] = React.useState(false)
    const [pickup, setPickup] = React.useState(false)
    
    const onChangeOrder = (e)=>{
        const targetValue = e.target.value;

        setCategory('전체')
        setSort('신상품순')

        if(targetValue==='delivery'){
            setDelivery(open=>!open);
            
        }
        else if(targetValue==='pickup'){
            setPickup(open=>!open);
        }
        
    }

    //아트배송, 매장픽업 버튼 제거
    const onClickDeliveryDel=()=>{
        setDelivery(false);
    }
    const onClickPickupDel=()=>{
        setPickup(false);
    }
    const onClickAllDel=()=>{
        setDelivery(false);
        setPickup(false);
    }

    React.useEffect(()=>{
        let arrAbcAdidas = [...아디다스ABC];
        let arrGrandAdidas = [...아디다스GRAND];

        let arrAbcNike = [...나이키ABC];
        let arrGrandNike = [...나이키GRAND];

        let arrAbcConverse = [...컨버스ABC];
        let arrGrandConverse = [...컨버스GRAND];

        let arrAbcVans = [...반스ABC];
        let arrGrandVans = [...반스GRAND];

        let arrAbcNewbalance = [...뉴발란스ABC];
        let arrGrandNewbalance = [...뉴발란스GRAND];

        if(sort==='낮은가격순'){
            arrAbcAdidas.sort((a,b)=>a.가격*(1-a.할인율) -b.가격*(1-b.할인율));
            arrGrandAdidas.sort((a,b)=>a.가격*(1-a.할인율) -b.가격*(1-b.할인율));

            arrAbcNike.sort((a,b)=>a.가격*(1-a.할인율) -b.가격*(1-b.할인율));
            arrGrandNike.sort((a,b)=>a.가격*(1-a.할인율) -b.가격*(1-b.할인율));

            arrAbcConverse.sort((a,b)=>a.가격*(1-a.할인율) -b.가격*(1-b.할인율));
            arrGrandConverse.sort((a,b)=>a.가격*(1-a.할인율) -b.가격*(1-b.할인율));

            arrAbcVans.sort((a,b)=>a.가격*(1-a.할인율) -b.가격*(1-b.할인율));
            arrGrandVans.sort((a,b)=>a.가격*(1-a.할인율) -b.가격*(1-b.할인율));

            arrAbcNewbalance.sort((a,b)=>a.가격*(1-a.할인율) -b.가격*(1-b.할인율));
            arrGrandNewbalance.sort((a,b)=>a.가격*(1-a.할인율) -b.가격*(1-b.할인율));
        }
        else if(sort==='높은가격순'){
            arrAbcAdidas.sort((a,b)=>b.가격*(1-b.할인율) -a.가격*(1-a.할인율));
            arrGrandAdidas.sort((a,b)=>b.가격*(1-b.할인율) -a.가격*(1-a.할인율));

            arrAbcNike.sort((a,b)=>b.가격*(1-b.할인율) -a.가격*(1-a.할인율));
            arrGrandNike.sort((a,b)=>b.가격*(1-b.할인율) -a.가격*(1-a.할인율));

            arrAbcConverse.sort((a,b)=>b.가격*(1-b.할인율) -a.가격*(1-a.할인율));
            arrGrandConverse.sort((a,b)=>b.가격*(1-b.할인율) -a.가격*(1-a.할인율));

            arrAbcVans.sort((a,b)=>b.가격*(1-b.할인율) -a.가격*(1-a.할인율));
            arrGrandVans.sort((a,b)=>b.가격*(1-b.할인율) -a.가격*(1-a.할인율));

            arrAbcNewbalance.sort((a,b)=>b.가격*(1-b.할인율) -a.가격*(1-a.할인율));
            arrGrandNewbalance.sort((a,b)=>b.가격*(1-b.할인율) -a.가격*(1-a.할인율));
        }
        else if(sort==='할인율 높은순'){
            arrAbcAdidas.sort((a,b)=>b.할인율 -a.할인율);
            arrGrandAdidas.sort((a,b)=>b.할인율 -a.할인율);

            arrAbcNike.sort((a,b)=>b.할인율 -a.할인율);
            arrGrandNike.sort((a,b)=>b.할인율 -a.할인율);

            arrAbcConverse.sort((a,b)=>b.할인율 -a.할인율);
            arrGrandConverse.sort((a,b)=>b.할인율 -a.할인율);

            arrAbcVans.sort((a,b)=>b.할인율 -a.할인율);
            arrGrandVans.sort((a,b)=>b.할인율 -a.할인율);

            arrAbcNewbalance.sort((a,b)=>b.할인율 -a.할인율);
            arrGrandNewbalance.sort((a,b)=>b.할인율 -a.할인율);
        }
        else if(category==='스포츠'){
            arrAbcAdidas = arrAbcAdidas.filter(item => item.카테고리 === '스포츠')
            arrGrandAdidas = arrGrandAdidas.filter(item => item.카테고리 === '스포츠')

            arrAbcNike = arrAbcNike.filter(item => item.카테고리 === '스포츠')
            arrGrandNike = arrGrandNike.filter(item => item.카테고리 === '스포츠')

            arrAbcConverse = arrAbcConverse.filter(item => item.카테고리 === '스포츠')
            arrGrandConverse = arrGrandConverse.filter(item => item.카테고리 === '스포츠')

            arrAbcVans = arrAbcVans.filter(item => item.카테고리 === '스포츠')
            arrGrandVans = arrGrandVans.filter(item => item.카테고리 === '스포츠')

            arrAbcNewbalance = arrAbcNewbalance.filter(item => item.카테고리 === '스포츠')
            arrGrandNewbalance = arrGrandNewbalance.filter(item => item.카테고리 === '스포츠')
        }
        else if(category==='운동화'){
            arrAbcAdidas = arrAbcAdidas.filter(item => item.카테고리 === '운동화')
            arrGrandAdidas = arrGrandAdidas.filter(item => item.카테고리 === '운동화')

            arrAbcNike = arrAbcNike.filter(item => item.카테고리 === '운동화')
            arrGrandNike = arrGrandNike.filter(item => item.카테고리 === '운동화')

            arrAbcConverse = arrAbcConverse.filter(item => item.카테고리 === '운동화')
            arrGrandConverse = arrGrandConverse.filter(item => item.카테고리 === '운동화')

            arrAbcVans = arrAbcVans.filter(item => item.카테고리 === '운동화')
            arrGrandVans = arrGrandVans.filter(item => item.카테고리 === '운동화')

            arrAbcNewbalance = arrAbcNewbalance.filter(item => item.카테고리 === '운동화')
            arrGrandNewbalance = arrGrandNewbalance.filter(item => item.카테고리 === '운동화')
        }
        else if(category==='샌들'){
            arrAbcAdidas = arrAbcAdidas.filter(item => item.카테고리 === '샌들')
            arrGrandAdidas = arrGrandAdidas.filter(item => item.카테고리 === '샌들')

            arrAbcNike = arrAbcNike.filter(item => item.카테고리 === '샌들')
            arrGrandNike = arrGrandNike.filter(item => item.카테고리 === '샌들')

            arrAbcConverse = arrAbcConverse.filter(item => item.카테고리 === '샌들')
            arrGrandConverse = arrGrandConverse.filter(item => item.카테고리 === '샌들')

            arrAbcVans = arrAbcVans.filter(item => item.카테고리 === '샌들')
            arrGrandVans = arrGrandVans.filter(item => item.카테고리 === '샌들')

            arrAbcNewbalance = arrAbcNewbalance.filter(item => item.카테고리 === '샌들')
            arrGrandNewbalance = arrGrandNewbalance.filter(item => item.카테고리 === '샌들')
        }
        else if(category==='캐주얼'){
            arrAbcAdidas = arrAbcAdidas.filter(item => item.카테고리 === '캐주얼')
            arrGrandAdidas = arrGrandAdidas.filter(item => item.카테고리 === '캐주얼')

            arrAbcNike = arrAbcNike.filter(item => item.카테고리 === '캐주얼')
            arrGrandNike = arrGrandNike.filter(item => item.카테고리 === '캐주얼')

            arrAbcConverse = arrAbcConverse.filter(item => item.카테고리 === '캐주얼')
            arrGrandConverse = arrGrandConverse.filter(item => item.카테고리 === '캐주얼')

            arrAbcVans = arrAbcVans.filter(item => item.카테고리 === '캐주얼')
            arrGrandVans = arrGrandVans.filter(item => item.카테고리 === '캐주얼')

            arrAbcNewbalance = arrAbcNewbalance.filter(item => item.카테고리 === '캐주얼')
            arrGrandNewbalance = arrGrandNewbalance.filter(item => item.카테고리 === '캐주얼')
        }
        else if(delivery && pickup){
            arrAbcAdidas = arrAbcAdidas.filter(item => item.뱃지2 !=="" && item.뱃지3 !== "")
            arrGrandAdidas = arrGrandAdidas.filter(item => item.뱃지2 !=="" && item.뱃지3 !== "")

            arrAbcNike = arrAbcNike.filter(item => item.뱃지2 !=="" && item.뱃지3 !== "")
            arrGrandNike = arrGrandNike.filter(item => item.뱃지2 !=="" && item.뱃지3 !== "")

            arrAbcConverse = arrAbcConverse.filter(item => item.뱃지2 !=="" && item.뱃지3 !== "")
            arrGrandConverse = arrGrandConverse.filter(item => item.뱃지2 !=="" && item.뱃지3 !== "")

            arrAbcVans = arrAbcVans.filter(item => item.뱃지2 !=="" && item.뱃지3 !== "")
            arrGrandVans = arrGrandVans.filter(item => item.뱃지2 !=="" && item.뱃지3 !== "")

            arrAbcNewbalance = arrAbcNewbalance.filter(item => item.뱃지2 !=="" && item.뱃지3 !== "")
            arrGrandNewbalance = arrGrandNewbalance.filter(item => item.뱃지2 !=="" && item.뱃지3 !== "")
        }
        else if(delivery){
            arrAbcAdidas = arrAbcAdidas.filter(item => item.뱃지3 !== "")
            arrGrandAdidas = arrGrandAdidas.filter(item => item.뱃지3 !== "")

            arrAbcNike = arrAbcNike.filter(item => item.뱃지3 !== "")
            arrGrandNike = arrGrandNike.filter(item => item.뱃지3 !== "")

            arrAbcConverse = arrAbcConverse.filter(item => item.뱃지3 !== "")
            arrGrandConverse = arrGrandConverse.filter(item => item.뱃지3 !== "")

            arrAbcVans = arrAbcVans.filter(item => item.뱃지3 !== "")
            arrGrandVans = arrGrandVans.filter(item => item.뱃지3 !== "")

            arrAbcNewbalance = arrAbcNewbalance.filter(item => item.뱃지3 !== "")
            arrGrandNewbalance = arrGrandNewbalance.filter(item => item.뱃지3 !== "")
        }
        else if(pickup){
            arrAbcAdidas = arrAbcAdidas.filter(item => item.뱃지2 !== "")
            arrGrandAdidas = arrGrandAdidas.filter(item => item.뱃지2 !== "")

            arrAbcNike = arrAbcNike.filter(item => item.뱃지2 !== "")
            arrGrandNike = arrGrandNike.filter(item => item.뱃지2 !== "")

            arrAbcConverse = arrAbcConverse.filter(item => item.뱃지2 !== "")
            arrGrandConverse = arrGrandConverse.filter(item => item.뱃지2 !== "")

            arrAbcVans = arrAbcVans.filter(item => item.뱃지2 !== "")
            arrGrandVans = arrGrandVans.filter(item => item.뱃지2 !== "")

            arrAbcNewbalance = arrAbcNewbalance.filter(item => item.뱃지2 !== "")
            arrGrandNewbalance = arrGrandNewbalance.filter(item => item.뱃지2 !== "")
        }
        
        setPageNumber(1);
        
        setSortAbcAdidas(arrAbcAdidas);
        setSortGrandAdidas(arrGrandAdidas);

        setSortAbcNike(arrAbcNike);
        setSortGrandNike(arrGrandNike);

        setSortAbcConverse(arrAbcConverse);
        setSortGrandConverse(arrGrandConverse);

        setSortAbcVans(arrAbcVans);
        setSortGrandVans(arrGrandVans);

        setSortAbcNewbalance(arrAbcNewbalance);
        setSortGrandNewbalance(arrGrandNewbalance);

    },[아디다스ABC, 아디다스GRAND, 나이키ABC, 나이키GRAND, 컨버스ABC, 컨버스GRAND, 반스ABC, 반스GRAND, 뉴발란스ABC, 뉴발란스GRAND, sort, category, delivery, pickup])

    


    

    


    //페이지 버튼

    //목록개수
    const [list] = React.useState(9); 
    const [zoomInList] = React.useState(6);  

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

        window.scrollTo({
            top:1330
        })

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


    //상태 초기화
    React.useEffect(()=>{
        if(abcGrand){
            setZoom(false);
            setPageNumber(1);
            setCnt(1);
            setDelivery(false);
            setPickup(false);
            setFilter({'카테고리':true});
            setSort('신상품순');
            setCategory('전체');
        }
        else {
            setZoom(false);
            setPageNumber(1);
            setCnt(1);
            setDelivery(false);
            setPickup(false);
            setFilter({'카테고리':true});
            setSort('신상품순');
            setCategory('전체');
        }
    },[abcGrand, nike, adidas])


    // 클릭 시 상품화면으로 이동 및 사진 적용
    const onClickProductDetailList=(e, item)=>{
        e.preventDefault();

        let obj = {
            상품코드: item.product_code,
            이미지: item.이미지,
            카테고리: item.카테고리,
            제조사: item.제조사,
            제품명: item.제품명,
            가격: item.가격,
            할인율: item.할인율,
            뱃지1: item.뱃지1,
            뱃지2: item.뱃지2,
            뱃지3: item.뱃지3,
            뱃지4: item.뱃지4,
            추천: item.추천,
            배경: item.배경,
            색상: item.색상
        }
    
        console.log(item);
        setViewProductDetail(obj);
        window.location.pathname='/PRODUCTDETAIL';
    }






    return (
        <section id='brandSection3'>
            
            <div className="container">
                <div className="gap">
                    <div className="content" >
                        <div className="left">
                            
                            <div className="left-content">
                                <div className="left-title">
                                    <h2>FILTER</h2>
                                    <button onClick={onClickFilter} title='초기화'><span><img src="./img/brand/btn_icon_reset.png" alt="" /></span><h3>초기화</h3></button>
                                </div>
                                <dl>
                                    <dt onClick={()=>onClickOn('카테고리')} className={filter['카테고리']?"on":""}>카테고리<span><img src="./img/brand/adidas/icon_down.png" alt="" /></span></dt>
                                    <dd className={filter['카테고리']?"on":""}>
                                        <ul>
                                            <li className='category-li'>
                                                <label htmlFor="checkAll">
                                                    전체
                                                    <input onChange={()=>onChangeCategory('전체')} checked={category==='전체'} type="radio" name='checkCategory' id='checkAll'  />
                                                </label>
                                            </li>
                                            <li className='category-li'>
                                                <label htmlFor="checkSports">
                                                    스포츠
                                                    <input onChange={()=>onChangeCategory('스포츠')} checked={category==='스포츠'} type="radio" name='checkCategory' id='checkSports'/>
                                                </label>
                                            </li>
                                            <li className='category-li'>
                                                <label htmlFor="checkRunning">
                                                    운동화
                                                    <input onChange={()=>onChangeCategory('운동화')} checked={category==='운동화'} type="radio" name='checkCategory' id='checkRunning'/>
                                                </label>
                                            </li>
                                            
                                            <li className='category-li'>
                                                <label htmlFor="checkSandal">
                                                    샌들
                                                    <input onChange={()=>onChangeCategory('샌들')} checked={category==='샌들'} type="radio" name='checkCategory' id='checkSandal'/>
                                                </label>
                                            </li>
                                            <li className='category-li'>
                                                <label htmlFor="checkCasual">
                                                    캐주얼
                                                    <input onChange={()=>onChangeCategory('캐주얼')} checked={category==='캐주얼'} type="radio" name='checkCategory' id='checkCasual'/>
                                                </label>
                                            </li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt onClick={()=>onClickOn('성별')} className={filter['성별']?"on":""}>성별<span><img src="./img/brand/adidas/icon_down.png" alt="" /></span></dt>
                                    <dd className={filter['성별']?"on":""}>
                                        <ul>
                                            <li className='gender-li'>
                                                
                                                <input id='MEN' type="checkbox"/>
                                                
                                                <label htmlFor="MEN">MEN </label>
                                            </li>
                                            <li className='gender-li'>
                                                <input id='WOMEN' type="checkbox"/>
                                                <label htmlFor="WOMEN">WOMEN </label>
                                            </li>
                                            <li className='gender-li'>
                                                <input id='KIDS' type="checkbox"/>
                                                <label htmlFor="KIDS">KIDS </label>
                                            </li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt onClick={()=>onClickOn('사이즈')} className={filter['사이즈']?"on":""}>사이즈<span><img src="./img/brand/adidas/icon_down.png" alt="" /></span></dt>
                                    <dd className={filter['사이즈']?"on":""}>
                                        <ul>
                                            <li className='size-li'>
                                                <input type="checkbox" name='size120' id='size120' />
                                                <label htmlFor="size120">120</label>
                                            </li>
                                            <li className='size-li'>
                                                <input type="checkbox" name='size130' id='size130' />
                                                <label htmlFor="size130">130</label>
                                            </li>
                                            <li className='size-li'>
                                                <input type="checkbox" name='size140' id='size140' />
                                                <label htmlFor="size140">140</label>
                                            </li>
                                            <li className='size-li'>
                                                <input type="checkbox" name='size150' id='size150' />
                                                <label htmlFor="size150">150</label>
                                            </li>
                                            <li className='size-li'>
                                                <input type="checkbox" name='size160' id='size160' />
                                                <label htmlFor="size160">160</label>
                                            </li>
                                            <li className='size-li'>
                                                <input type="checkbox" name='size170' id='size170' />
                                                <label htmlFor="size170">170</label>
                                            </li>
                                            <li className='size-li'>
                                                <input type="checkbox" name='size180' id='size180' />
                                                <label htmlFor="size180">180</label>
                                            </li>
                                            <li className='size-li'>
                                                <input type="checkbox" name='size190' id='size190' />
                                                <label htmlFor="size190">190</label>
                                            </li>
                                            <li className='size-li'>
                                                <input type="checkbox" name='size200' id='size200' />
                                                <label htmlFor="size200">200</label>
                                            </li>
                                            <li className='size-li'>
                                                <input type="checkbox" name='size210' id='size210' />
                                                <label htmlFor="size210">210</label>
                                            </li>
                                            <li className='size-li'>
                                                <input type="checkbox" name='size215' id='size215' />
                                                <label htmlFor="size215">215</label>
                                            </li>
                                            <li className='size-li'>
                                                <input type="checkbox" name='size220' id='size220' />
                                                <label htmlFor="size220">220</label>
                                            </li>
                                            <li className='size-li'>
                                                <input type="checkbox" name='size225' id='size225' />
                                                <label htmlFor="size225">225</label>
                                            </li>
                                            <li className='size-li'>
                                                <input type="checkbox" name='size230' id='size230' />
                                                <label htmlFor="size230">230</label>
                                            </li>
                                            <li className='size-li'>
                                                <input type="checkbox" name='size235' id='size235' />
                                                <label htmlFor="size235">235</label>
                                            </li>
                                            <li className='size-li'>
                                                <input type="checkbox" name='size240' id='size240' />
                                                <label htmlFor="size240">240</label>
                                            </li>
                                            <li className='size-li'>
                                                <input type="checkbox" name='size245' id='size245' />
                                                <label htmlFor="size245">245</label>
                                            </li>
                                            <li className='size-li'>
                                                <input type="checkbox" name='size250' id='size250' />
                                                <label htmlFor="size250">250</label>
                                            </li>
                                            <li className='size-li'>
                                                <input type="checkbox" name='size255' id='size255' />
                                                <label htmlFor="size255">255</label>
                                            </li>
                                            <li className='size-li'>
                                                <input type="checkbox" name='size260' id='size260' />
                                                <label htmlFor="size260">260</label>
                                            </li>
                                            <li className='size-li'>
                                                <input type="checkbox" name='size265' id='size265' />
                                                <label htmlFor="size265">265</label>
                                            </li>
                                            <li className='size-li'>
                                                <input type="checkbox" name='size270' id='size270' />
                                                <label htmlFor="size270">270</label>
                                            </li>
                                            <li className='size-li'>
                                                <input type="checkbox" name='size275' id='size275' />
                                                <label htmlFor="size275">275</label>
                                            </li>
                                            <li className='size-li'>
                                                <input type="checkbox" name='size280' id='size280' />
                                                <label htmlFor="size280">280</label>
                                            </li>
                                            <li className='size-li'>
                                                <input type="checkbox" name='size285' id='size285' />
                                                <label htmlFor="size285">285</label>
                                            </li>
                                            <li className='size-li'>
                                                <input type="checkbox" name='size290' id='size290' />
                                                <label htmlFor="size290">290</label>
                                            </li>
                                            <li className='size-li'>
                                                <input type="checkbox" name='size295' id='size295' />
                                                <label htmlFor="size295">295</label>
                                            </li>
                                            <li className='size-li'>
                                                <input type="checkbox" name='size300' id='size300' />
                                                <label htmlFor="size300">300</label>
                                            </li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt onClick={()=>onClickOn('색상')} className={filter['색상']?"on":""}>색상<span><img src="./img/brand/adidas/icon_down.png" alt="" /></span></dt>
                                    <dd className={filter['색상']?"on":""}>
                                        <ul>
                                            <li className='color-li'>                                                
                                                <label htmlFor="white">
                                                    <input type="checkbox" name='white' id='white' />
                                                </label>
                                            </li>
                                            <li className='color-li'>                                                
                                                <label htmlFor="black">
                                                    <input type="checkbox" name='black' id='black' />
                                                </label>
                                            </li>
                                            <li className='color-li'>                                                
                                                <label htmlFor="color">
                                                    <input type="checkbox" name='color' id='color' />
                                                </label>
                                            </li>
                                        </ul>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt onClick={()=>onClickOn('가격')} className={filter['가격']?"on":""}>가격<span><img src="./img/brand/adidas/icon_down.png" alt="" /></span></dt>
                                    <dd className={filter['가격']?"on":""}>
                                        <ul>
                                            <li className='price-li'>
                                                
                                                <input id='price1' type="checkbox"/>
                                                
                                                <label htmlFor="price1"> ~ 10,000원</label>
                                            </li>
                                            <li className='price-li'>
                                                <input id='price2' type="checkbox"/>
                                                <label htmlFor="price2">~ 50,000원 </label>
                                            </li>
                                            <li className='price-li'>
                                                <input id='price3' type="checkbox"/>
                                                <label htmlFor="price3">~ 100,000원 </label>
                                            </li>
                                            <li className='price-li'>
                                                <input id='price4' type="checkbox"/>
                                                <label htmlFor="price4">~ 150,000원 </label>
                                            </li>
                                            <li className='price-li'>
                                                <input id='price5' type="checkbox"/>
                                                <label htmlFor="price5">~ 200,000원 </label>
                                            </li>
                                            <li className='price-li'>
                                                <input id='price6' type="checkbox"/>
                                                <label htmlFor="price6">~ 250,000원 </label>
                                            </li>
                                        </ul>
                                    </dd>
                                </dl>
                            </div>                            
                        </div>
                        <div className="right">
                            <div className="right-title">
                                <ul>
                                    <li>
                                        <label htmlFor="delivery"><input onChange={onChangeOrder} id='delivery' type="checkbox" value={'delivery'} checked={delivery}/><img src="./img/brand/filter_chk_art_delivery.png" alt="" /></label>
                                        <label htmlFor="pickup"><input onChange={onChangeOrder} id='pickup' type="checkbox" value={'pickup'} checked={pickup}/>매장픽업</label>
                                        
                                    </li>
                                    <li>
                                        <div className="select-box">
                                            <input onClick={onClickBox} type="text"  value={sort} readOnly/>
                                            <span className={`${sortBox?'on':''}`}><img src="./img/brand/select_icon_arrow_down.png" alt="" /></span>
                                            <dl className={`${sortBox?'on':''}`}>
                                                <dd className={`${sort==='신상품순'?'on':''}`} onClick={()=>onClickSort('신상품순')}>신상품순</dd>
                                                <dd className={`${sort==='낮은가격순'?'on':''}`} onClick={()=>onClickSort('낮은가격순')}>낮은가격순</dd>
                                                <dd className={`${sort==='높은가격순'?'on':''}`} onClick={()=>onClickSort('높은가격순')}>높은가격순</dd>
                                                <dd className={`${sort==='할인율 높은순'?'on':''}`} onClick={()=>onClickSort('할인율 높은순')}>할인율 상품순</dd>
                                                <dd className={`${sort==='베스트상품순'?'on':''}`} onClick={()=>onClickSort('베스트상품순')}>베스트상품순</dd>                                                
                                                <dd className={`${sort==='상품평순'?'on':''}`} onClick={()=>onClickSort('상품평순')}>상품평순</dd>
                                            </dl>
                                        </div>
                                        <div className="radio-box">
                                            <input title='3열 보기' onChange={onChangeZoom} type="radio" name='zoom' className='zoomOut' checked={!zoom} value={'zoomOut'}/>
                                            <input title='2열 보기' onChange={onChangeZoom} type="radio" name='zoom' className='zoomIn'  checked={zoom} value={'zoomIn'}/>
                                        </div>                                        
                                    </li>
                                </ul>
                            </div>
                            
                            <div className={`title-inner ${delivery||pickup?'on':''}`}>
                                <ul>
                                    <li>
                                        {delivery &&<button className='inner-btn1'onClick={onClickDeliveryDel}>아트배송<img src="./img/brand/btn_icon_filter_icon_del.png" alt="" /></button>}
                                        {pickup &&<button className='inner-btn1'onClick={onClickPickupDel}>매장픽업<img src="./img/brand/btn_icon_filter_icon_del.png" alt="" /></button>}
                                    </li>
                                    <li>{(delivery||pickup) && <button className='inner-btn2'onClick={onClickAllDel}><img src="./img/brand/btn_icon_filter_icon_reset.png" alt="" />전체삭제</button>}</li>
                                </ul>
                            </div>

                            {adidas &&
                            <div className="right-content">
                            {abcGrand?
                                    (
                                        <>
                                        {
                                            !zoom?
                                            (
                                                <>
                                                <p>총 <strong>{sortAbcAdidas.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    { (sortAbcAdidas).map((item,idx)=>{
                                                        if( Math.ceil((idx+1)/list) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} dkey={idx}>
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>                                                                
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>} 
                                                                            {(item.할인율)!==0 && 
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{(item.할인율*100)}%]</em></strong>
                                                                            </>
                                                                            }
                                                                        </h2>
                                                                        <div className="badge-box">
                                                                                {(item.뱃지1) && <span><img src={item.뱃지1} alt="" /></span>}
                                                                                {(item.뱃지2) &&<span><img src={item.뱃지2} alt="" /></span>}
                                                                                {(item.뱃지3) &&<span><img src={item.뱃지3} alt="" /></span>}
                                                                                {(item.뱃지4) &&<span><img src={item.뱃지4} alt="" /></span>}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                
                                                                <div className="inner-box">
                                                                        <div className="inner-row1">
                                                                            <dl>
                                                                                <dd>220</dd>
                                                                                <dd>225</dd>
                                                                                <dd>230</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                            </dl>
                                                                        </div>
                                                                        <div className="inner-row2">
                                                                            <div className="inner-left">
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />                                                                    
                                                                            </div>
                                                                            <div className="inner-right">
                                                                                <button>바로구매</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                            </li>
                                                        )
                                                        }
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortAbcAdidas.length/list)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortAbcAdidas.length/list/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        :
                                            (
                                                <>
                                                <p>총 <strong>{sortAbcAdidas.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    {sortAbcAdidas.map((item,idx)=>{                                                
                                                        if( Math.ceil((idx+1)/zoomInList) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} dkey={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                            {(item.할인율)!==0 &&
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{(item.할인율*100)}%]</em></strong>
                                                                            </>
                                                                            }
                                                                        </h2>
                                                                        <div className="badge-box">
                                                                                {(item.뱃지1) && <span><img src={item.뱃지1} alt="" /></span>}
                                                                                {(item.뱃지2) &&<span><img src={item.뱃지2} alt="" /></span>}
                                                                                {(item.뱃지3) &&<span><img src={item.뱃지3} alt="" /></span>}
                                                                                {(item.뱃지4) &&<span><img src={item.뱃지4} alt="" /></span>}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <div className="inner-box">
                                                                        <div className="inner-row1">
                                                                            <dl>
                                                                                <dd>220</dd>
                                                                                <dd>225</dd>
                                                                                <dd>230</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                            </dl>
                                                                        </div>
                                                                        <div className="inner-row2">
                                                                            <div className="inner-left">
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />                                                                    
                                                                            </div>
                                                                            <div className="inner-right">
                                                                                <button>바로구매</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                            </li>
                                                        )
                                                        }
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortAbcAdidas.length/zoomInList)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortAbcAdidas.length/zoomInList/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        }  
                                        </> 
                                    
                                    )
                                    :
                                    (
                                        
                                        <>
                                        {
                                            !zoom?
                                            (
                                                <>
                                                <p>총 <strong>{sortGrandcAdidas.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    {sortGrandcAdidas.map((item,idx)=>{                                                
                                                        if( Math.ceil((idx+1)/list) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} dkey={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                            {(item.할인율)!==0 &&
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{(item.할인율*100)}%]</em></strong>
                                                                            </>
                                                                            }
                                                                        </h2>
                                                                        <div className="badge-box">
                                                                                {(item.뱃지1) && <span><img src={item.뱃지1} alt="" /></span>}
                                                                                {(item.뱃지2) &&<span><img src={item.뱃지2} alt="" /></span>}
                                                                                {(item.뱃지3) &&<span><img src={item.뱃지3} alt="" /></span>}
                                                                                {(item.뱃지4) &&<span><img src={item.뱃지4} alt="" /></span>}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <div className="inner-box">
                                                                        <div className="inner-row1">
                                                                            <dl>
                                                                                <dd>220</dd>
                                                                                <dd>225</dd>
                                                                                <dd>230</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                            </dl>
                                                                        </div>
                                                                        <div className="inner-row2">
                                                                            <div className="inner-left">
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />                                                                    
                                                                            </div>
                                                                            <div className="inner-right">
                                                                                <button>바로구매</button>
                                                                            </div>
                                                                        </div>
                                                                </div>
                                                            </li>
                                                        )
                                                        }
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortGrandcAdidas.length/list)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortGrandcAdidas.length/list/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        :
                                            (
                                                <>
                                                <p>총 <strong>{sortGrandcAdidas.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    {sortGrandcAdidas.map((item,idx)=>{                                                
                                                        if( Math.ceil((idx+1)/zoomInList) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} dkey={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                            {(item.할인율)!==0 &&
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{(item.할인율*100)}%]</em></strong>
                                                                            </>
                                                                            }
                                                                        </h2>
                                                                        <div className="badge-box">
                                                                                {(item.뱃지1) && <span><img src={item.뱃지1} alt="" /></span>}
                                                                                {(item.뱃지2) &&<span><img src={item.뱃지2} alt="" /></span>}
                                                                                {(item.뱃지3) &&<span><img src={item.뱃지3} alt="" /></span>}
                                                                                {(item.뱃지4) &&<span><img src={item.뱃지4} alt="" /></span>}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <div className="inner-box">
                                                                        <div className="inner-row1">
                                                                            <dl>
                                                                                <dd>220</dd>
                                                                                <dd>225</dd>
                                                                                <dd>230</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                            </dl>
                                                                        </div>
                                                                        <div className="inner-row2">
                                                                            <div className="inner-left">
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />                                                                    
                                                                            </div>
                                                                            <div className="inner-right">
                                                                                <button>바로구매</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                            </li>
                                                        )
                                                        }
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortGrandcAdidas.length/zoomInList)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortGrandcAdidas.length/zoomInList/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        }
                                        </>
                                    )
                                    }                                    
                                
                            </div>
                            }

                            {nike &&
                            <div className="right-content">
                            {abcGrand?
                                    (
                                        <>
                                        {
                                            !zoom?
                                            (
                                                <>
                                                <p>총 <strong>{sortAbcNike.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    { (sortAbcNike).map((item,idx)=>{
                                                        if( Math.ceil((idx+1)/list) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} dkey={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>                                                                
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>} 
                                                                            {(item.할인율)!==0 && 
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{(item.할인율*100)}%]</em></strong>
                                                                            </>
                                                                            }
                                                                        </h2>
                                                                        <div className="badge-box">
                                                                                {(item.뱃지1) && <span><img src={item.뱃지1} alt="" /></span>}
                                                                                {(item.뱃지2) &&<span><img src={item.뱃지2} alt="" /></span>}
                                                                                {(item.뱃지3) &&<span><img src={item.뱃지3} alt="" /></span>}
                                                                                {(item.뱃지4) &&<span><img src={item.뱃지4} alt="" /></span>}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                
                                                                <div className="inner-box">
                                                                        <div className="inner-row1">
                                                                            <dl>
                                                                                <dd>220</dd>
                                                                                <dd>225</dd>
                                                                                <dd>230</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                            </dl>
                                                                        </div>
                                                                        <div className="inner-row2">
                                                                            <div className="inner-left">
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />                                                                    
                                                                            </div>
                                                                            <div className="inner-right">
                                                                                <button>바로구매</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                            </li>
                                                        )
                                                        }
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortAbcNike.length/list)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortAbcNike.length/list/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        :
                                            (
                                                <>
                                                <p>총 <strong>{sortAbcNike.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    {sortAbcNike.map((item,idx)=>{                                                
                                                        if( Math.ceil((idx+1)/zoomInList) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} dkey={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                            {(item.할인율)!==0 &&
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{(item.할인율*100)}%]</em></strong>
                                                                            </>
                                                                            }
                                                                        </h2>
                                                                        <div className="badge-box">
                                                                                {(item.뱃지1) && <span><img src={item.뱃지1} alt="" /></span>}
                                                                                {(item.뱃지2) &&<span><img src={item.뱃지2} alt="" /></span>}
                                                                                {(item.뱃지3) &&<span><img src={item.뱃지3} alt="" /></span>}
                                                                                {(item.뱃지4) &&<span><img src={item.뱃지4} alt="" /></span>}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <div className="inner-box">
                                                                        <div className="inner-row1">
                                                                            <dl>
                                                                                <dd>220</dd>
                                                                                <dd>225</dd>
                                                                                <dd>230</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                            </dl>
                                                                        </div>
                                                                        <div className="inner-row2">
                                                                            <div className="inner-left">
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />                                                                    
                                                                            </div>
                                                                            <div className="inner-right">
                                                                                <button>바로구매</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                            </li>
                                                        )
                                                        }
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortAbcNike.length/zoomInList)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortAbcNike.length/zoomInList/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        }  
                                        </> 
                                    
                                    )
                                    :
                                    (
                                        
                                        <>
                                        {
                                            !zoom?
                                            (
                                                <>
                                                <p>총 <strong>{sortGrandNike.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    {sortGrandNike.map((item,idx)=>{                                                
                                                        if( Math.ceil((idx+1)/list) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} dkey={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                            {(item.할인율)!==0 &&
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{(item.할인율*100)}%]</em></strong>
                                                                            </>
                                                                            }
                                                                        </h2>
                                                                        <div className="badge-box">
                                                                                {(item.뱃지1) && <span><img src={item.뱃지1} alt="" /></span>}
                                                                                {(item.뱃지2) &&<span><img src={item.뱃지2} alt="" /></span>}
                                                                                {(item.뱃지3) &&<span><img src={item.뱃지3} alt="" /></span>}
                                                                                {(item.뱃지4) &&<span><img src={item.뱃지4} alt="" /></span>}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <div className="inner-box">
                                                                        <div className="inner-row1">
                                                                            <dl>
                                                                                <dd>220</dd>
                                                                                <dd>225</dd>
                                                                                <dd>230</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                            </dl>
                                                                        </div>
                                                                        <div className="inner-row2">
                                                                            <div className="inner-left">
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />                                                                    
                                                                            </div>
                                                                            <div className="inner-right">
                                                                                <button>바로구매</button>
                                                                            </div>
                                                                        </div>
                                                                </div>
                                                            </li>
                                                        )
                                                        }
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortGrandNike.length/list)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortGrandNike.length/list/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        :
                                            (
                                                <>
                                                <p>총 <strong>{sortGrandNike.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    {sortGrandNike.map((item,idx)=>{                                                
                                                        if( Math.ceil((idx+1)/zoomInList) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} dkey={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                            {(item.할인율)!==0 &&
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{(item.할인율*100)}%]</em></strong>
                                                                            </>
                                                                            }
                                                                        </h2>
                                                                        <div className="badge-box">
                                                                                {(item.뱃지1) && <span><img src={item.뱃지1} alt="" /></span>}
                                                                                {(item.뱃지2) &&<span><img src={item.뱃지2} alt="" /></span>}
                                                                                {(item.뱃지3) &&<span><img src={item.뱃지3} alt="" /></span>}
                                                                                {(item.뱃지4) &&<span><img src={item.뱃지4} alt="" /></span>}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <div className="inner-box">
                                                                        <div className="inner-row1">
                                                                            <dl>
                                                                                <dd>220</dd>
                                                                                <dd>225</dd>
                                                                                <dd>230</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                            </dl>
                                                                        </div>
                                                                        <div className="inner-row2">
                                                                            <div className="inner-left">
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />                                                                    
                                                                            </div>
                                                                            <div className="inner-right">
                                                                                <button>바로구매</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                            </li>
                                                        )
                                                        }
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortGrandNike.length/zoomInList)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortGrandNike.length/zoomInList/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        }
                                        </>
                                    )
                                    }                                    
                                
                            </div>
                            }

                            {converse &&
                            <div className="right-content">
                            {abcGrand?
                                    (
                                        <>
                                        {
                                            !zoom?
                                            (
                                                <>
                                                <p>총 <strong>{sortAbcConverse.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    { (sortAbcConverse).map((item,idx)=>{
                                                        if( Math.ceil((idx+1)/list) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} dkey={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>                                                                
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>} 
                                                                            {(item.할인율)!==0 && 
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{(item.할인율*100)}%]</em></strong>
                                                                            </>
                                                                            }
                                                                        </h2>
                                                                        <div className="badge-box">
                                                                                {(item.뱃지1) && <span><img src={item.뱃지1} alt="" /></span>}
                                                                                {(item.뱃지2) &&<span><img src={item.뱃지2} alt="" /></span>}
                                                                                {(item.뱃지3) &&<span><img src={item.뱃지3} alt="" /></span>}
                                                                                {(item.뱃지4) &&<span><img src={item.뱃지4} alt="" /></span>}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                
                                                                <div className="inner-box">
                                                                        <div className="inner-row1">
                                                                            <dl>
                                                                                <dd>220</dd>
                                                                                <dd>225</dd>
                                                                                <dd>230</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                            </dl>
                                                                        </div>
                                                                        <div className="inner-row2">
                                                                            <div className="inner-left">
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />                                                                    
                                                                            </div>
                                                                            <div className="inner-right">
                                                                                <button>바로구매</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                            </li>
                                                        )
                                                        }
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortAbcConverse.length/list)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortAbcConverse.length/list/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        :
                                            (
                                                <>
                                                <p>총 <strong>{sortAbcConverse.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    {sortAbcConverse.map((item,idx)=>{                                                
                                                        if( Math.ceil((idx+1)/zoomInList) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} dkey={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                            {(item.할인율)!==0 &&
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{(item.할인율*100)}%]</em></strong>
                                                                            </>
                                                                            }
                                                                        </h2>
                                                                        <div className="badge-box">
                                                                                {(item.뱃지1) && <span><img src={item.뱃지1} alt="" /></span>}
                                                                                {(item.뱃지2) &&<span><img src={item.뱃지2} alt="" /></span>}
                                                                                {(item.뱃지3) &&<span><img src={item.뱃지3} alt="" /></span>}
                                                                                {(item.뱃지4) &&<span><img src={item.뱃지4} alt="" /></span>}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <div className="inner-box">
                                                                        <div className="inner-row1">
                                                                            <dl>
                                                                                <dd>220</dd>
                                                                                <dd>225</dd>
                                                                                <dd>230</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                            </dl>
                                                                        </div>
                                                                        <div className="inner-row2">
                                                                            <div className="inner-left">
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />                                                                    
                                                                            </div>
                                                                            <div className="inner-right">
                                                                                <button>바로구매</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                            </li>
                                                        )
                                                        }
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortAbcConverse.length/zoomInList)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortAbcConverse.length/zoomInList/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        }  
                                        </> 
                                    
                                    )
                                    :
                                    (
                                        
                                        <>
                                        {
                                            !zoom?
                                            (
                                                <>
                                                <p>총 <strong>{sortGrandConverse.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    {sortGrandConverse.map((item,idx)=>{                                                
                                                        if( Math.ceil((idx+1)/list) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} dkey={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                            {(item.할인율)!==0 &&
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{(item.할인율*100)}%]</em></strong>
                                                                            </>
                                                                            }
                                                                        </h2>
                                                                        <div className="badge-box">
                                                                                {(item.뱃지1) && <span><img src={item.뱃지1} alt="" /></span>}
                                                                                {(item.뱃지2) &&<span><img src={item.뱃지2} alt="" /></span>}
                                                                                {(item.뱃지3) &&<span><img src={item.뱃지3} alt="" /></span>}
                                                                                {(item.뱃지4) &&<span><img src={item.뱃지4} alt="" /></span>}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <div className="inner-box">
                                                                        <div className="inner-row1">
                                                                            <dl>
                                                                                <dd>220</dd>
                                                                                <dd>225</dd>
                                                                                <dd>230</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                            </dl>
                                                                        </div>
                                                                        <div className="inner-row2">
                                                                            <div className="inner-left">
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />                                                                    
                                                                            </div>
                                                                            <div className="inner-right">
                                                                                <button>바로구매</button>
                                                                            </div>
                                                                        </div>
                                                                </div>
                                                            </li>
                                                        )
                                                        }
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortGrandConverse.length/list)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortGrandConverse.length/list/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        :
                                            (
                                                <>
                                                <p>총 <strong>{sortGrandConverse.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    {sortGrandConverse.map((item,idx)=>{                                                
                                                        if( Math.ceil((idx+1)/zoomInList) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} dkey={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                            {(item.할인율)!==0 &&
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{(item.할인율*100)}%]</em></strong>
                                                                            </>
                                                                            }
                                                                        </h2>
                                                                        <div className="badge-box">
                                                                                {(item.뱃지1) && <span><img src={item.뱃지1} alt="" /></span>}
                                                                                {(item.뱃지2) &&<span><img src={item.뱃지2} alt="" /></span>}
                                                                                {(item.뱃지3) &&<span><img src={item.뱃지3} alt="" /></span>}
                                                                                {(item.뱃지4) &&<span><img src={item.뱃지4} alt="" /></span>}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <div className="inner-box">
                                                                        <div className="inner-row1">
                                                                            <dl>
                                                                                <dd>220</dd>
                                                                                <dd>225</dd>
                                                                                <dd>230</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                            </dl>
                                                                        </div>
                                                                        <div className="inner-row2">
                                                                            <div className="inner-left">
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />                                                                    
                                                                            </div>
                                                                            <div className="inner-right">
                                                                                <button>바로구매</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                            </li>
                                                        )
                                                        }
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortGrandConverse.length/zoomInList)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortGrandConverse.length/zoomInList/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        }
                                        </>
                                    )
                                    }                                    
                                
                            </div>
                            }

                            {vans &&
                            <div className="right-content">
                            {abcGrand?
                                    (
                                        <>
                                        {
                                            !zoom?
                                            (
                                                <>
                                                <p>총 <strong>{sortAbcVans.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    { (sortAbcVans).map((item,idx)=>{
                                                        if( Math.ceil((idx+1)/list) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} dkey={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>                                                                
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>} 
                                                                            {(item.할인율)!==0 && 
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{(item.할인율*100)}%]</em></strong>
                                                                            </>
                                                                            }
                                                                        </h2>
                                                                        <div className="badge-box">
                                                                                {(item.뱃지1) && <span><img src={item.뱃지1} alt="" /></span>}
                                                                                {(item.뱃지2) &&<span><img src={item.뱃지2} alt="" /></span>}
                                                                                {(item.뱃지3) &&<span><img src={item.뱃지3} alt="" /></span>}
                                                                                {(item.뱃지4) &&<span><img src={item.뱃지4} alt="" /></span>}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                
                                                                <div className="inner-box">
                                                                        <div className="inner-row1">
                                                                            <dl>
                                                                                <dd>220</dd>
                                                                                <dd>225</dd>
                                                                                <dd>230</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                            </dl>
                                                                        </div>
                                                                        <div className="inner-row2">
                                                                            <div className="inner-left">
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />                                                                    
                                                                            </div>
                                                                            <div className="inner-right">
                                                                                <button>바로구매</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                            </li>
                                                        )
                                                        }
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortAbcVans.length/list)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortAbcVans.length/list/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        :
                                            (
                                                <>
                                                <p>총 <strong>{sortAbcVans.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    {sortAbcVans.map((item,idx)=>{                                                
                                                        if( Math.ceil((idx+1)/zoomInList) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} dkey={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                            {(item.할인율)!==0 &&
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{(item.할인율*100)}%]</em></strong>
                                                                            </>
                                                                            }
                                                                        </h2>
                                                                        <div className="badge-box">
                                                                                {(item.뱃지1) && <span><img src={item.뱃지1} alt="" /></span>}
                                                                                {(item.뱃지2) &&<span><img src={item.뱃지2} alt="" /></span>}
                                                                                {(item.뱃지3) &&<span><img src={item.뱃지3} alt="" /></span>}
                                                                                {(item.뱃지4) &&<span><img src={item.뱃지4} alt="" /></span>}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <div className="inner-box">
                                                                        <div className="inner-row1">
                                                                            <dl>
                                                                                <dd>220</dd>
                                                                                <dd>225</dd>
                                                                                <dd>230</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                            </dl>
                                                                        </div>
                                                                        <div className="inner-row2">
                                                                            <div className="inner-left">
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />                                                                    
                                                                            </div>
                                                                            <div className="inner-right">
                                                                                <button>바로구매</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                            </li>
                                                        )
                                                        }
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortAbcVans.length/zoomInList)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortAbcVans.length/zoomInList/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        }  
                                        </> 
                                    
                                    )
                                    :
                                    (
                                        
                                        <>
                                        {
                                            !zoom?
                                            (
                                                <>
                                                <p>총 <strong>{sortGrandVans.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    {sortGrandVans.map((item,idx)=>{                                                
                                                        if( Math.ceil((idx+1)/list) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} dkey={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                            {(item.할인율)!==0 &&
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{(item.할인율*100)}%]</em></strong>
                                                                            </>
                                                                            }
                                                                        </h2>
                                                                        <div className="badge-box">
                                                                                {(item.뱃지1) && <span><img src={item.뱃지1} alt="" /></span>}
                                                                                {(item.뱃지2) &&<span><img src={item.뱃지2} alt="" /></span>}
                                                                                {(item.뱃지3) &&<span><img src={item.뱃지3} alt="" /></span>}
                                                                                {(item.뱃지4) &&<span><img src={item.뱃지4} alt="" /></span>}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <div className="inner-box">
                                                                        <div className="inner-row1">
                                                                            <dl>
                                                                                <dd>220</dd>
                                                                                <dd>225</dd>
                                                                                <dd>230</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                            </dl>
                                                                        </div>
                                                                        <div className="inner-row2">
                                                                            <div className="inner-left">
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />                                                                    
                                                                            </div>
                                                                            <div className="inner-right">
                                                                                <button>바로구매</button>
                                                                            </div>
                                                                        </div>
                                                                </div>
                                                            </li>
                                                        )
                                                        }
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortGrandVans.length/list)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortGrandVans.length/list/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        :
                                            (
                                                <>
                                                <p>총 <strong>{sortGrandVans.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    {sortGrandVans.map((item,idx)=>{                                                
                                                        if( Math.ceil((idx+1)/zoomInList) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} dkey={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                            {(item.할인율)!==0 &&
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{(item.할인율*100)}%]</em></strong>
                                                                            </>
                                                                            }
                                                                        </h2>
                                                                        <div className="badge-box">
                                                                                {(item.뱃지1) && <span><img src={item.뱃지1} alt="" /></span>}
                                                                                {(item.뱃지2) &&<span><img src={item.뱃지2} alt="" /></span>}
                                                                                {(item.뱃지3) &&<span><img src={item.뱃지3} alt="" /></span>}
                                                                                {(item.뱃지4) &&<span><img src={item.뱃지4} alt="" /></span>}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <div className="inner-box">
                                                                        <div className="inner-row1">
                                                                            <dl>
                                                                                <dd>220</dd>
                                                                                <dd>225</dd>
                                                                                <dd>230</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                            </dl>
                                                                        </div>
                                                                        <div className="inner-row2">
                                                                            <div className="inner-left">
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />                                                                    
                                                                            </div>
                                                                            <div className="inner-right">
                                                                                <button>바로구매</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                            </li>
                                                        )
                                                        }
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortGrandVans.length/zoomInList)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortGrandVans.length/zoomInList/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        }
                                        </>
                                    )
                                    }                                    
                                
                            </div>
                            }

                            {newbalance &&
                            <div className="right-content">
                            {abcGrand?
                                    (
                                        <>
                                        {
                                            !zoom?
                                            (
                                                <>
                                                <p>총 <strong>{sortAbcNewbalance.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    { (sortAbcNewbalance).map((item,idx)=>{
                                                        if( Math.ceil((idx+1)/list) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} dkey={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>                                                                
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>} 
                                                                            {(item.할인율)!==0 && 
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{(item.할인율*100)}%]</em></strong>
                                                                            </>
                                                                            }
                                                                        </h2>
                                                                        <div className="badge-box">
                                                                                {(item.뱃지1) && <span><img src={item.뱃지1} alt="" /></span>}
                                                                                {(item.뱃지2) &&<span><img src={item.뱃지2} alt="" /></span>}
                                                                                {(item.뱃지3) &&<span><img src={item.뱃지3} alt="" /></span>}
                                                                                {(item.뱃지4) &&<span><img src={item.뱃지4} alt="" /></span>}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                
                                                                <div className="inner-box">
                                                                        <div className="inner-row1">
                                                                            <dl>
                                                                                <dd>220</dd>
                                                                                <dd>225</dd>
                                                                                <dd>230</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                            </dl>
                                                                        </div>
                                                                        <div className="inner-row2">
                                                                            <div className="inner-left">
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />                                                                    
                                                                            </div>
                                                                            <div className="inner-right">
                                                                                <button>바로구매</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                            </li>
                                                        )
                                                        }
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortAbcNewbalance.length/list)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortAbcNewbalance.length/list/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        :
                                            (
                                                <>
                                                <p>총 <strong>{sortAbcNewbalance.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    {sortAbcNewbalance.map((item,idx)=>{                                                
                                                        if( Math.ceil((idx+1)/zoomInList) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} dkey={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                            {(item.할인율)!==0 &&
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{(item.할인율*100)}%]</em></strong>
                                                                            </>
                                                                            }
                                                                        </h2>
                                                                        <div className="badge-box">
                                                                                {(item.뱃지1) && <span><img src={item.뱃지1} alt="" /></span>}
                                                                                {(item.뱃지2) &&<span><img src={item.뱃지2} alt="" /></span>}
                                                                                {(item.뱃지3) &&<span><img src={item.뱃지3} alt="" /></span>}
                                                                                {(item.뱃지4) &&<span><img src={item.뱃지4} alt="" /></span>}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <div className="inner-box">
                                                                        <div className="inner-row1">
                                                                            <dl>
                                                                                <dd>220</dd>
                                                                                <dd>225</dd>
                                                                                <dd>230</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                            </dl>
                                                                        </div>
                                                                        <div className="inner-row2">
                                                                            <div className="inner-left">
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />                                                                    
                                                                            </div>
                                                                            <div className="inner-right">
                                                                                <button>바로구매</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                            </li>
                                                        )
                                                        }
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortAbcNewbalance.length/zoomInList)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortAbcNewbalance.length/zoomInList/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        }  
                                        </> 
                                    
                                    )
                                    :
                                    (
                                        
                                        <>
                                        {
                                            !zoom?
                                            (
                                                <>
                                                <p>총 <strong>{sortGrandNewbalance.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    {sortGrandNewbalance.map((item,idx)=>{                                                
                                                        if( Math.ceil((idx+1)/list) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} dkey={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                            {(item.할인율)!==0 &&
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{(item.할인율*100)}%]</em></strong>
                                                                            </>
                                                                            }
                                                                        </h2>
                                                                        <div className="badge-box">
                                                                                {(item.뱃지1) && <span><img src={item.뱃지1} alt="" /></span>}
                                                                                {(item.뱃지2) &&<span><img src={item.뱃지2} alt="" /></span>}
                                                                                {(item.뱃지3) &&<span><img src={item.뱃지3} alt="" /></span>}
                                                                                {(item.뱃지4) &&<span><img src={item.뱃지4} alt="" /></span>}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <div className="inner-box">
                                                                        <div className="inner-row1">
                                                                            <dl>
                                                                                <dd>220</dd>
                                                                                <dd>225</dd>
                                                                                <dd>230</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                            </dl>
                                                                        </div>
                                                                        <div className="inner-row2">
                                                                            <div className="inner-left">
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />                                                                    
                                                                            </div>
                                                                            <div className="inner-right">
                                                                                <button>바로구매</button>
                                                                            </div>
                                                                        </div>
                                                                </div>
                                                            </li>
                                                        )
                                                        }
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortGrandNewbalance.length/list)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortGrandNewbalance.length/list/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        :
                                            (
                                                <>
                                                <p>총 <strong>{sortGrandNewbalance.length}</strong>개의 상품이 있습니다.</p>
                                                <ul>                                            
                                                    {sortGrandNewbalance.map((item,idx)=>{                                                
                                                        if( Math.ceil((idx+1)/zoomInList) === pageNumber ){
                                                        return(
                                                            <li className={`${zoom?'on':''}`} key={idx} dkey={idx} >
                                                                <a href='!#' onClick={(e)=>onClickProductDetailList(e, item)}>
                                                                    <div className="img-box">
                                                                        <img src={item.이미지} alt="" />
                                                                        <span><img src={item.추천} alt="" /></span>
                                                                    </div>
                                                                    <div className="info-box">
                                                                        <h3>{item.제조사}</h3>
                                                                        <h4>{item.제품명}</h4>
                                                                        <h2>
                                                                            {(item.할인율)===0 && <>{(item.가격).toLocaleString()}<em>원</em></>}
                                                                            {(item.할인율)!==0 &&
                                                                            <>
                                                                            <i>{(item.가격).toLocaleString()}</i>
                                                                            <strong>{(Math.round((item.가격)*(1-item.할인율)/1000)*1000).toLocaleString()}<em>원[{(item.할인율*100)}%]</em></strong>
                                                                            </>
                                                                            }
                                                                        </h2>
                                                                        <div className="badge-box">
                                                                                {(item.뱃지1) && <span><img src={item.뱃지1} alt="" /></span>}
                                                                                {(item.뱃지2) &&<span><img src={item.뱃지2} alt="" /></span>}
                                                                                {(item.뱃지3) &&<span><img src={item.뱃지3} alt="" /></span>}
                                                                                {(item.뱃지4) &&<span><img src={item.뱃지4} alt="" /></span>}
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <div className="inner-box">
                                                                        <div className="inner-row1">
                                                                            <dl>
                                                                                <dd>220</dd>
                                                                                <dd>225</dd>
                                                                                <dd>230</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                                <dd>240</dd>
                                                                            </dl>
                                                                        </div>
                                                                        <div className="inner-row2">
                                                                            <div className="inner-left">
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />
                                                                                <input type="checkbox" />                                                                    
                                                                            </div>
                                                                            <div className="inner-right">
                                                                                <button>바로구매</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                            </li>
                                                        )
                                                        }
                                                    })}
                                                </ul>
                                                <div className="page-button-box">
                                                    <div className="prev-btn-box">
                                                        { cnt > 1 && <a  href="!#"  className="prev-btn" onClick={onClickPrevGroup}>&lt;</a> }
                                                    </div>                                
                                                    <div className='num-btn-box'>
                                                    {
                                                    (()=>{
                                                            let arr = [];  // 페이지번호와 a 태그 모두 저장된 배열변수
                                                            for(let i=startNum; i<endtNum; i++){                                    
                                                                if(i<Math.ceil(sortGrandNewbalance.length/zoomInList)){ // 100/6
                                                                    arr = [...arr,  <a key={i} data-key={`num${i}`}  className={pageNumber===(i+1)?'on':null}  href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> ]
                                                                    // arr.push( <a href="!#" onClick={(e)=>onClickPageNum(e, (i+1))}>{i+1}</a> );
                                                                }
                                                            }
                                                            return  arr                                                                      
                                                    })() 
                                                    }                        
                                                    </div>
                                                    <div className="next-btn-box">
                                                        {cnt < Math.ceil(sortGrandNewbalance.length/zoomInList/groupPage) && <a href="!#" className="next-btn"  onClick={onClickNextGroup}>&gt;</a>}
                                                    </div> 
                                                </div>
                                                </>
                                            )
                                        }
                                        </>
                                    )
                                    }                                    
                                
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

