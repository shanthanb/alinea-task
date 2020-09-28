import React from 'react';

import { Secondary as SecondaryHeading } from '../Widgets/Headings/Headings';
import { info, infoHead } from '../../strings';
import s from './Info.module.scss';

const Info = () => {

    return (
        <div className={s.main}>
            <div className={s.main_text}>
                <span className={s.main_text_subHead}>
                    Start saving for a rainy day fund
                </span>
                <SecondaryHeading 
                 text={infoHead}
                />
                <span className={s.main_text_info}>
                    {info}
                </span>
            </div>
            <div className={s.main_image}>
                <img
                 alt="Cashback"
                 srcSet="https://juno-public.s3-us-west-1.amazonaws.com/Juno/svg/juno-apy-215.svg" 
                 className={s.main_image_img}
                 src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/svg/juno-apy-215.svg" 
                />
            </div>
        </div>
    );
};

export default Info;