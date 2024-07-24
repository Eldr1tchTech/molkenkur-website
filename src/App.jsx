import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import Hochzeiten from './pages/Hochzeiten.jsx'
import Hotel from './pages/Hotel.jsx'
import Restaurant from './pages/Restaurant.jsx'
import Tagungen from './pages/Tagungen.jsx'
import Events from './pages/Events.jsx'
import Home from './pages/Home.jsx'
import Datenschutz from './pages/Datenschutz.jsx'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/hochzeiten' element={<Hochzeiten/>} />
        <Route path='/hotel' element={<Hotel/>} />
        <Route path='/restaurant' element={<Restaurant/>} />
        <Route path='/tagungen' element={<Tagungen/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/datenschutz' element={<Datenschutz/>} />
      </Routes>
    </div>
  );
}

export default App
