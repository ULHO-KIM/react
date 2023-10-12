import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import HeadCss from '../css/Header.module.css';

import menuList from '../dummy/ServiceMenuList.json';

const HfsPageHeader = (props) => {
    const [menu, setMenu] = useState(null);

    const navigate = useNavigate();

    const moveBackPageBtnClick = () => {
        navigate(-1);
    };

    useEffect(() => {
        let tmpMenu = menuList && menuList.serviceMenuList.filter((m) => props.id === m.serviceMeunId);
        setMenu(tmpMenu[0]);
    }, [props.id]);

    return (
        <div>
            <div className={HeadCss.hfsHeadTitleDiv}>
                <button className={HeadCss.hfsHeadButton} onClick={moveBackPageBtnClick}>{`<`}</button>
                {/* <button className={HeadCss.hfsHeadButton}>{menu? menu.serviceMenuNm : props.id}</button> */}
                <h1 className={HeadCss.hfsHeadTitle}>{menu? menu.serviceMenuNm : props.id}</h1>
                <button className={HeadCss.hfsHeadButton} onClick={moveBackPageBtnClick}>X</button>
            </div>
        </div>
    );
};

export default HfsPageHeader;