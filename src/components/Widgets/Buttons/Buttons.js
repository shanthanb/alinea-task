import React from 'react';

import s from './Buttons.module.scss';


export const PrimaryButton = ({
    text = 'Submit',
    onClick = () => {},
    clickable = true
}) => {

    return (
        <div
         onClick={onClick}
         style={!clickable ? {backgroundColor: 'rgb(178,178,178)'} : {}}
         className={[s.primary, s.common].join(" ")}
        >
            {text}
        </div>
    )
};


export const SecondaryButton = ({
    text = 'Submit',
    onClick = () => {}
}) => {

    return (
        <div className={[s.secondary, s.common].join(" ")}>
            {text}
        </div>
    )
};