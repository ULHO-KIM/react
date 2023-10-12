import React, { useState } from 'react';

import CarEnrollComp from './carSub/CarEnrollComp';
import CarPlanComp from './carSub/CarPlanComp';

import CarCss from "../css/Car.module.css";

const CarSvcComp = () => {
    const [isMainComp, setIsMainComp] = useState(true);
    const [isEnrollComp, setIsEnrollComp] = useState(false);

    const showCarMain = (isYn) => {
        if(isYn) {
            return (
                <div>
                    <div className={CarCss.carSvcTopDiv}>
                        <h2 className={CarCss.carMyCarTitle}>소유 차량</h2>
                        <div className={CarCss.carMyCarDiv}>
                            <h2>차량등록</h2>
                            <p>소유하신 차량을 등록하시고</p>
                            <p>시세 정보를 확인하세요</p>
                            <div className={CarCss.carMyCarAddBtnDiv}>
                                <button className={CarCss.carMyCarAddBtn} type='submit' onClick={(e) => {
                                    console.log("차량등록버튼 클릭");
                                    setIsMainComp(false);
                                    setIsEnrollComp(true);
                                }}>+</button>
                            </div>
                        </div>
                    </div>
                    <p className={CarCss.carSplitCarDiv} />
                    <div className={CarCss.carSvcBottomDiv}>
                        <CarPlanComp />
                    </div>
                </div>
            )
        }
    }

    const showCarEnroll = (isYn) => {
        if(isYn) {
            return (
                <div>
                    <CarEnrollComp closeEnrollComp={getStateLowerComp} />
                </div>
            )
        }
    }

    const getStateLowerComp = (enrollState) => {
        setIsEnrollComp(enrollState);
        setIsMainComp(!enrollState);
    }

    return (
        <div>
            {showCarMain(isMainComp)}
            {showCarEnroll(isEnrollComp)}
        </div>
    );
};

export default CarSvcComp;