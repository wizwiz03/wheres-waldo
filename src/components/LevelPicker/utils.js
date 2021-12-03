import { storage, db } from '../../firebase.config';
import { getDownloadURL, ref } from 'firebase/storage';
import { doc, getDoc } from 'firebase/firestore';


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

async function createAllLevels() {
    const imagesURL = await Promise.all(['01', '02'].map(lv => fetchLevelImageURL(lv, 'img')));
    return imagesURL;
}


export { createAllLevels };