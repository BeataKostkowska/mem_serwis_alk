import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { NavigationBar } from './components/NavigationBar';
import { HomePage } from './pages/HomePage';
import { RegularPage } from './pages/RegularPage';
import { HotPage } from './pages/HotPage';
import { ErrorPage } from './pages/ErrorPage';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
          
      <NavigationBar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='regular' element={<RegularPage />} />
        <Route path='/hot' element={<HotPage />} />   
        <Route path='*' element={<ErrorPage />} />   
      </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
