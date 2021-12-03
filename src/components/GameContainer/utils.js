import { storage, db } from '../../firebase.config';
import { getDownloadURL, ref } from 'firebase/storage';
import { doc, getDoc } from 'firebase/firestore';


async function checkSolution(character, x, y) {
  const docRef = doc(db, 'levels', '01');
  const docSnap = await getDoc(docRef);
  const [solX, solY] = docSnap.data().solutions[character];
  return (Math.abs(solX - x) < 20 && Math.abs(solY - y) < 20) ? true : false;
}

async function getCharacters() {
  const docRef = doc(db, 'levels', '01');
  const docSnap = await getDoc(docRef);
  return Object.keys(docSnap.data().solutions);
}


async function fetchLevelImageURL(level, option) {
  const docRef = doc(db, 'levels', level);
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
  const imageURL = await fetchLevelImageURL((lv === '1') ? '01' : '02', 'img');
  return { url: imageURL, alt: 'placeholder' };
}

export { createSingleLevel, checkSolution, getCharacters };
