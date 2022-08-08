import React from 'react';
import styled from '@emotion/styled';
import anime from 'animejs';

const Anim = styled.video`
    width: 67%;
    max-width: 400px;
    z-index: 10;
`;

function Chest(props: { video: string, animate: string }): JSX.Element {
    const refChest = React.useRef<HTMLVideoElement>(null)

    React.useEffect(() => {
        if (!refChest.current) return

        if (props.animate == 'start') {
            refChest.current.currentTime = 0;
            refChest.current.play();
            anime({
                targets: refChest.current,
                duration: 1000,
                translateY: 100,
                easing: 'linear'
            })
        }

        else if (props.animate) {
            refChest.current.currentTime = 0.3;
            refChest.current.play();
        }
    }, [props.animate])

    return (
        <Anim
            ref={refChest}
            playsInline
            muted
        >
            <source src={props.video} type="video/mp4" />
        </Anim>
    );
}

export default React.memo(Chest);