import React from 'react';
import ReactDOM from 'react-dom/client'
import ChestPage from './App'
import background from './img/ShopBack.png';
import video from './img/chestGif.webm';
import Sheep from './img/Sheep.png';

const cards = [
  {
    id: '3',
    name: 'Лиза',
    price: '10',
    image: Sheep,
    rarity: 'legendary',
    type: 'unit',
    entity: 'sheep',
    part: '1',
    partMax: '4'
  },
  {
    id: '2',
    name: 'Аня',
    price: '15',
    image: Sheep,
    rarity: 'rare',
    type: 'unit',
    entity: 'sheep',
    part: '3',
    partMax: '4'
  },
  {
    id: '2',
    name: 'Паша',
    price: '15',
    image: Sheep,
    rarity: 'rare',
    type: 'unit',
    entity: 'sheep',
    part: '3',
    partMax: '4'
  },
];


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChestPage cards={cards} backImage={background} video={video}/>
)
