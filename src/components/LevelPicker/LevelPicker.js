import { Outer, LevelPickerContainer, LevelCard, ImgPreview } from './styles';
import { createAllLevels } from './utils';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LevelPicker = () => {
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    async function initImgs() {
      const urls = await createAllLevels();
      setImgs(urls.map(url => <ImgPreview src={url} />));
    }
    initImgs();
  }, []);


  return (
    <Outer>
      <h1>Where's Waldo Placeholder</h1>
      <LevelPickerContainer>
        {imgs.map((img, i) => (
          <Link to={`/level/${i + 1}`} key={i}>
            <LevelCard>{img}</LevelCard>
          </Link>
        ))}
      </LevelPickerContainer>
    </Outer>
  );
};

export default LevelPicker;