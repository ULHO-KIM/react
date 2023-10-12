import React from 'react';

import CarPlanListComp from './CarPlanListComp';

import CarCss from "../../css/Car.module.css";

const CarPlanComp = () => {
    const planedCarLst = [
        {
            name:"모닝",
            company: "기아",
            price: "1000~2000"
        }, {
            name:"스파크",
            company: "쉐보레",
            price: "1000~2000"
        }, {
            name:"i10",
            company: "현대",
            price: "1000~2000"
        }, {
            name:"레이",
            company: "기아",
            price: "1000~2000"
        }, {
            name:"캐스퍼",
            company: "현대",
            price: "1000~2000"
        }, {
            name:"마티즈",
            company: "쉐보레",
            price: "1000~2000"
        }
    ];

    return (
        <div>
            <h2 className={CarCss.carMyCarTitle}>관심차량</h2>
            {planedCarLst.map((element, idx) => {
                return (
                    <CarPlanListComp key={idx} carName={element.name} carCompany={element.company} carPrice={element.price} />
                )
            })}
            <div className={CarCss.carPlanCarSearchBtnDiv}>
                <button className={CarCss.carPlabCarSearchBtn} type='submit' onClick={(e) => {
                    console.log("관심차량검색버튼 클릭");
                }}>자동차 검색하기</button>
            </div>
        </div>
    );
};

export default CarPlanComp;