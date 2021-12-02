import { LevelPickerContainer, LevelCard } from './styles';
import { createAllLevels } from '../utils';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LevelPicker = () => {
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    createAllLevels().then(images => setImgs(images));
  }, []);


  return (
    <LevelPickerContainer>
      {imgs.map((img, i) => (
        <Link to={`/level/${i+1}`} key={i}>
          <LevelCard>{img}</LevelCard>
        </Link>
      ))}
    </LevelPickerContainer>
  );
};

export default LevelPicker;