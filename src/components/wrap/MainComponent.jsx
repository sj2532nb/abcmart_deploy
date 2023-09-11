import React from 'react';
import KidsComponent from './main/KidsComponent';
import MenComponent from './main/MenComponent';
import ProductDetailComponent from './main/ProductDetailComponent';
import SaleComponent from './main/SaleComponent';
import EventComponent from './main/EventComponent';
import WomenComponent from './main/WomenComponent';

export default function MainComponent(){
    return (
        <div id='main'>
            <MenComponent/>
            <WomenComponent/>
            <KidsComponent/>
            <SaleComponent/>
            <EventComponent/>
            <ProductDetailComponent/>
        </div>
    );
};
