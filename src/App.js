import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { NavigationBar } from './components/NavigationBar';
import { HomePage } from './pages/HomePage';
import { RegularPage } from './pages/RegularPage';
import { HotPage } from './pages/HotPage';
import { ErrorPage } from './pages/ErrorPage';
import { useState } from 'react';
import { memesDatabase } from './components/memesDatabase';
import { FavouritePage } from './pages/FavouritesPage';


function App() {

    const [memesList, setMemesList] = useState(memesDatabase);

  return (
    <div className="App">
    <BrowserRouter>
      <NavigationBar />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='regular' element={<RegularPage memesList={memesList} setMemesList={setMemesList} />} />
          <Route path='/hot' element={<HotPage memesList={memesList} setMemesList={setMemesList} />} />
          <Route path='/favourites' element={<FavouritePage memesList={memesList} setMemesList={setMemesList}/>} />
          <Route path='*' element={<ErrorPage />} />   
        </Routes>
      </main> 
    </BrowserRouter>
    </div>
  );
}

export default App;
