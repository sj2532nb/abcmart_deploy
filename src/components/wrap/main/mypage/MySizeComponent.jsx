import React from 'react';
import $ from 'jquery';

export default function MySizeComponent({sizeUpdate}) {
    //셀렉트 상자 열기
    const [sizeBox, setSizeBox] = React.useState({});

    const onClickBox =(value)=>{
        setSizeBox((prevSizeBox)=>({
            [value]:!prevSizeBox[value]
        }));
    };

    //외부클릭 시 셀렉트박스 닫기
    React.useEffect(()=>{
        const selectBox = $('.select-box input');        
        $(document).on({
            click(e){
                if(!selectBox.is(e.target)){
                    setSizeBox(false);
                }
            }
        })
    })
    

    const [height, setHeight] = React.useState('선택');
    const [weight, setWeight] = React.useState('선택');
    const [usualSize, setUsualSize] = React.useState('선택');
    const [tops, setTops] = React.useState('선택');
    const [bottoms, setBottoms] = React.useState('선택');
    const [footsize, setFootSize] = React.useState('선택');

    //리셋
    const onClickReset=()=>{
        setHeight('선택');
        setWeight('선택');
        setUsualSize('선택');
        setTops('선택');
        setBottoms('선택');
        setFootSize('선택');
    }
    

    const onClickHeight=(value)=>{
        setHeight(value);        
    }
    const onClickWeight=(value)=>{
        setWeight(value);        
    }
    const onClickSize=(value)=>{
        setUsualSize(value);        
    }
    const onClickTops=(value)=>{
        setTops(value);        
    }
    const onClickBottoms=(value)=>{
        setBottoms(value);        
    }
    const onClickFootSize=(value)=>{
        setFootSize(value);    
    }
    

    

    const [sizeUpate, setSizeUpate] = React.useState(false);
    const onClickUpdate=()=>{
        setSizeUpate(on=>!on);
    }

    //스토리지 저장
    const onClickSave=()=>{
        setSizeUpate(on=>!on);
        localStorage.setItem('height', height);
        localStorage.setItem('weight', weight);
        localStorage.setItem('usualSize', usualSize);
        localStorage.setItem('tops', tops);
        localStorage.setItem('bottoms', bottoms);
        localStorage.setItem('footsize', footsize);
        alert('저장 되었습니다.');
    }

    React.useEffect(()=>{
        const saveHeight = localStorage.getItem('height');
        const saveWeight = localStorage.getItem('weight');
        const saveUsualSize = localStorage.getItem('usualSize');
        const saveTops = localStorage.getItem('tops');
        const saveBottoms = localStorage.getItem('bottoms');
        const saveFootSize = localStorage.getItem('footsize');
        
            if(saveHeight){
                setHeight(saveHeight);
            }
            if(saveWeight){
                setWeight(saveWeight)
            }
            if(saveUsualSize){
                setUsualSize(saveUsualSize)
            }
            if(saveTops){
                setTops(saveTops)
            }
            if(saveBottoms){
                setBottoms(saveBottoms)
            }
            if(saveFootSize){
                setFootSize(saveFootSize)
            }
        
    },[])

    

    

    return (
        <>
        {
            !sizeUpate?
            <>
            <div className='sub-title'>
                <h2>나의 사이즈 보기</h2>
                <p>한 항목당 한 개 선택 및 원하는 항목만 선택 가능합니다.</p>
            </div>
            <div className="size-content">
                <div className="select-box">
                    
                        <ul className='readonly'>
                            <li>
                                <label htmlFor="">
                                    <h4>키</h4>
                                    <input onClick={()=>onClickBox('키')} type="text"  value={height} readOnly/>
                                    <span className={sizeBox['키']?'on':''}>
                                        <img src="./img/mypage/select_icon_arrow_down.png" alt="" />
                                    </span>
                                </label>                
                                <dl className={sizeBox['키']?'on':''}>
                                    <dd className={`${height==='선택'?'on':''}`} onClick={()=>onClickHeight('선택')}>선택</dd>
                                    <dd className={`${height==='145 이하'?'on':''}`} onClick={()=>onClickHeight('145 이하')}>145 이하</dd>
                                    <dd className={`${height==='145-150'?'on':''}`} onClick={()=>onClickHeight('145-150')}>145-150</dd>
                                    <dd className={`${height==='150-155'?'on':''}`} onClick={()=>onClickHeight('150-155')}>150-155</dd>
                                    <dd className={`${height==='155-160'?'on':''}`} onClick={()=>onClickHeight('155-160')}>155-160</dd>                                                
                                    <dd className={`${height==='160-165'?'on':''}`} onClick={()=>onClickHeight('160-165')}>160-165</dd>
                                    <dd className={`${height==='165-170'?'on':''}`} onClick={()=>onClickHeight('165-170')}>165-170</dd>
                                    <dd className={`${height==='170-175'?'on':''}`} onClick={()=>onClickHeight('170-175')}>170-175</dd>
                                    <dd className={`${height==='175-180'?'on':''}`} onClick={()=>onClickHeight('175-180')}>175-180</dd>
                                    <dd className={`${height==='180-185'?'on':''}`} onClick={()=>onClickHeight('180-185')}>180-185</dd>
                                    <dd className={`${height==='185-190'?'on':''}`} onClick={()=>onClickHeight('185-190')}>185-190</dd>
                                    <dd className={`${height==='190 이상'?'on':''}`} onClick={()=>onClickHeight('190 이상')}>190 이상</dd>
                                </dl>
                            </li>
                            <li>
                                <label htmlFor="">
                                    <h4>몸무게</h4>
                                    <input onClick={()=>onClickBox('몸무게')} type="text"  value={weight} readOnly/>
                                    <span className={sizeBox['몸무게']?'on':''}>
                                        <img src="./img/mypage/select_icon_arrow_down.png" alt="" />
                                    </span>
                                </label>                
                                <dl className={sizeBox['몸무게']?'on':''}>
                                    <dd className={`${weight==='선택'?'on':''}`} onClick={()=>onClickWeight('선택')}>선택</dd>
                                    <dd className={`${weight==='45 이하'?'on':''}`} onClick={()=>onClickWeight('45 이하')}>45 이하</dd>
                                    <dd className={`${weight==='45-50'?'on':''}`} onClick={()=>onClickWeight('45-50')}>45-50</dd>
                                    <dd className={`${weight==='50-55'?'on':''}`} onClick={()=>onClickWeight('50-55')}>50-55</dd>
                                    <dd className={`${weight==='55-60'?'on':''}`} onClick={()=>onClickWeight('55-60')}>55-60</dd>                                                
                                    <dd className={`${weight==='60-65'?'on':''}`} onClick={()=>onClickWeight('60-65')}>60-65</dd>
                                    <dd className={`${weight==='65-70'?'on':''}`} onClick={()=>onClickWeight('65-70')}>65-70</dd>
                                    <dd className={`${weight==='70-75'?'on':''}`} onClick={()=>onClickWeight('70-75')}>70-75</dd>
                                    <dd className={`${weight==='75-80'?'on':''}`} onClick={()=>onClickWeight('75-80')}>75-80</dd>
                                    <dd className={`${weight==='80-85'?'on':''}`} onClick={()=>onClickWeight('80-85')}>80-85</dd>
                                    <dd className={`${weight==='85-90'?'on':''}`} onClick={()=>onClickWeight('85-90')}>85-90</dd>
                                    <dd className={`${weight==='90-95'?'on':''}`} onClick={()=>onClickWeight('90-95')}>90-95</dd>
                                    <dd className={`${weight==='95 이상'?'on':''}`} onClick={()=>onClickWeight('95 이상')}>95 이상</dd>
                                </dl>
                            </li>
                            <li>
                                <label htmlFor="">
                                    <h4>평소 사이즈</h4>
                                    <input onClick={()=>onClickBox('평소 사이즈')} type="text"  value={usualSize} readOnly/>
                                    <span className={sizeBox['평소 사이즈']?'on':''}>
                                        <img src="./img/mypage/select_icon_arrow_down.png" alt="" />
                                    </span>
                                </label>                
                                <dl className={sizeBox['평소 사이즈']?'on':''}>
                                    <dd className={`${usualSize==='선택'?'on':''}`} onClick={()=>onClickSize('선택')}>선택</dd>
                                    <dd className={`${usualSize==='XS'?'on':''}`} onClick={()=>onClickSize('XS')}>XS</dd>
                                    <dd className={`${usualSize==='S'?'on':''}`} onClick={()=>onClickSize('S')}>S</dd>
                                    <dd className={`${usualSize==='M'?'on':''}`} onClick={()=>onClickSize('M')}>M</dd>
                                    <dd className={`${usualSize==='L'?'on':''}`} onClick={()=>onClickSize('L')}>L</dd>                                                
                                    <dd className={`${usualSize==='XL'?'on':''}`} onClick={()=>onClickSize('XL')}>XL</dd>
                                    <dd className={`${usualSize==='2XL 이상'?'on':''}`} onClick={()=>onClickSize('2XL 이상')}>2XL 이상</dd>
                                    
                                </dl>
                            </li>
                            <li>
                                <label htmlFor="">
                                    <h4>상의</h4>
                                    <input onClick={()=>onClickBox('상의')} type="text"  value={tops} readOnly/>
                                    <span className={sizeBox['상의']?'on':''}>
                                        <img src="./img/mypage/select_icon_arrow_down.png" alt="" />
                                    </span>
                                </label>                
                                <dl className={sizeBox['상의']?'on':''}>
                                    <dd className={`${tops==='선택'?'on':''}`} onClick={()=>onClickTops('선택')}>선택</dd>
                                    <dd className={`${tops==='80 이하'?'on':''}`} onClick={()=>onClickTops('145 이하')}>80</dd>
                                    <dd className={`${tops==='85'?'on':''}`} onClick={()=>onClickTops('145-150')}>85</dd>
                                    <dd className={`${tops==='90'?'on':''}`} onClick={()=>onClickTops('150-155')}>90</dd>
                                    <dd className={`${tops==='95'?'on':''}`} onClick={()=>onClickTops('155-160')}>95</dd>                                                
                                    <dd className={`${tops==='100'?'on':''}`} onClick={()=>onClickTops('160-165')}>100</dd>
                                    <dd className={`${tops==='105'?'on':''}`} onClick={()=>onClickTops('165-170')}>105</dd>
                                    <dd className={`${tops==='110 이상'?'on':''}`} onClick={()=>onClickTops('170-175')}>110</dd>
                                </dl>
                            </li>
                            <li>
                                <label htmlFor="">
                                    <h4>하의</h4>
                                    <input onClick={()=>onClickBox('하의')} type="text"  value={bottoms} readOnly/>
                                    <span className={sizeBox['하의']?'on':''}>
                                        <img src="./img/mypage/select_icon_arrow_down.png" alt="" />
                                    </span>
                                </label>                
                                <dl className={sizeBox['하의']?'on':''}>
                                    <dd className={`${bottoms==='선택'?'on':''}`} onClick={()=>onClickBottoms('선택')}>선택</dd>
                                    <dd className={`${bottoms==='23 이하'?'on':''}`} onClick={()=>onClickBottoms('145 이하')}>23 이하</dd>
                                    <dd className={`${bottoms==='24'?'on':''}`} onClick={()=>onClickBottoms('145-150')}>24</dd>
                                    <dd className={`${bottoms==='25'?'on':''}`} onClick={()=>onClickBottoms('150-155')}>25</dd>
                                    <dd className={`${bottoms==='26'?'on':''}`} onClick={()=>onClickBottoms('155-160')}>26</dd>                                                
                                    <dd className={`${bottoms==='27'?'on':''}`} onClick={()=>onClickBottoms('160-165')}>27</dd>
                                    <dd className={`${bottoms==='28'?'on':''}`} onClick={()=>onClickBottoms('165-170')}>28</dd>
                                    <dd className={`${bottoms==='29'?'on':''}`} onClick={()=>onClickBottoms('170-175')}>29</dd>
                                    <dd className={`${bottoms==='30'?'on':''}`} onClick={()=>onClickBottoms('175-180')}>30</dd>
                                    <dd className={`${bottoms==='31'?'on':''}`} onClick={()=>onClickBottoms('180-185')}>31</dd>
                                    <dd className={`${bottoms==='32'?'on':''}`} onClick={()=>onClickBottoms('185-190')}>32</dd>
                                    <dd className={`${bottoms==='33'?'on':''}`} onClick={()=>onClickBottoms('185-190')}>33</dd>
                                    <dd className={`${bottoms==='34'?'on':''}`} onClick={()=>onClickBottoms('185-190')}>34</dd>
                                    <dd className={`${bottoms==='35'?'on':''}`} onClick={()=>onClickBottoms('185-190')}>35</dd>
                                    <dd className={`${bottoms==='36'?'on':''}`} onClick={()=>onClickBottoms('185-190')}>36</dd>
                                    <dd className={`${bottoms==='37'?'on':''}`} onClick={()=>onClickBottoms('185-190')}>37</dd>
                                    <dd className={`${bottoms==='38'?'on':''}`} onClick={()=>onClickBottoms('185-190')}>38</dd>
                                    <dd className={`${bottoms==='39 이상'?'on':''}`} onClick={()=>onClickBottoms('190 이상')}>39 이상</dd>
                                </dl>
                            </li>
                            <li>
                                <label htmlFor="">
                                    <h4>발 사이즈</h4>
                                    <input onClick={()=>onClickBox('발 사이즈')} type="text"  value={footsize} readOnly/>
                                    <span className={sizeBox['발 사이즈']?'on':''}>
                                        <img src="./img/mypage/select_icon_arrow_down.png" alt="" />
                                    </span>
                                </label>                
                                <dl className={sizeBox['발 사이즈']?'on':''}>
                                    <dd className={`${footsize==='선택'?'on':''}`} onClick={()=>onClickFootSize('선택')}>선택</dd>
                                    <dd className={`${footsize==='220 이하'?'on':''}`} onClick={()=>onClickFootSize('220 이하')}>220 이하</dd>
                                    <dd className={`${footsize==='225'?'on':''}`} onClick={()=>onClickFootSize('225')}>225</dd>
                                    <dd className={`${footsize==='230'?'on':''}`} onClick={()=>onClickFootSize('230')}>230</dd>
                                    <dd className={`${footsize==='235'?'on':''}`} onClick={()=>onClickFootSize('235')}>235</dd>
                                    <dd className={`${footsize==='240'?'on':''}`} onClick={()=>onClickFootSize('240')}>240</dd>
                                    <dd className={`${footsize==='245'?'on':''}`} onClick={()=>onClickFootSize('245')}>245</dd>
                                    <dd className={`${footsize==='250'?'on':''}`} onClick={()=>onClickFootSize('250')}>250</dd>
                                    <dd className={`${footsize==='255'?'on':''}`} onClick={()=>onClickFootSize('255')}>255</dd>
                                    <dd className={`${footsize==='260'?'on':''}`} onClick={()=>onClickFootSize('260')}>260</dd>
                                    <dd className={`${footsize==='265'?'on':''}`} onClick={()=>onClickFootSize('265')}>265</dd>
                                    <dd className={`${footsize==='270'?'on':''}`} onClick={()=>onClickFootSize('270')}>270</dd>
                                    <dd className={`${footsize==='275'?'on':''}`} onClick={()=>onClickFootSize('275')}>275</dd>
                                    <dd className={`${footsize==='280'?'on':''}`} onClick={()=>onClickFootSize('280')}>280</dd>
                                    <dd className={`${footsize==='285'?'on':''}`} onClick={()=>onClickFootSize('285')}>285</dd>
                                    <dd className={`${footsize==='290'?'on':''}`} onClick={()=>onClickFootSize('290')}>290</dd>
                                    <dd className={`${footsize==='295'?'on':''}`} onClick={()=>onClickFootSize('295')}>295</dd>
                                    <dd className={`${footsize==='300'?'on':''}`} onClick={()=>onClickFootSize('300')}>300</dd>
                                    <dd className={`${footsize==='305'?'on':''}`} onClick={()=>onClickFootSize('305')}>305</dd>
                                    <dd className={`${footsize==='310'?'on':''}`} onClick={()=>onClickFootSize('310')}>310</dd>
                                    <dd className={`${footsize==='315'?'on':''}`} onClick={()=>onClickFootSize('315')}>315</dd>
                                    <dd className={`${footsize==='320 이상'?'on':''}`} onClick={()=>onClickFootSize('320 이상')}>320 이상</dd>
                                </dl>
                            </li>
                        </ul>
                        <div className="btn-box">
                            <button onClick={onClickUpdate}>수정</button>
                        </div>
                </div>
            </div>
            </>
            :
            <>
            <div className='sub-title'>
                <h2>나의 사이즈 선택하기</h2>
                <p>한 항목당 한 개 선택 및 원하는 항목만 선택 가능합니다.</p>
            </div>
            <div className="size-content">
                <div className="select-box">
                    
                        <ul >
                            <li>
                                <label htmlFor="">
                                    <h4>키</h4>
                                    <input onClick={()=>onClickBox('키')} type="text"  value={height} readOnly/>
                                    <span className={sizeBox['키']?'on':''}>
                                        <img src="./img/mypage/select_icon_arrow_down.png" alt="" />
                                    </span>
                                </label>                
                                <dl className={sizeBox['키']?'on':''}>
                                    <dd className={`${height==='선택'?'on':''}`} onClick={()=>onClickHeight('선택')}>선택</dd>
                                    <dd className={`${height==='145 이하'?'on':''}`} onClick={()=>onClickHeight('145 이하')}>145 이하</dd>
                                    <dd className={`${height==='145-150'?'on':''}`} onClick={()=>onClickHeight('145-150')}>145-150</dd>
                                    <dd className={`${height==='150-155'?'on':''}`} onClick={()=>onClickHeight('150-155')}>150-155</dd>
                                    <dd className={`${height==='155-160'?'on':''}`} onClick={()=>onClickHeight('155-160')}>155-160</dd>                                                
                                    <dd className={`${height==='160-165'?'on':''}`} onClick={()=>onClickHeight('160-165')}>160-165</dd>
                                    <dd className={`${height==='165-170'?'on':''}`} onClick={()=>onClickHeight('165-170')}>165-170</dd>
                                    <dd className={`${height==='170-175'?'on':''}`} onClick={()=>onClickHeight('170-175')}>170-175</dd>
                                    <dd className={`${height==='175-180'?'on':''}`} onClick={()=>onClickHeight('175-180')}>175-180</dd>
                                    <dd className={`${height==='180-185'?'on':''}`} onClick={()=>onClickHeight('180-185')}>180-185</dd>
                                    <dd className={`${height==='185-190'?'on':''}`} onClick={()=>onClickHeight('185-190')}>185-190</dd>
                                    <dd className={`${height==='190 이상'?'on':''}`} onClick={()=>onClickHeight('190 이상')}>190 이상</dd>
                                </dl>
                            </li>
                            <li>
                                <label htmlFor="">
                                    <h4>몸무게</h4>
                                    <input onClick={()=>onClickBox('몸무게')} type="text"  value={weight} readOnly/>
                                    <span className={sizeBox['몸무게']?'on':''}>
                                        <img src="./img/mypage/select_icon_arrow_down.png" alt="" />
                                    </span>
                                </label>                
                                <dl className={sizeBox['몸무게']?'on':''}>
                                    <dd className={`${weight==='선택'?'on':''}`} onClick={()=>onClickWeight('선택')}>선택</dd>
                                    <dd className={`${weight==='45 이하'?'on':''}`} onClick={()=>onClickWeight('45 이하')}>45 이하</dd>
                                    <dd className={`${weight==='45-50'?'on':''}`} onClick={()=>onClickWeight('45-50')}>45-50</dd>
                                    <dd className={`${weight==='50-55'?'on':''}`} onClick={()=>onClickWeight('50-55')}>50-55</dd>
                                    <dd className={`${weight==='55-60'?'on':''}`} onClick={()=>onClickWeight('55-60')}>55-60</dd>                                                
                                    <dd className={`${weight==='60-65'?'on':''}`} onClick={()=>onClickWeight('60-65')}>60-65</dd>
                                    <dd className={`${weight==='65-70'?'on':''}`} onClick={()=>onClickWeight('65-70')}>65-70</dd>
                                    <dd className={`${weight==='70-75'?'on':''}`} onClick={()=>onClickWeight('70-75')}>70-75</dd>
                                    <dd className={`${weight==='75-80'?'on':''}`} onClick={()=>onClickWeight('75-80')}>75-80</dd>
                                    <dd className={`${weight==='80-85'?'on':''}`} onClick={()=>onClickWeight('80-85')}>80-85</dd>
                                    <dd className={`${weight==='85-90'?'on':''}`} onClick={()=>onClickWeight('85-90')}>85-90</dd>
                                    <dd className={`${weight==='90-95'?'on':''}`} onClick={()=>onClickWeight('90-95')}>90-95</dd>
                                    <dd className={`${weight==='95 이상'?'on':''}`} onClick={()=>onClickWeight('95 이상')}>95 이상</dd>
                                </dl>
                            </li>
                            <li>
                                <label htmlFor="">
                                    <h4>평소 사이즈</h4>
                                    <input onClick={()=>onClickBox('평소 사이즈')} type="text"  value={usualSize} readOnly/>
                                    <span className={sizeBox['평소 사이즈']?'on':''}>
                                        <img src="./img/mypage/select_icon_arrow_down.png" alt="" />
                                    </span>
                                </label>                
                                <dl className={sizeBox['평소 사이즈']?'on':''}>
                                    <dd className={`${usualSize==='선택'?'on':''}`} onClick={()=>onClickSize('선택')}>선택</dd>
                                    <dd className={`${usualSize==='XS'?'on':''}`} onClick={()=>onClickSize('XS')}>XS</dd>
                                    <dd className={`${usualSize==='S'?'on':''}`} onClick={()=>onClickSize('S')}>S</dd>
                                    <dd className={`${usualSize==='M'?'on':''}`} onClick={()=>onClickSize('M')}>M</dd>
                                    <dd className={`${usualSize==='L'?'on':''}`} onClick={()=>onClickSize('L')}>L</dd>                                                
                                    <dd className={`${usualSize==='XL'?'on':''}`} onClick={()=>onClickSize('XL')}>XL</dd>
                                    <dd className={`${usualSize==='2XL 이상'?'on':''}`} onClick={()=>onClickSize('2XL 이상')}>2XL 이상</dd>
                                    
                                </dl>
                            </li>
                            <li>
                                <label htmlFor="">
                                    <h4>상의</h4>
                                    <input onClick={()=>onClickBox('상의')} type="text"  value={tops} readOnly/>
                                    <span className={sizeBox['상의']?'on':''}>
                                        <img src="./img/mypage/select_icon_arrow_down.png" alt="" />
                                    </span>
                                </label>                
                                <dl className={sizeBox['상의']?'on':''}>
                                    <dd className={`${tops==='선택'?'on':''}`} onClick={()=>onClickTops('선택')}>선택</dd>
                                    <dd className={`${tops==='80 이하'?'on':''}`} onClick={()=>onClickTops('145 이하')}>80 이하</dd>
                                    <dd className={`${tops==='85'?'on':''}`} onClick={()=>onClickTops('145-150')}>85</dd>
                                    <dd className={`${tops==='90'?'on':''}`} onClick={()=>onClickTops('150-155')}>90</dd>
                                    <dd className={`${tops==='95'?'on':''}`} onClick={()=>onClickTops('155-160')}>95</dd>                                                
                                    <dd className={`${tops==='100'?'on':''}`} onClick={()=>onClickTops('160-165')}>100</dd>
                                    <dd className={`${tops==='105'?'on':''}`} onClick={()=>onClickTops('165-170')}>105</dd>
                                    <dd className={`${tops==='110 이상'?'on':''}`} onClick={()=>onClickTops('170-175')}>110 이상</dd>
                                </dl>
                            </li>
                            <li>
                                <label htmlFor="">
                                    <h4>하의</h4>
                                    <input onClick={()=>onClickBox('하의')} type="text"  value={bottoms} readOnly/>
                                    <span className={sizeBox['하의']?'on':''}>
                                        <img src="./img/mypage/select_icon_arrow_down.png" alt="" />
                                    </span>
                                </label>                
                                <dl className={sizeBox['하의']?'on':''}>
                                    <dd className={`${bottoms==='선택'?'on':''}`} onClick={()=>onClickBottoms('선택')}>선택</dd>
                                    <dd className={`${bottoms==='23 이하'?'on':''}`} onClick={()=>onClickBottoms('23 이하')}>145 이하</dd>
                                    <dd className={`${bottoms==='24'?'on':''}`} onClick={()=>onClickBottoms('24')}>145-150</dd>
                                    <dd className={`${bottoms==='25'?'on':''}`} onClick={()=>onClickBottoms('25')}>150-155</dd>
                                    <dd className={`${bottoms==='26'?'on':''}`} onClick={()=>onClickBottoms('26')}>155-160</dd>                                                
                                    <dd className={`${bottoms==='27'?'on':''}`} onClick={()=>onClickBottoms('27')}>160-165</dd>
                                    <dd className={`${bottoms==='28'?'on':''}`} onClick={()=>onClickBottoms('28')}>165-170</dd>
                                    <dd className={`${bottoms==='29'?'on':''}`} onClick={()=>onClickBottoms('29')}>170-175</dd>
                                    <dd className={`${bottoms==='30'?'on':''}`} onClick={()=>onClickBottoms('30')}>175-180</dd>
                                    <dd className={`${bottoms==='31'?'on':''}`} onClick={()=>onClickBottoms('31')}>180-185</dd>
                                    <dd className={`${bottoms==='32'?'on':''}`} onClick={()=>onClickBottoms('32')}>185-190</dd>
                                    <dd className={`${bottoms==='33'?'on':''}`} onClick={()=>onClickBottoms('33')}>185-190</dd>
                                    <dd className={`${bottoms==='34'?'on':''}`} onClick={()=>onClickBottoms('34')}>185-190</dd>
                                    <dd className={`${bottoms==='35'?'on':''}`} onClick={()=>onClickBottoms('35')}>185-190</dd>
                                    <dd className={`${bottoms==='36'?'on':''}`} onClick={()=>onClickBottoms('36')}>185-190</dd>
                                    <dd className={`${bottoms==='37'?'on':''}`} onClick={()=>onClickBottoms('37')}>185-190</dd>
                                    <dd className={`${bottoms==='38'?'on':''}`} onClick={()=>onClickBottoms('38')}>185-190</dd>
                                    <dd className={`${bottoms==='39 이상'?'on':''}`} onClick={()=>onClickBottoms('39 이상')}>190 이상</dd>
                                </dl>
                            </li>
                            <li>
                                <label htmlFor="">
                                    <h4>발 사이즈</h4>
                                    <input onClick={()=>onClickBox('발 사이즈')} type="text"  value={footsize} readOnly/>
                                    <span className={sizeBox['발 사이즈']?'on':''}>
                                        <img src="./img/mypage/select_icon_arrow_down.png" alt="" />
                                    </span>
                                </label>                
                                <dl className={sizeBox['발 사이즈']?'on':''}>
                                    <dd className={`${footsize==='선택'?'on':''}`} onClick={()=>onClickFootSize('선택')}>선택</dd>
                                    <dd className={`${footsize==='220 이하'?'on':''}`} onClick={()=>onClickFootSize('220 이하')}>220 이하</dd>
                                    <dd className={`${footsize==='225'?'on':''}`} onClick={()=>onClickFootSize('225')}>225</dd>
                                    <dd className={`${footsize==='230'?'on':''}`} onClick={()=>onClickFootSize('230')}>230</dd>
                                    <dd className={`${footsize==='235'?'on':''}`} onClick={()=>onClickFootSize('235')}>235</dd>
                                    <dd className={`${footsize==='240'?'on':''}`} onClick={()=>onClickFootSize('240')}>240</dd>
                                    <dd className={`${footsize==='245'?'on':''}`} onClick={()=>onClickFootSize('245')}>245</dd>
                                    <dd className={`${footsize==='250'?'on':''}`} onClick={()=>onClickFootSize('250')}>250</dd>
                                    <dd className={`${footsize==='255'?'on':''}`} onClick={()=>onClickFootSize('255')}>255</dd>
                                    <dd className={`${footsize==='260'?'on':''}`} onClick={()=>onClickFootSize('260')}>260</dd>
                                    <dd className={`${footsize==='265'?'on':''}`} onClick={()=>onClickFootSize('265')}>265</dd>
                                    <dd className={`${footsize==='270'?'on':''}`} onClick={()=>onClickFootSize('270')}>270</dd>
                                    <dd className={`${footsize==='275'?'on':''}`} onClick={()=>onClickFootSize('275')}>275</dd>
                                    <dd className={`${footsize==='280'?'on':''}`} onClick={()=>onClickFootSize('280')}>280</dd>
                                    <dd className={`${footsize==='285'?'on':''}`} onClick={()=>onClickFootSize('285')}>285</dd>
                                    <dd className={`${footsize==='290'?'on':''}`} onClick={()=>onClickFootSize('290')}>290</dd>
                                    <dd className={`${footsize==='295'?'on':''}`} onClick={()=>onClickFootSize('295')}>295</dd>
                                    <dd className={`${footsize==='300'?'on':''}`} onClick={()=>onClickFootSize('300')}>300</dd>
                                    <dd className={`${footsize==='305'?'on':''}`} onClick={()=>onClickFootSize('305')}>305</dd>
                                    <dd className={`${footsize==='310'?'on':''}`} onClick={()=>onClickFootSize('310')}>310</dd>
                                    <dd className={`${footsize==='315'?'on':''}`} onClick={()=>onClickFootSize('315')}>315</dd>
                                    <dd className={`${footsize==='320 이상'?'on':''}`} onClick={()=>onClickFootSize('320 이상')}>320 이상</dd>
                                </dl>
                            </li>
                        </ul>
                        <div className="btn-box">
                            <button onClick={onClickReset}>초기화</button>
                            <button onClick={onClickSave}>저장</button>
                        </div>
                </div>
            </div>
            </>
            
        }
        </>
        
    );
}

