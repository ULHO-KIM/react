import React, { useState } from 'react';

import carList from '../../dummy/CarList.json';

const CarEnrollComp = (props) => {
    const [carNum, setCarNum] = useState('');
    const [carType, setCarType] = useState('');
    const [step1, setStep1] = useState(false);
    const [step2, setStep2] = useState(false);

    const isExistCar = (carNum) => {
        let tmpExistCarLst = carList && carList.filter((c) => carNum === c.CarNum);
        return tmpExistCarLst.length > 0;
    }

    return (
        <div>
            <p>자동차 등록 화면</p>
            <input type='text' placeholder='자동차번호입력' onChange={(e)=>{setCarNum(e.target.value);}} maxLength='8' />
            <button type='submit' onClick={(e) => {
                console.log("다음 버튼 클릭!");
                console.log(carNum);
                if(carNum.length >= 7) {
                    console.log("자동차 번호 정상 입력");
                    let tmpExistCarYn = isExistCar(carNum);
                    setStep1(tmpExistCarYn);
                } else {
                    alert("자동차 번호 다시 입력 유도");
                    setStep1(false);
                }
            }}>다음</button>
            { step1 ?
                <div>
                    <p>자동자 번호 정상 스텝 1</p>
                    <input type='text' placeholder='차종입력' onChange={(e)=>{setCarType(e.target.value);}} />
                    <button type='submit' onClick={(e) => {
                        console.log("다음 버튼 클릭!");
                        console.log(carType);
                        if(carType !== '') {
                            console.log("자동차 종류 정상 입력");
                            setStep2(true);
                        } else {
                            alert("자동차 종류 다시 입력 유도");
                            setStep2(false);
                        }
                    }}>다음</button>
                </div>
                : <p></p> }
            { step2 ?
                <div>
                    <p>자동자 번호 정상 스텝 2</p>
                    <p>차량 정보 확인</p>
                    <p>{`차량 번호 : ${carNum}`}</p>
                    <p>{`차량 종류 : ${carType}`}</p>
                    <button type='submit' onClick={(e) => {
                        alert("최종 등록 버튼 클릭!");
                        props.closeEnrollComp(false);
                    }}>등록</button>
                </div>
                : <p></p> }
            <button type='submit' onClick={(e) => {
                console.log("돌아가기 버튼 클릭!");
                props.closeEnrollComp(false);
            }}>돌아가기</button>
        </div>
    );
};

export default CarEnrollComp;