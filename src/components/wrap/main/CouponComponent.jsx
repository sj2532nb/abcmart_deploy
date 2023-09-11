import React from 'react';
import CouponSection1Component from './coupon/CouponSection1Component';
import CouponSection2Component from './coupon/CouponSection2Component';
import CouponSection3Component from './coupon/CouponSection3Component';

export default function CouponComponent(){
     React.useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return (
        <main id="coupon">
            <CouponSection1Component/>
            <CouponSection2Component/>
            <CouponSection3Component/>
        </main>
    );
};
