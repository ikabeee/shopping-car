
//Importar los estilos de bootstrap
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import Button from './components/Button'
import ButtonProps from './components/ButtonProps'

function App() {


  return (
    <>

    <Button/>
    <ButtonProps description='Editar' disabled={false} style='ntn btn-primary'/>
    <ButtonProps description='Editar' disabled={false} style='ntn btn-secondary'/>
    <ButtonProps description='Editar' disabled={false} style='ntn btn-primary'/>
    </>
  )
}

export default App
