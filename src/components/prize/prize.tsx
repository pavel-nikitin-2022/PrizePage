import React from 'react';
import Chest from './Chest';
import Panel from './background/Background';
import CardBlock from './chestPrize/ChestPrize';

let index = 0;

/**
 * Страница с сундука с призом
 * @param props - свойства страницы
 * @param props.backImage - задний фон страницы
 * @param props.video - видеофайл с сундуком
 * @param props.cards - массив с призовыми карточками
 */
const Prize = ({
    backImage,
    video,
    cards,
}: {
    backImage: string,
    video: string,
    cards: any[]
}) => {

    const [backFilter, setBackFilter] = React.useState('common');
    const [animateChest, setAnimateChest] = React.useState('');
    const [animatePrise, setAnimatePrise] = React.useState(false);

    function click() {
        if (animateChest == 'finish') return;

        if (!animateChest) {
            setAnimateChest('start');
            setBackFilter(cards[index].rarity);
            setAnimatePrise(true);
        }

        else {
            setAnimatePrise((prevState) => !prevState)
            setTimeout(() => {

                if (index + 1 == cards.length) setBackFilter('none');

                else {
                    index++
                    setBackFilter(cards[index].rarity);
                    setAnimateChest('card' + index);
                    setAnimatePrise(true);
                }
            }, 200);
        }
    }

    return (
        <Panel
            backFilter={backFilter}
            backImage={backImage}
            onClick={()=>click()}
        >
            <Chest animate={animateChest} video={video} />

            <CardBlock
                card={cards[index]}
                anime={animatePrise}
            />
        </Panel>
    );
}

export default React.memo(Prize);