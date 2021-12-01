import { GameImage, Lens, LensDD, DDItem } from './styles';
import { useState } from 'react';
import { createLevelImage } from '../utils';


const GameContainer = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [pos, setPos] = useState({ x: null, y: null });

  const [imgs, setImgs] = useState([]);

  const handleClick = (e) => {
    setIsClicked(!isClicked);
    setPos({
      x: e.pageX,
      y: e.pageY,
    });
  };

  async function test() {
    const imgElements = await createLevelImage(1);
    setImgs(imgElements);
  }

  const options = ['Hello', 'World', 'Woof'];

  return (
    <GameImage onClick={handleClick}>
      <span onClick={test}>test</span>
      {
        imgs
      }
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

export default GameContainer;