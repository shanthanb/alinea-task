import React, {useState, useLayoutEffect, useEffect} from 'react';

import {  
    listItems1, 
    listItems2,
    listItems3,
    info1, info2, info3
} from '../../strings/index';
import {  
    Secondary as SecondaryHeading,
    Tertiary as TertiaryHeading
} from '../Widgets/Headings/Headings';
import s from './Cards.module.scss';
import CardStrip from '../CardStrip/CardStrip';


const Cards = () => {

    const [selectedCard, setSelectedCard] = useState('all');
    const [winWidth, setWinWidth] = useState(window.innerWidth);

    useLayoutEffect(() => {

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    });

    const handleResize = e => {
        setWinWidth(window.innerWidth);
    };

    useEffect(() => {

        if(winWidth > 900){
            setSelectedCard('all');
        }else{
            setSelectedCard('metal');
        }
    }, [winWidth]);


    return (
        <div className={s.main}>
            <div className={s.main_about}>
                <SecondaryHeading 
                 text='Sign up early to save more'
                />
                <TertiaryHeading>
                    Depending on the level of your checking account, you’ll earn between 1.15%<sup>3</sup> to 2.15%<sup>1</sup> bonus rate.
                </TertiaryHeading>
            </div>

            <div className={s.tray}>
                <span onClick={()=>setSelectedCard('metal')} className={[s.tray_item, (selectedCard==='metal' && s.selected)].join(' ')}>
                    metal
                </span>
                <span onClick={()=>setSelectedCard('premium')} className={[s.tray_item, (selectedCard==='premium' && s.selected)].join(' ')}>
                    premium
                </span>
                <span onClick={()=>setSelectedCard('basic')}  className={[s.tray_item, (selectedCard==='basic' && s.selected)].join(' ')}>
                    basic
                </span>
            </div>
            
            <div className={s.main_cardHolder}>
                {(selectedCard === 'metal' || selectedCard === 'all') && <CardStrip
                    headerColor='#00ff0022'
                    imageSrc='https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-black-card%403x.png' 
                    interestColor='rgba(70,67,238,1)'
                    cashbackColor
                    cardType='metal'
                    list={listItems1}
                    interest={[2.15, 1]}
                    cashback={5}
                    maxSpots={2500}
                    filledSpots={2167}
                    canApply
                    info={info1}
                    offerValid
                    buttonText='Sign Up'
                    offer={{
                        fee: '$11.99/m',
                        free: 'Free for 6 months',
                        savings: '$60 savings'
                    }}
                />}
                <span className={s.voidVertical} />
                {(selectedCard === 'premium' || selectedCard === 'all') && <CardStrip 
                    imageSrc="https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-plus%403x.png"
                    list={listItems2}
                    cardType='premium'
                    interest={[1.65, 2]}
                    cashback={4}
                    maxSpots={2000}
                    info={info2}
                    buttonText='Up Next'
                    offer={{
                        fee: '$6.99/m',
                        free: 'Coming Soon',
                        savings: null
                    }}
                />}
                <span className={s.voidVertical} />
                {(selectedCard === 'basic' || selectedCard === 'all') && <CardStrip 
                    imageSrc="https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-basic%403x.png"
                    list={listItems3}
                    info={info3}
                />}
            </div>
        </div>
    );

};

export default Cards;