import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import menuList from '../dummy/ServiceMenuList.json';

import HfsPageHeader from '../components/HfsPageHeader';
import CarSvcComp from '../components/CarSvcComp';
import SubscribeComp from '../components/SubscribeComp';
import EventPage from '../components/EventPage';
import ListFixExpd from '../components/ListFixExpd';

const HFS = () => {
    const params = useParams();
    const [menu, setMenu] = useState(null);

    useEffect(() => {
        let tmpMenu = menuList && menuList.serviceMenuList.filter((m) => params.id === m.serviceMeunId);
        setMenu(tmpMenu[0]);
    }, [params.id]);

    let hfsPageRoute = (m) => {
        let menuId = m ? m.serviceMeunId : '';
        if(menuId === 'HFS3') { //자동차 서브 페이지 컴포넌트로 분기
            return (
                <CarSvcComp />
            )
        } else if(menuId === 'HFS28'){
            return (
                <SubscribeComp />
            )
        }else if(menuId === 'HFS32') { //자동차 서브 페이지 컴포넌트로 분기
            return (
                <EventPage />
            )
        }else if(menuId === 'HFS18') { //고정지출
            return (
                <ListFixExpd />
            )
        } else if (params.id === menuId) {
            return ( 
                <div>
                    <p>ID : {m.serviceMeunId}</p>
                    <p>NAME : {m.serviceMenuNm}</p>
                    <p>IMG : {m.serviceMenuImg}</p>
                    <p>LINK : {m.serviceMenuLink}</p>
                    <p>TAG : {m.servicMenuTag}</p>
                    <p>HI : {m.serviceMenuHi}</p>
                </div>
            )
        } else {
            return (<p></p>)
        }
    }

    return (
        <div>
            <HfsPageHeader id={params.id} />
            {hfsPageRoute(menu)}
        </div>
    );
};

export default HFS;