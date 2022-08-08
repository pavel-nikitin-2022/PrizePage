import React from "react";
import anime from "animejs"
import { CLOSE_CONTENT, OPEN_CONTENT } from './config';

declare type Refs = {
    all: React.RefObject<HTMLInputElement>,
    image: React.RefObject<HTMLImageElement>,
    header: React.RefObject<HTMLInputElement>,
    content: React.RefObject<HTMLInputElement>,
}

declare type Ref = (HTMLInputElement | HTMLImageElement | (HTMLInputElement | null)[] | null);

const animations: any = []

const create = (type: string, refs: Ref, state: boolean) => {
    var answer: Record<string,any> = {};
    answer.targets = refs

    for (let keys in OPEN_CONTENT[type]){
        const copy = OPEN_CONTENT[type][keys];
        answer[keys] = {
            autoplay: false,
            easing: 'linear',
            value: (state ? copy.value : CLOSE_CONTENT.delay),
            delay: (state ? copy.delay : CLOSE_CONTENT.value),
            duration: (state ? copy.duration : CLOSE_CONTENT.duration),
        }
    }

    return anime(answer);
}

export const Anime = (animationState: boolean, refs: Refs) => {
    animations.forEach((anim: any) => anim.pause());
    animations.splice(0, animations.length,
        create('prize', refs.all.current, animationState),
        create('image', refs.image.current, animationState),
        create('content', [refs.header.current, refs.content.current], animationState)
    );
    animations.forEach((anim: any) => { anim.play() });
}