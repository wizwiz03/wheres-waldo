import { OuterContent } from './styles';
import GameContainer from './GameContainer/GameContainer';
import LevelPicker from './LevelPicker/LevelPicker';

const Content = () => {
  return (
    <OuterContent>
      <h1>Where's Waldo Placeholder</h1>
      <LevelPicker />
    </OuterContent>
  );
}

export default Content;