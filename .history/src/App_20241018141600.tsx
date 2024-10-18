
//Importar los estilos de bootstrap7

import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header'
import Home from './pages/Home';




function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/Cart' element={<Cart />}
      </Routes>
   
    </>
  )
}

export default App
