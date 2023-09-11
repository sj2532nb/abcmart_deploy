import React from 'react';
import BrandSection1Component from './brand/BrandSection1Component';
import BrandSection2Component from './brand/BrandSection2Component';
import BrandSection3Component from './brand/BrandSection3Component';
import axios from 'axios';
export default function BrandComponent({adidas, nike, converse, vans, newbalance, setViewProductDetail, dkey}) {

   

    const[abcGrand, setAbcGrand]=React.useState(true);

    const abcChange =()=>{
        setAbcGrand(true);
    }
    const grandChange =()=>{
        setAbcGrand(false);
    }

    React.useEffect(()=>{
        if(adidas){
            setAbcGrand(true);
        }
        else{
            setAbcGrand(true);
        }
    },[adidas,nike,converse,vans,newbalance]);

    const [state, setState] = React.useState({
        아디다스ABC: [],
        아디다스GRAND: [],

        나이키ABC: [],
        나이키GRAND: [],

        컨버스ABC: [],
        컨버스GRAND: [],

        반스ABC: [],
        반스GRAND: [],
        
        뉴발란스ABC: [],
        뉴발란스GRAND: []
    });
    React.useEffect(()=>{
        axios({
            url:'./data/brand/brand.json',
            method:'GET'
        })
        .then((res)=>{
            if(res.status===200){
                setState({
                    ...state,
                    아디다스ABC:res.data.adidas_abc,
                    아디다스GRAND:res.data.adidas_grand,
                    나이키ABC:res.data.nike_abc,
                    나이키GRAND:res.data.nike_grand,
                    컨버스ABC:res.data.converse_abc,
                    컨버스GRAND:res.data.converse_grand,
                    반스ABC:res.data.vans_abc,
                    반스GRAND:res.data.vans_grand,
                    뉴발란스ABC:res.data.newbalance_abc,
                    뉴발란스GRAND:res.data.newbalance_grand,
                })
            }
        })
        .catch()
    },[]);


    return (
        <main id='brand'>
            <BrandSection1Component   
                nike={nike}  나이키ABC={state.나이키ABC} 나이키GRAND={state.나이키GRAND} 
                adidas={adidas}  아디다스ABC={state.아디다스ABC} 아디다스GRAND={state.아디다스GRAND} 
                converse={converse}  컨버스ABC={state.컨버스ABC} 컨버스GRAND={state.컨버스GRAND} 
                vans={vans}  반스ABC={state.반스ABC} 반스GRAND={state.반스GRAND} 
                newbalance={newbalance}  뉴발란스ABC={state.뉴발란스ABC} 뉴발란스GRAND={state.뉴발란스GRAND} 
                abcGrand={abcGrand}
            />
            <BrandSection2Component 
                nike={nike} 나이키ABC={state.나이키ABC} 나이키GRAND={state.나이키GRAND} 
                adidas={adidas} 아디다스ABC={state.아디다스ABC} 아디다스GRAND={state.아디다스GRAND} 
                converse={converse}  컨버스ABC={state.컨버스ABC} 컨버스GRAND={state.컨버스GRAND} 
                vans={vans}  반스ABC={state.반스ABC} 반스GRAND={state.반스GRAND} 
                newbalance={newbalance}  뉴발란스ABC={state.뉴발란스ABC} 뉴발란스GRAND={state.뉴발란스GRAND} 
                abcChange={abcChange} grandChange={grandChange} abcGrand={abcGrand}
                setViewProductDetail={setViewProductDetail} dkey={dkey}
            />
            <BrandSection3Component
                nike={nike} 나이키ABC={state.나이키ABC} 나이키GRAND={state.나이키GRAND} 
                adidas={adidas} 아디다스ABC={state.아디다스ABC} 아디다스GRAND={state.아디다스GRAND} 
                converse={converse}  컨버스ABC={state.컨버스ABC} 컨버스GRAND={state.컨버스GRAND} 
                vans={vans}  반스ABC={state.반스ABC} 반스GRAND={state.반스GRAND} 
                newbalance={newbalance}  뉴발란스ABC={state.뉴발란스ABC} 뉴발란스GRAND={state.뉴발란스GRAND}
                abcGrand={abcGrand} setViewProductDetail={setViewProductDetail} dkey={dkey}
            />
        </main>
    );
}

