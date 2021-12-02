import { storage, db } from '../../firebase.config';
import { getDownloadURL, ref } from 'firebase/storage';
import { doc, getDoc } from 'firebase/firestore';


async function checkSolution(character, x, y) {
  const docRef = doc(db, 'levels', '01');
  const docSnap = await getDoc(docRef);
  const [solX, solY] = docSnap.data().solutions[character];
  return (Math.abs(solX-x) < 20 && Math.abs(solY-y) < 20) ? true : false;
}

async function getCharacters() {
  const docRef = doc(db, 'levels', '01');
  const docSnap = await getDoc(docRef);
  return Object.keys(docSnap.data().solutions);
}


async function fetchLevelImageURL(level, option) {
  const docRef = doc(db, 'levels', '01');
  const docSnap = await getDoc(docRef);
  const { num, img, characters } = docSnap.data();
  if (option === 'img') {
    return await getDownloadURL(ref(storage, `Levels/${num}/${img}`));
  }
  if (option === 'characters') {
    return await getDownloadURL(ref(storage, `Levels/${num}/${characters}`)); 
  }
}

async function createSingleLevel(lv) {
  const imageURL = await fetchLevelImageURL(lv, 'img');
  return {url: imageURL, alt: 'placeholder'};
}

 async function createAllLevels() {
  //  const imagesURL = await Promise.all(Object.keys(levels).map(lv => fetchLevelImageURL(lv, 'img')));
  //  const style = {width: '100%', height: '100%'};
  //  return imagesURL.map((url, i) => <img style={style} src={url} alt={levels[i+1].alt} />);
 }


export { createAllLevels, createSingleLevel, checkSolution, getCharacters };