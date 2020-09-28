import React, { useEffect, useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

import { PrimaryButton } from '../Widgets/Buttons/Buttons';
import s from './CardStrip.module.scss';

const CardStrip = ({
    imageSrc = '',
    cardType = 'basic',
    headerColor = '#fafafa',
    interest = [1.15, 3],
    cashback = 3,
    interestColor = false,
    cashbackColor = false,
    maxSpots = 10000,
    filledSpots = 0,
    list=[],
    canApply = false,
    info = '',
    offerValid = false,
    buttonText = 'Coming Soon',
    offer={
        fee: 'No',
        free: 'Free Forever',
        savings: null
    }
}) => {

    const [width, setWidth] = useState((filledSpots*100) / maxSpots);
    
    useEffect(() => {

        setWidth((filledSpots*100) / maxSpots);
    }, [filledSpots, maxSpots]);

    return (
        <div className={s.main}>
            <Overlay 
                imageSrc={imageSrc}
                cardType={cardType}
            />     
            <Header 
                headerColor={headerColor}
                cardType={cardType}
                interestColor={interestColor}
                interest={interest}
                cashbackColor={cashbackColor}
                cashback={cashback}
            />
            <Spots 
                filledSpots={filledSpots}
                width={width}
                maxSpots={maxSpots}
                canApply={canApply}
                buttonText={buttonText}
            />
            <List 
                renderList={renderList}
                info={info}
                list={list}
            />        
            <Footer 
                offer={offer}
                offerValid={offerValid}
            />          
        </div>
    );
};


export default CardStrip;


const Overlay = ({
    imageSrc,
    cardType
}) => (
    <span className={s.main_overlay}>
        <img 
            className={s.main_overlay_img}
            src={imageSrc}
            alt={`${cardType} card`}
        />
    </span>
)


const Header = ({
    headerColor,
    cardType,
    interestColor,
    interest,
    cashbackColor,
    cashback,
}) => (
    <div style={{backgroundColor: headerColor}} className={s.main_header}>
        <div className={s.main_header_data}>
            <span className={s.main_header_data_type}>{cardType}</span>
            <span style={interestColor?{color: interestColor}:{}} className={s.main_header_data_interest}>
                {interest[0]}%
                <sup style={{color: '#999', fontWeight: '500', fontSize:'3rem'}}>{interest[1]}</sup>
            </span>
            <span style={{display: 'flex', alignItems:'center'}}>
                <span style={cashbackColor?{backgroundColor:'green'}:{}} className={s.main_header_data_cashback}>{cashback}%</span> 
                <span className={s.main_header_data_cashback_sub}>cash back</span>
            </span>
        </div>
    </div>
)

const renderList = list => {

    return list.map(el => {

        return (
            <div key={el} className={s.main_includes_list_item}>
                <AiOutlineCheck color='green' />
                <span className={s.main_includes_list_item_text}>{el}</span>
            </div>
        )
    })

}

const Spots = ({
    filledSpots,
    width,
    maxSpots,
    canApply,
    buttonText
}) => (
    <div className={s.main_spots}>
        <div className={s.main_spots_progress}>
            <div className={s.main_spots_progress_data}>
                <span className={s.main_spots_progress_data_first}>
                    <span className={s.special}>{filledSpots}</span>
                    /{maxSpots} spots
                </span>
                <span className={s.main_spots_progress_data_second}>{maxSpots-filledSpots} spots left</span>
            </div>
            <div className={s.main_spots_progress_indicator}>
                <span style={{width: `${width}%`}} className={s.main_spots_progress_indicator_green} />
            </div>
        </div>
        <div className={s.main_spots_buttonContainer}>
            <PrimaryButton clickable={canApply} text={buttonText} />
        </div>
    </div>
);


const List = ({
    renderList,
    list,
    info
}) => (
    <div className={s.main_includes}>
        <span className={s.main_includes_head}>includes</span>
        <div className={s.main_includes_list}>
            {renderList(list)}
        </div>
        <span className={s.main_includes_info}>
            {info}
        </span>
    </div>
);


const Footer = ({
    offer,
    offerValid
}) => (
    <div style={!offerValid ? {backgroundColor: '#fafafa'} : {}} className={s.main_foot}>
        <div className={s.main_footer}>
            <div className={s.main_footer_icon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" >
                    <path
                    fill="#00A86B"
                    d="M11 9h4c.265 0 .52-.105.707-.293C15.895 8.52 16 8.265 16 8c0-.265-.105-.52-.293-.707C15.52 7.105 15.265 7 15 7h-2V6c0-.265-.105-.52-.293-.707C12.52 5.105 12.265 5 12 5c-.265 0-.52.105-.707.293C11.105 5.48 11 5.735 11 6v1c-.796 0-1.559.316-2.121.879C8.316 8.44 8 9.204 8 10s.316 1.559.879 2.121C9.44 12.684 10.204 13 11 13h2c.265 0 .52.105.707.293.188.187.293.442.293.707 0 .265-.105.52-.293.707-.187.188-.442.293-.707.293H9c-.265 0-.52.105-.707.293C8.105 15.48 8 15.735 8 16c0 .265.105.52.293.707.187.188.442.293.707.293h2v1c0 .265.105.52.293.707.187.188.442.293.707.293.265 0 .52-.105.707-.293.188-.187.293-.442.293-.707v-1c.796 0 1.559-.316 2.121-.879.563-.562.879-1.325.879-2.121s-.316-1.559-.879-2.121C14.56 11.316 13.796 11 13 11h-2c-.265 0-.52-.105-.707-.293C10.105 10.52 10 10.265 10 10c0-.265.105-.52.293-.707C10.48 9.105 10.735 9 11 9zm1-8c-2.176 0-4.302.645-6.111 1.854-1.81 1.209-3.22 2.926-4.052 4.936-.832 2.01-1.05 4.222-.626 6.356.425 2.134 1.472 4.094 3.01 5.632 1.54 1.539 3.5 2.586 5.633 3.01 2.134.425 4.346.207 6.355-.625 2.01-.833 3.729-2.243 4.937-4.052C22.355 16.302 23 14.176 23 12c0-2.917-1.159-5.715-3.222-7.778C17.715 2.159 14.918 1 12 1zm0 20c-1.78 0-3.52-.528-5-1.517-1.48-.989-2.634-2.394-3.315-4.039-.681-1.644-.86-3.454-.512-5.2.347-1.746 1.204-3.35 2.463-4.608 1.259-1.259 2.862-2.116 4.608-2.463 1.746-.347 3.556-.17 5.2.512 1.645.681 3.05 1.835 4.04 3.315C20.471 8.48 21 10.22 21 12c0 2.387-.948 4.676-2.636 6.364C16.676 20.052 14.387 21 12 21z" data-v-6c24aca2="" 
                    />
                </svg>
            </div>
            {offer.fee && <span style={!offerValid ? {color: '#aaa'} : {}} className={s.main_footer_text}>
                {offer.fee} Membership Fee
            </span>}
        </div>
        <div className={s.main_foot_info}>
            {offer.free && <span style={!offerValid ? {color: '#aaa'} : {}} className={s.main_foot_info_main}>
                {offer.free}
            </span>}
            {offer.savings && <span style={!offerValid ? {color: '#aaa'} : {}} className={s.main_foot_info_sub}>
                {offer.savings}
            </span>}
        </div>
    </div>
);