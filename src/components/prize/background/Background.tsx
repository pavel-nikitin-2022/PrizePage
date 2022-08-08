import React, { MouseEventHandler } from 'react';
import anime from 'animejs/lib/anime.es.js';
import Illuminate from './illuminate';
import Panel  from './GradientBack';

function Animate(ref: string, opacity: number): any {
    return (
        anime({
            targets: '#' + ref,
            opacity: opacity,
            duration: 1500,
            easing: 'linear',
            autoplay: true,
        })
    );
}

function FilterBack(
    props: {
        backFilter: string
        children?: JSX.Element[] | JSX.Element,
        backImage: string,
        onClick?: MouseEventHandler<HTMLElement>
    }): JSX.Element {

    const animations = React.useRef<any[]>([]);

    React.useEffect(() => {
        if (props.backFilter === 'none'){
            animations.current.push(Animate('main', 0));
            return;
        } 

        animations.current.push(Animate('legendary', (props.backFilter == 'legendary' ? 0.7: 0)));
        animations.current.push(Animate('rare', (props.backFilter == 'rare' ? 1: 0)));
        animations.current.push(Animate('common', (props.backFilter == 'common' || props.backFilter == 'rare' ? 1: 0)));
    }, [props.backFilter]);

    return (
        <Panel id='main' onClick={props?.onClick} backImage={props.backImage} type='image'>
            <Panel id='common' type='common'/>
            <Panel id='legendary' type='legendary'>
                <Illuminate type='legendary' />
            </Panel>

            <Panel id='rare' type='rare'>
                <Illuminate type='rare' />
            </Panel>

            {props?.children}
        </Panel>
    );
}

export default React.memo(FilterBack);