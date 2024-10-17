
//Importar los estilos de bootstrap
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import Button from './components/Button'
import ButtonProps from './components/ButtonProps'

function App() {


  return (
    <>

    <Button/>
    <ButtonProps description='Guardar' disabled={true} className='/>
    </>
  )
}

export default App
