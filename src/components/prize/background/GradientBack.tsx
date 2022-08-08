import styled from '@emotion/styled';
import React, { MouseEventHandler } from 'react';
import filter from '../../../img/filter.png'

const backgrounds = {
    common: 'linear-gradient(180deg, rgb(54, 84, 179, 0.7), rgb(54, 84, 179, 0.4))',
    legendary: 'linear-gradient(180deg, rgb(110, 37, 62, 0), rgb(110, 37, 62, 0.5))',
    rare: 'linear-gradient(180deg, rgb(101, 22, 46, 0), rgb(101, 22, 45, 0.5))',
}

export const Panel = styled.div`
    opacity: ${(props: { type: ('common' | 'rare' | 'image'), backImage?: string }) => (props.type === 'image' || props.type === 'common' ? 1 : 0)};
    position: ${(props: { type: ('common' | 'rare' | 'image'), backImage?: string }) => (props.type === 'image' ? 'relative' : 'absolute')};
    -webkit-user-select: none;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: ${window.innerWidth}px;
    min-width: ${window.innerWidth}px;
    min-height: ${window.innerHeight}px;
    max-height: ${window.innerHeight}px;
    background: ${(props: { type: ('common' | 'rare' | 'image'), backImage?: string }) => (props.type === 'image' ? `url(${props?.backImage})` : backgrounds[props.type])};
    background-size: auto 100vh;
    background-attachment: fixed;
`;

const Legendary = styled.div`
    opacity: 0;
    max-width: ${window.innerWidth}px;
    min-width: ${window.innerWidth}px;
    min-height: ${window.innerHeight}px;
    max-height: ${window.innerHeight}px;
    position: absolute;
    background: url(${filter});
    background-size: 100% 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

function Back(
    props: {
        type: ('common' | 'rare' | 'legendary' | 'image'),
        backImage?: string,
        onClick?: MouseEventHandler<HTMLElement>,
        id: string,
        children?: any
    }): JSX.Element {

    return (
        (props.type != 'legendary' ?
            (
                <Panel
                    id={props.id}
                    onClick={props.onClick}
                    type={props.type}
                    backImage={props?.backImage}
                >
                    {props?.children}
                </Panel>
            ) :
            
            (
                <Legendary id={props.id}>
                    {props?.children}
                </Legendary>
            )
        )
    );
}

export default React.memo(Back);
