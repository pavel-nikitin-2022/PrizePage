import React from 'react';
import Prize from './components/prize/prize';

const App = ({
    backImage,
    video,
    cards,
}: {
    backImage: string,
    video: string,
    cards: any[]
}) => {

    return (
        <Prize backImage={backImage} video={video} cards={cards}/>
    );
}

export default React.memo(App);