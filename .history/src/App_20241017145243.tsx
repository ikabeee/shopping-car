
//Importar los estilos de bootstrap
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import Button from './components/Button'
import ButtonProps from './components/ButtonProps'

function App() {


  return (
    <>

    <Button/>
    <ButtonProps description='Editar' disabled={false} style='ntn btn-primary'/>
    <ButtonProps description='E' disabled={false} style='ntn btn-secondary'/>
    </>
  )
}

export default App
