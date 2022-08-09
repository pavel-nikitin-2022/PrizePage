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

/**
 * Создает анимацию для конкретной части карточки
 * @param type - тип анимации все типы содержатся в ./config
 * @param refs - ссылки на анимируемые DOM элементы
 * @param state - показывает аимация закрытия или открытия
 * @returns Возвращает объект anime
 */
const createAnimation = (type: string, refs: Ref, state: boolean) => {
    var answer: Record<string, any> = {};
    answer.targets = refs

    for (let keys in OPEN_CONTENT[type]) {
        const copy = OPEN_CONTENT[type][keys];
        if (typeof (copy) != 'object') answer[keys] = copy
        else {
            answer[keys] = {
                autoplay: false,
                easing: 'linear',
                value: (state ? copy.value : CLOSE_CONTENT.value),
                delay: (state ? copy.delay : CLOSE_CONTENT.delay),
                duration: (state ? copy.duration : CLOSE_CONTENT.duration),
            }
        }
    }
    return anime(answer);
}

/**
 * Контроллер анимации карточек
 * @param animationState - отдать команду (закрыть/открыть) блок приза => проиграть отдельные анимации
 * @param refs - ссылки на анируемые DOM элементы
 */
export const Anime = (animationState: boolean, refs: Refs) => {
    animations.forEach((anim: any) => anim.pause());
    animations.splice(0, animations.length,
        createAnimation('prize', refs.all.current, animationState),
        createAnimation('image', refs.image.current, animationState),
        createAnimation('content', [refs.header.current, refs.content.current], animationState)
    );
    animations.forEach((anim: any) => { anim.play() });
}