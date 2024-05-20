import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { NavigationBar } from './components/NavigationBar';
import { HomePage } from './pages/HomePage';
import { RegularPage } from './pages/RegularPage';
import { HotPage } from './pages/HotPage';
import { ErrorPage } from './pages/ErrorPage';
import { useState } from 'react';
import { memesDatabase } from './components/memesDatabase';


function App() {

  // const [memesList, setMemesList] = useState({regular: memesDatabase, hot: []});
  const [memesList, setMemesList] = useState(memesDatabase);

  return (
    <div className="App">
    <BrowserRouter>

      <NavigationBar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='regular' element={<RegularPage memesList={memesList/*.regular*/} setMemesList={setMemesList} />} />
        <Route path='/hot' element={<HotPage memesList={memesList/*.hot*/} setMemesList={setMemesList} />} />   
        <Route path='*' element={<ErrorPage />} />   
      </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
