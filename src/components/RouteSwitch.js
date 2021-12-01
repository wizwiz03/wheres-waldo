import { BrowserRouter, Routes, Route} from 'react-router-dom';

import App from './App';
import Content from './Content/Content';
import GameContainer from './Content/GameContainer/GameContainer';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Content />} />
          <Route path='level/:levelNum' element={<GameContainer />} />
          <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default RouteSwitch;