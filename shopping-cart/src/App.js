import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Cart from './pages/cart';
function App() {
  return (
    <div>
      <h1>NAVBAR</h1>  
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
      </Routes>   
    </div>
  );
}

export default App;
