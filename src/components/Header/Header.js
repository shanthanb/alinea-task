import React, { useState, useLayoutEffect, useEffect } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { GiHamburgerMenu, GiCancel } from 'react-icons/gi';

import s from './Header.module.scss';
import { SecondaryButton, PrimaryButton } from '../Widgets/Buttons/Buttons';

const Header = () => {

    const [winWidth, setWinWidth] = useState(window.innerWidth);
    const [dropdown, toggleDropDown] = useState(false);

    useLayoutEffect(() => {

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    });

    const handleResize = e => {
        setWinWidth(window.innerWidth);
    };

    useEffect(() => {
        
        if(winWidth > 900){
            toggleDropDown(true);
        }else{
            toggleDropDown(false);
        };
        
    }, [winWidth]);

    return(
        <header className={s.main}>
            <div className={s.main_partA}>
                <div className={s.main_partA_logo}>
                <img alt="OnJuno Logo"
                 src="https://juno-public.s3-us-west-1.amazonaws.com/on-juno.png"
                 srcSet="https://juno-public.s3-us-west-1.amazonaws.com/on-juno%402x.png, 
                 https://juno-public.s3-us-west-1.amazonaws.com/on-juno%403x.png"
                 className={s.main_partA_logo_img} 
                />
                </div>
                <nav style={!dropdown ? {display: 'none'} : {display: 'flex'}} className={s.main_partA_options}>
                    <span className={s.main_partA_options_choice}>
                        Home
                    </span>
                    <span className={s.main_partA_options_choice}>
                        Company
                        <RiArrowDropDownLine />
                    </span>
                    <span className={s.main_partA_options_choice}>
                        Learn
                        <RiArrowDropDownLine />
                    </span>
                    <span className={s.main_partA_options_choice}>
                        Legal
                        <RiArrowDropDownLine />
                    </span>
                    {winWidth <= 900 && <ButtonJSX />}
                </nav>
            </div>
            {winWidth > 900 && <ButtonJSX />}
            <div onClick={() => toggleDropDown(!dropdown)} className={s.ham}>
                {!dropdown ? <GiHamburgerMenu color='#888' /> : <GiCancel color='#888' />}
            </div>
            
        </header>
    )
};


const ButtonJSX = () => (
    <div className={s.main_partB}>
        <div className={s.main_partB_container}>
            <SecondaryButton 
                text='Login'
            />
        </div>
        <div className={s.main_partB_container}>
            <PrimaryButton 
                text='Signup'
            />
        </div>
    </div>
)

export default Header;