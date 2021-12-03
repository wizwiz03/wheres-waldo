import { Link } from 'react-router-dom';
import { useState } from 'react';
import { msToHMS } from '../utils';
import { saveToLeaderboard } from './utils';

import { ModalContainer, ModalContent, ModalHeader, ModalBody, ModalFooter } from './styles';

const GameoverModal = ({ time }) => {
  const [name, setName] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const submitWinner = async () => {
    if (name.length < 3 || name.length > 20) {
      alert('name must be at least 3 chars and at most 20');
    }
    else {
      await saveToLeaderboard(name, time);
    }
  };

  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>
          <h3>You Won!</h3>
        </ModalHeader>
        <ModalBody>
          <div>Your time: {msToHMS(time)}</div>
          <form>
            <label htmlFor='winnerName'>Insert your Name:</label>
            <input onChange={handleNameChange} value={name} type='text' id='winnerName' />
          </form>
        </ModalBody>
        <ModalFooter>
          <Link to='/leaderboard'>
            <button onClick={submitWinner}>Add to Leaderboard</button>
          </Link>
        </ModalFooter>
      </ModalContent>
    </ModalContainer>
  );
}

export default GameoverModal;