import React from 'react';
import Chest from './Chest';
import Panel from './background/Background';
import CardBlock from './chestPrise/ChestPrise';

let index = 0;

const App = ({
    backImage,
    video,
    cards,
}: {
    backImage: string,
    video: string,
    cards: any[]
}) => {

    const [backFilter, setbackFilter] = React.useState('common');
    const [animateChest, setAnimateChest] = React.useState('');
    const [animatePrise, setAnimatePrise] = React.useState(false);

    function click() {
        if (animateChest == 'finish') return;

        if (!animateChest) {
            setAnimateChest('start');
            setbackFilter(cards[index].rarity);
            setAnimatePrise(true);
        }

        else {
            setAnimatePrise((prevState) => !prevState)
            setTimeout(() => {

                if (index + 1 == cards.length) setbackFilter('none');

                else {
                    index++
                    setbackFilter(cards[index].rarity);
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

export default React.memo(App);