
//Importar los estilos de bootstrap7

import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home';
import Cart from './pages/Cart';
import About from './pages/About';




function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/about-us' element={<About/>} />
      </Routes>
   
    </>
  )
}

export default App
