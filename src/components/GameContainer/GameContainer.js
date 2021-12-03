import { FlexContainer, GameImage, Lens, LensDD, DDItem, Marker } from './styles';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createSingleLevel, checkSolution, getCharacters } from './utils';
import { msToHMS } from '../utils';
import GameoverModal from './GameoverModal';


const GameContainer = () => {
  const { levelNum } = useParams();

  const [img, setImg] = useState();
  const [characters, setCharacters] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const [lensPos, setLensPos] = useState({ x: null, y: null });
  const [offset, setOffset] = useState({ x: null, y: null });
  const [markers, setMarker] = useState([]);
  const [foundSols, setFoundSols] = useState([]);

  const [start, setStart] = useState(Date.now());
  const [curr, setCurr] = useState(0);
  const [resTime, setResTime] = useState(null);

  const handleDDItem = async (e) => {
    const foundChar = await checkSolution(e.target.textContent, offset.x, offset.y);
    if (foundChar) {
      if (!foundSols.includes(e.target.textContent)) {
        if (foundSols.length === 3) {
          setResTime(curr);
        }
        setMarker([
          ...markers,
          { x: e.pageX, y: e.pageY }
        ]);
        setFoundSols([...foundSols, e.target.textContent]);
      }
    }
    else {
      console.log('TRY AGAIN');
    }
  };

  const handleClick = (e) => {
    if (!isClicked) {
      setLensPos({
        x: e.pageX,
        y: e.pageY,
      });
      setOffset({
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY,
      });
    } 
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    createSingleLevel(levelNum)
      .then(image => setImg(<img src={image.url} alt={image.alt} />));
    getCharacters().then(names => setCharacters(names));
    const timerID = setInterval(() => setCurr(Date.now() - start), 1000);

    return () => clearInterval(timerID);
  }, []);

  return (
    <FlexContainer>
      <button>click</button>
      <div>{resTime ? msToHMS(resTime) : msToHMS(curr)}</div>
      <GameImage onClick={handleClick} >
        {img}
        {
          isClicked && [
            <Lens key='0' left={lensPos.x - 20} top={lensPos.y - 20} />,
            <LensDD key='1' left={lensPos.x + 30} top={lensPos.y - 15}>
              {characters.map(name => <DDItem onClick={handleDDItem} key={name}>{name}</DDItem>)}
            </LensDD>
          ]
        }
        {markers.map((marker, i) => <Marker left={marker.x - 20} top={marker.y - 20} key={i} />)}
      </GameImage>
      { !!resTime && <GameoverModal time={resTime} />}
    </FlexContainer>
  );
};

export default GameContainer;