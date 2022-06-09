import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { Detail } from './Components/Detail/Detail';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail' element={<Detail/>}/>


      </Routes>
    </div>
  );
}

export default App;
