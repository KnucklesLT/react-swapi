import './App.css';
import { Routes, Route } from 'react-router-dom'
import StarshipsList from './pages/StarshipsList/StarshipsList';

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<StarshipsList />}/>
    </Routes>
  </>
  );
}

export default App;
