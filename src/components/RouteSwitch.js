import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import LevelPicker from './LevelPicker/LevelPicker';
import GameContainer from './GameContainer/GameContainer';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<LevelPicker />} />
          <Route path='level/:levelNum' element={<GameContainer />} />
          <Route path="*" element={<main><p>There's nothing here!</p></main>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default RouteSwitch;