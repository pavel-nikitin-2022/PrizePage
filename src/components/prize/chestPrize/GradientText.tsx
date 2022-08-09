import React from 'react';
import styled from '@emotion/styled';

export const Text = styled.text`
    text-shadow: 1px 0 1px #000, 
    0 2px 1px #000, 
    -1px 0 1px #000, 
    0 -1px 1px #000;
`;

const types = {
    legendary: {gradient: 'Legendary', text: 'Легендарная'},
    rare: {gradient: 'Rare', text: 'Редкая'},
    common: {gradient: 'Rare', text: 'Обычная'}
};

/**
 * Градиентный текст(подпись)
 * @param props - свойства приза
 * @param props.type - какой текст и градиент использовать
 */
function GradientText(props: {type: 'legendary' | 'rare' | 'common'}): JSX.Element {
    let state = types[props.type];

    return (
        <svg width="110" height="40" viewBox="0 0 110 20" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="Rare" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#DDF9FF" />
                    <stop offset="100%" stopColor="#4EDFFF"/>
                </linearGradient>

                <linearGradient id="Legendary" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor=" #F1F2B4" />
                    <stop offset="55.21%" stopColor=" #FFBE9A" />
                    <stop offset="100%" stopColor="#FFABA6"/>
                </linearGradient>
            </defs>

            <Text fill={`url(#${state.gradient})`} x='1' y='7'>
                {state.text}
            </Text>
        </svg>
    );
}

export default GradientText;
