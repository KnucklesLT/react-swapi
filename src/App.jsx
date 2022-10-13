import './App.css';
import { Routes, Route } from 'react-router-dom'
import StarshipsList from './pages/StarshipsList/StarshipsList';
import Header from './components/Header';
import StarshipPage from './pages/StarshipPage/StarshipPage';

function App() {
  return (
  <>
    <Header />
    <Routes>
      <Route path='/' element={<StarshipsList />}/>
      <Route path='/starship' element={<StarshipPage />}/>
    </Routes>
  </>
  );
}

export default App;
