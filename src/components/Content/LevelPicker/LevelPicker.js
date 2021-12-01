import { LevelPickerContainer, LevelCard } from './styles';
import { createLevelImages } from '../utils';
import { useState, useEffect } from 'react';

const LevelPicker = () => {
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    createLevelImages().then(images => setImgs(images));
  }, []);


  return (
    <LevelPickerContainer>
      {imgs.map((img, i) => <LevelCard key={i}>{img}</LevelCard>)}
    </LevelPickerContainer>
  );
};

export default LevelPicker;