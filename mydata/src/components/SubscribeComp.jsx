import React, { useState, useEffect } from 'react';


// dummy
import subscribeList from '../dummy/SubscribeList.json';


const SubscribeComp = () => {
    const [typeList, setArr] = useState([]);
    
    useEffect(() => {
        let tmpType = subscribeList && subscribeList.SubscirbeList.map((item) => item.iconType);
        setArr(tmpType);
    }, []);

    console.log(typeList)
    return (
        <div>
            
        </div>
    );
};

/*
 * 아이콘, 아이디, 구독명, 설명 
 * 컴포넌트 코드 봐야할듯
 * 해쉬태그 봐야함
 * html을 전체적으로 봐야함
 */
export default SubscribeComp;