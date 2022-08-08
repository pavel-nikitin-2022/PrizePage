import { Content, Image, HeaderCard, Header, Panel } from './PriseStyle';
import BorderedText from './border';
import React from 'react';
import Text from './gradientText';
import { Anime } from './Animate'

declare type card = {
    id: string,
    name: string,
    image: string,
    price: string,
    rarity: ('legendary' | 'rare' | 'common'),
    type: string,
    part: string,
    partMax: string,
    entity: string,
    anime: boolean,
};

function CardBlock(
    { card, anime }:
        {
            card: card,
            anime: boolean
        }
): JSX.Element {

    const cardBlockRef = React.useRef<HTMLInputElement>(null);
    const imageRef = React.useRef<HTMLImageElement>(null);
    const headerRef = React.useRef<HTMLInputElement>(null);
    const contentRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        Anime(
            anime,
            {
                image: imageRef,
                header: headerRef,
                all: cardBlockRef,
                content: contentRef,
            }
        )
    }, [anime])

    return (
        <Panel ref={cardBlockRef}>
            <Header ref={headerRef}>
                <HeaderCard rotation={-15} />
                <HeaderCard rotation={0}>
                    <BorderedText fontSize='2vh' component={'div'}>{card.part}</BorderedText>
                </HeaderCard>
            </Header>

            <Image ref={imageRef} src={card.image} />

            <Content ref={contentRef}>
                <BorderedText fontSize='3vh' component={'div'}>{card.name}</BorderedText>
                <Text type={card.rarity} />
                <BorderedText
                    fontSize='2vh'
                    component={'div'}
                >
                    {`${card.part}/${card.partMax} осколка`}
                </BorderedText>
            </Content>
        </Panel>
    );
}

export default CardBlock;