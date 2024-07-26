import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hochzeiten from './pages/Hochzeiten.jsx';
import Hotel from './pages/Hotel.jsx';
import Restaurant from './pages/Restaurant.jsx';
import Tagungen from './pages/Tagungen.jsx';
import Events from './pages/Events.jsx';
import Home from './pages/Home.jsx';
import Datenschutz from './pages/Datenschutz.jsx';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/molkenkur-website/' element={<Home />} />
          <Route path='/molkenkur-website/hochzeiten' element={<Hochzeiten />} />
          <Route path='/molkenkur-website/hotel' element={<Hotel />} />
          <Route path='/molkenkur-website/restaurant' element={<Restaurant />} />
          <Route path='/molkenkur-website/tagungen' element={<Tagungen />} />
          <Route path='/molkenkur-website/events' element={<Events />} />
          <Route path='/molkenkur-website/datenschutz' element={<Datenschutz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
