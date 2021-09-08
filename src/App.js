import { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import './App.css';

const App = () => {
  const mainStyle = {
    width: '100%',
    height: window.innerHeight,
  }
  
  const [ cards, setCards ] = useState([]);
  const [ cardStyle, setCardStyle ] = useState({});
  const [ activeCard, setActiveCard ] = useState(0);

  const cardPlus = () => {
    setCards([...cards, new Date().getTime()]);
  }
  
  const onCardStyle = (cardId, style) => {
    let cardISyle = {};
    cardISyle[cardId] = style;
    setCardStyle({...cardStyle, ...cardISyle});
  }

  const cardRemove = (key) => {
    setCards(cards.filter((card) => (card!==key)));
  }

  const onActiveCard = (card) => setActiveCard(card);

  return (
    <div style={mainStyle} onClick={()=>onActiveCard("")}>
      <Header cardRemove={cardRemove} activeCard={activeCard} cardPlus={cardPlus} />
      <Body onCardStyle={onCardStyle} cardStyle={cardStyle} cards={cards} activeCard={activeCard} onActiveCard={onActiveCard} />
    </div>
  );
}

export default App;
