import React from 'react';

import HeadCss from '../../css/Header.module.css'
import WooriImg from '../../img/woori.png';

const HfsPageHeaderMenuComp = (props) => {
    return (
        <div>
            <div className={HeadCss.headItem}>
                    <div className={HeadCss.headItemImgDiv}>
                        <img className={HeadCss.headItemImg} src={WooriImg} alt='Woori' />
                    </div>
                    <p>{props.menuName}</p>
                </div>
        </div>
    );
};

export default HfsPageHeaderMenuComp;