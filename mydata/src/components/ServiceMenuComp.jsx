//import React, { useState, useEffect} from 'react'
import React from 'react';
import ListCss from '../css/List.module.css'
import { Link } from "react-router-dom"

function ServiceMenuComp({menuHi, menuNm, menuImg, menuUrl, tag, ...others}) {
    //서비스 메뉴 클릭 이벤트 정의
    // let menuNmClickEvent = (clickedMenuName, clickedMenuUrl, e) => {
    //     console.log(clickedMenuName);
    //     console.log(clickedMenuUrl);
    //     window.open(clickedMenuUrl, "_blank", "noopener, noreferrer");
    //     e.preventDefault();
    // };

    return (    
        <div className={ListCss.menuCompContainer}>
            <div className={ListCss.rowContainer}>
                <Link className={ListCss.menuUrlLink} to={`/${menuUrl}`}>{menuNm}</Link>
                {/* <h1 onClick={(e) => {menuNmClickEvent(menuNm, menuUrl, e)}}>{menuNm}</h1> */}
            </div>
        </div>
    );
};

export default ServiceMenuComp;