
//Importar los estilos de bootstrap
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import Button from './components/Button'
import ButtonProps from './components/ButtonProps'

function App() {


  return (
    <>

    <Button/>
    <ButtonProps description='Editar' disabled={false} style="btn btn-primary'/>
    <ButtonProps description='Editar' disabled={false} style='btn btn-secondary'/>
    <ButtonProps description='Eliminar' disabled={false} style='btn btn-danger'/>
    </>
  )
}

export default App
