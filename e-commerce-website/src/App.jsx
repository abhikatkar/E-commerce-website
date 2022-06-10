import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { Detail } from './Components/Detail/Detail';
import { Bag } from './Components/Bag/Bag';
import { Payment } from './Components/Payment/Payment';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail' element={<Detail/>}/>
        <Route path='/bag' element={<Bag/>}/>
        <Route path='/payment/:cost' element={<Payment/>}/>
      </Routes>
    </div>
  );
}

export default App;
