
//Importar los estilos de bootstrap7

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header'
import { Route, Routes } from 'react-router-dom';


function App() {


  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}  />
      </Routes>
   
    </>
  )
}

export default App