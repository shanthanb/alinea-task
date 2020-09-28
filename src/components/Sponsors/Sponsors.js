import React from 'react';

import s from './Sponsors.module.scss';

const Sponsors = () => {

    return (
        <div className={s.main}>
            <span className={s.main_text}>
                backed by the best
            </span>
            <div className={s.main_album}>
                <div className={s.main_album_image}>
                    <img
                     alt="Sequoia"
                     className={s.main_album_image_img1}
                     srcSet="https://juno-public.s3-us-west-1.amazonaws.com/Juno/sequioa-image%403x.png"
                     src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/sequioa-image%403x.png" 
                    />
                </div>
                <div className={s.main_album_image}>
                <img 
                 alt="Polychain Capital" 
                 className={s.main_album_image_img2}
                 srcSet="https://juno-public.s3-us-west-1.amazonaws.com/Juno/polychain-capital%403x.png" 
                 src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/polychain-capital%403x.png"
                />
                </div>
                <div className={s.main_album_image}>
                <img
                 alt="Consensys" 
                 className={s.main_album_image_img3}
                 srcSet="https://juno-public.s3-us-west-1.amazonaws.com/Juno/consensys-logo%403x.png" 
                 src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/consensys-logo%403x.png" 
                />   
                </div>
            </div>
        </div>
    );
};

export default Sponsors