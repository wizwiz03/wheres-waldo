import { db } from '../../firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { FlexContainer } from './styles';
import { msToHMS } from '../utils';


const Leaderboard = () => {
  const [ranking, setRanking] = useState([]);

  function sortDesc(rankings) {
    return Object.entries(rankings).sort(([, a], [, b]) => a - b);
  }

  async function getRankings() {
    const docRef = doc(db, 'leaderboard', 'rankings');
    const docSnap = await getDoc(docRef);
    setRanking(sortDesc(docSnap.data()));
  }

  useEffect(() => {
    getRankings();
  }, []);


  return (
    <FlexContainer>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {
            ranking.map((el, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{el[0]}</td>
                <td>{msToHMS(el[1])}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </FlexContainer>
  );
}

export default Leaderboard;