import '../styles/GameImage.css';
import { useState } from 'react';

const GameImage = () => {
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
    <div className='game-image' onClick={handleClick}>
      test
      {
        isClicked && [
          <div key='0' className='lens' style={{ left: pos.x - 15, top: pos.y - 15 }} />,
          <div key='1' className='lens-dd' style={{ left: pos.x + 25, top: pos.y - 15 }}>
            {options.map(name => <div key={name} className='dd-item'>{name}</div>)}
          </div>
        ]
      }
    </div>
  );
};

export default GameImage;