import { storage } from '../../firebase.config';
import { getDownloadURL, ref } from 'firebase/storage';

const levels = {
  1: {
    num: '01',
    img: 'waldo_city.jpg',
    characters: 'waldo_city_objects.jpg',
    alt: 'Waldo City Puzzle',
  },
  2: {
    num: '02',
    img: 'hidden_houses.jpg',
    characters: null,
    alt: 'Find the hidden Sign among all Houses',
  },
};

async function fetchLevelImageURL(level, option) {
  const { num, img, characters } = levels[level];
  if (option === 'img') {
    return await getDownloadURL(ref(storage, `Levels/${num}/${img}`));
  }
  if (option === 'characters') {
    return await getDownloadURL(ref(storage, `Levels/${num}/${characters}`)); 
  }
}


async function createLevelImages() {
  const imagesURL = await Promise.all(Object.keys(levels).map(lv => fetchLevelImageURL(lv, 'img')));
  return imagesURL.map((url, i) => <img style={{'flex': '1'}} src={url} alt={levels[i+1].alt} />);
}



async function createLevelImage(level) {
  const imagesURL = await fetchLevelImageURL(Number.parseInt(level));
  return imagesURL.map(url => <img src={url} alt='puzzle game and characters' />);
}





export { createLevelImage, createLevelImages };