import React from 'react';

import s from './Heading.module.scss';

export const Primary = ({
    text = 'Some text'
}) => {

    return (
        <h1 className={s.primary}>
            {text}
        </h1>
    )
};

export const Secondary = ({
    text = 'Some text'
}) => {

    return (
        <h3 className={s.secondary}>
            {text}
        </h3>
    )
}

export const Tertiary = ({
    text = 'Some Text',
    children = ''
}) => {

    return (
        <h4 className={s.tertiary}>
            {children || text}
        </h4>
    )
};