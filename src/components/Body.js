import Card from "./Card";

const Body = ({cards, onActiveCard, activeCard, onCardStyle, cardStyle}) => {
  const bodyStyle = {
    textAlign: 'center',
    width: '100%',
    height: '80%',
    position: 'relative',
  }
  
  return (
    <div
      style={bodyStyle}
    >
      {cards.map((card, key) => (
        <Card onCardStyle={onCardStyle} cardStyle={cardStyle} activeCard={activeCard} key={key} card={card} onActiveCard={onActiveCard} />
      ))}
    </div>
  );
}

export default Body;
