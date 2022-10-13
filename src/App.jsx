import './App.css';
import { Routes, Route } from 'react-router-dom'
import StarshipsList from './pages/StarshipsList/StarshipsList';
import Header from './components/Header';

function App() {
  return (
  <>
    <Header />
    <Routes>
      <Route path='/' element={<StarshipsList />}/>
    </Routes>
  </>
  );
}

export default App;
