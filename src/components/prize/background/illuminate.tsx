import React from 'react';
import anime from 'animejs';
import png from '../../../img/Rare.png';
import png2 from '../../../img/Legendary.png';

function IlluminatePNG(props: { type: 'legendary' | 'rare'}): JSX.Element {
    const svgRef = React.useRef<HTMLImageElement>(null);

    React.useEffect(()=>{
        anime({
            targets: svgRef.current,
            rotate: '1turn',
            duration: 100000,
            easing: 'linear',
            loop: true,
        })
    }, [])

    return (
        <img width={window.innerHeight + window.innerHeight*0.2} ref={svgRef} src={(props.type === 'legendary' ? png2: png)}/>
    );
}

export default React.memo(IlluminatePNG);

