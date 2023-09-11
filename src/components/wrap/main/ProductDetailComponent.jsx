import React from 'react';
import { useState } from 'react';
import './scss/productdetail.scss';
import Section1Component from './productdetail/Section1Component';
import Section2Component from './productdetail/Section2Component';
import Section3Component from './productdetail/Section3Component';
import Section4Component from './productdetail/Section4Component';
import Section5Component from './productdetail/Section5Component';
import Section6Component from './productdetail/Section6Component';

export default function ProductDetailComponent({dkey, cartKey, cartCountNumber}){

    // React.useEffect(()=>{
    //     window.scrollTo(0, 0);
    // },[])

    


    return (
        <div id='ProductDetail'>

            <Section1Component dkey={dkey} cartKey={cartKey} cartCountNumber={cartCountNumber}/>
            <Section2Component dkey={dkey}/>
            <Section3Component/>
            <Section4Component/>
            <Section5Component/>
            <Section6Component/>

        </div>
    );
};

 