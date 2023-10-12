import React from 'react';

import HeadCss from '../css/Header.module.css'

import HfsPageHeaderMenuComp from './hfsHeadSub/HfsPageHeaderMenuComp';

const ServiceMenuHead = () => {
    return (
        <div>
            <h1 className={HeadCss.headTitle}>마이데이터</h1>
            <div className={HeadCss.headItems}>
                <HfsPageHeaderMenuComp menuName="데이터등록" />
                <HfsPageHeaderMenuComp menuName="데이터관리" />
                <HfsPageHeaderMenuComp menuName="통합검색" />
            </div>
        </div>
    );
};

export default ServiceMenuHead;