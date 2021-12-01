import { GameImage, Lens, LensDD, DDItem } from './styles';
import { useState } from 'react';

const GameCont = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [pos, setPos] = useState({ x: null, y: null });

  const handleClick = (e) => {
    setIsClicked(!isClicked);
    setPos({
      x: e.pageX,
      y: e.pageY,
    });
  };

  const options = ['Hello', 'World', 'Woof'];

  return (
    <GameImage onClick={handleClick}>
      test
      {
        isClicked && [
          <Lens key='0' left={pos.x - 15} top={pos.y - 15} />,
          <LensDD key='1' left={pos.x + 25} top={pos.y - 15}>
            {options.map(name => <DDItem key={name}>{name}</DDItem>)}
          </LensDD>
        ]
      }
    </GameImage>
  );
};

export default GameCont;