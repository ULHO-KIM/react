//import React, { useEffect, useState, useRef } from 'react';
import React from 'react';
// import components
import ServiceMenuComp from '../components/ServiceMenuComp';
import ServiceMenuHead from '../components/ServiceMenuHead';

//import dummy data
import menuList from '../dummy/ServiceMenuList.json';

function serviceMenuList () {
    //debugger;
    return (
        <div>
            <ServiceMenuHead />
            { menuList && menuList.serviceMenuList.map((menu, idx) => {
                    return( <ServiceMenuComp key={idx} 
                            menuHi={menu.serviceMenuHi}
                            menuNm={menu.serviceMenuNm}
                            menuImg={menu.serviceMenuImg}
                            menuUrl={menu.serviceMenuLink}
                            tag = {menu.servicMenuTag}
                        />
                    )
                } )
            }
        </div>
    )
}
/**
 * "serviceMenuHi" : "부가서비스",
        "serviceMeunId" :  "HFS",
        "serviceMenuNm" :  "신용점수 조회",
        "serviceMenuImg" : "img/",
        "serviceMenuLink" : "mkd/hfs/",
        "serviceMenuTag" : "0"
 */
export default serviceMenuList;