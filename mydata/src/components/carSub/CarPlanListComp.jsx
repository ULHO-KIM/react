import React from 'react';

import CarCss from "../../css/Car.module.css";

import WooriImg from "../../img/woori.png";

const CarPlanListComp = (props) => {
    return (
        <div className={CarCss.carPlanListDiv}>
            <div>
                <img className={CarCss.carPlanCompImg} src={WooriImg} alt='woori' />
            </div>
            <div className={CarCss.carPlanListInfo}>
                <p>이름 :{props.carName}</p>
                <p>제조사 :{props.carCompany}</p>
                <p>가격 : {props.carPrice}</p>
            </div>
        </div>
    );
};

export default CarPlanListComp;