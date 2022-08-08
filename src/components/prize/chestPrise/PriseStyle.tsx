import styled from '@emotion/styled';
import '../../../index.css';

//основа блока
export const Panel = styled.div`
    transform: 'scale(0)';
    padding-left: 125px;
    z-index: 5;
    font-size: 14px;
    position: absolute;
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 70px auto;
    grid-template-areas: 
    'header header'
    'image description';
`;

//заголовок с карточками
export const Header = styled.div`
    opacity: 0;
    grid-area: header;
`;

//карточка заголовка
export const HeaderCard = styled.div`
    position: absolute;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-area: header;
    background-color: #568DF8;
    width: 4vh;
    height: 5vh;
    border: 1.5px solid #000000;
    box-shadow: inset 0px 0px 0px 3px rgba(255, 255, 255, 0.24);
    border-radius: 8px;
    transform-origin: right bottom;
    transform: rotate(${(props: { rotation: number }) => props.rotation}deg);
`;

//картинка осколка
export const Image = styled.img`
    opacity: 0;
    grid-area: image;
    height: 20vh;
    position: relative;
`;

//информация о призе
export const Content = styled.div`
    opacity: 0;
    display: grid;
    align-content: center;
    justify-content: center;
    grid-area: description;
    position: relative;
`;
