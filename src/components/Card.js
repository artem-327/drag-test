import { useState } from 'react';

const Card = ({onActiveCard, card, activeCard, cardStyle, onCardStyle}) => {
    var leftInit = window.innerWidth / 2 - 50
    cardStyle = cardStyle[card] ? cardStyle[card] : {
        height: 100,
        width: 100,
        backgroundColor: 'red',
        position: 'absolute',
        cursor: 'grab',
        borderRadius: 10,
        left: leftInit,
        top: 200
    };

    const [ preX, setPreX ] = useState(leftInit);
    const [ preY, setPreY ] = useState(200);
    const [ initX, setInitX ] = useState(leftInit);
    const [ initY, setInitY ] = useState(200);
    
    const cardDragEnd = (event) => {
        const { screenX, screenY } = event;
        const X = screenX - initX + preX;
        const Y = screenY - initY + preY;
        setPreX(X);
        setPreY(Y);
        onCardStyle(card, {
            height: 100,
            width: 100,
            backgroundColor: 'red',
            position: 'absolute',
            borderRadius: 10,
            cursor: 'grab',
            top: Y,
            left: X,
        });
    }

    const cardDragStart = (event) => {
        onActiveCard(card);
        const { screenX, screenY } = event;
        setInitX(screenX);
        setInitY(screenY);
        if(cardStyle?.left) setPreX(cardStyle.left)
        if(cardStyle?.top) setPreY(cardStyle.top)
    }
    
    return (
        <div
            draggable={true}
            onDragStart={cardDragStart}
            onDragEnd={cardDragEnd}
            onDrag={() => onCardStyle(card, {...cardStyle, display: 'none'})}
            style={(activeCard===card) ? {...cardStyle, border: '3px solid blue', borderRadius: 10} : cardStyle}
            onClick={(e)=>{
                e.stopPropagation();
                onActiveCard(card);
            }}
            index={card}
        />
    );
}

export default Card;
