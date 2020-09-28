import React, { useState } from 'react';

import { PrimaryButton } from '../Widgets/Buttons/Buttons';
import { Primary as PrimaryInput } from '../Widgets/Inputs/Inputs';
import { 
    Primary as PrimaryHeading,
    Tertiary as TertiaryHeading
} from './../Widgets/Headings/Headings';
import s from './Main.module.scss';

const Main = () => {

    const [email, setEmail] = useState('');

    const onEmailChange = e => {
        setEmail(e.target.value);
    }

    return (
        <div className={s.main}>
            <section className={s.main_text}>
                <div className={s.main_text_heading}>
                    <PrimaryHeading 
                     text='The Most Powerful Checking Account'
                    />
                    <TertiaryHeading
                     text='Our checking account gives you higher returns than a savings account with no hidden fees.'
                    />
                    <PrimaryInput 
                     placeholder='Enter Email Address'
                     children={
                        <PrimaryButton text='Join Now' />
                     }
                     value={email}
                     onChange={onEmailChange}
                    />
                    <span className={s.main_text_heading_caption}>
                        <div className={s.main_text_heading_caption_image}>
                            <img
                            alt="USA Flag" 
                            srcSet="https://juno-public.s3-us-west-1.amazonaws.com/Juno/createaccount-homeaddress-flag%403x.png"
                            className={s.main_text_heading_caption_image_img} 
                            src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/createaccount-homeaddress-flag%403x.png" 
                            />
                        </div>
                        <span className={s.main_text_heading_caption_para}>
                            333 spots left for Priority Access
                        </span>
                    </span>
                </div>
                <div className={s.main_text_icons}>
                    <div className={s.main_text_icons_icon}>
                        <img
                         alt="Google Play" 
                         srcSet="https://juno-public.s3-us-west-1.amazonaws.com/Juno/googleplay%403x.png"
                         className={s.main_text_icons_icon_img}
                         src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/googleplay%403x.png" />
                    </div>
                    <div className={s.main_text_icons_icon}>
                        <img
                         alt="Apple Store" 
                         srcSet="https://juno-public.s3-us-west-1.amazonaws.com/Juno/applepay%403x.png" 
                         className={s.main_text_icons_icon_img} 
                         src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/applepay%403x.png" 
                        />
                    </div>
                </div>
            </section>
            <section className={s.main_image}>
                <img
                 className={s.main_image_img}
                 alt="OnJuno App"
                 srcSet="https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-mobile-app%403x.png" 
                 src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-mobile-app%403x.png" 
                />
            </section>
        </div>
    );

};

export default Main;