/*Mediante interfaces*/
interface ButtonProps{
    /*Attributos que los componentes pueden cambiar*/
    description:string,
    disabled:boolean,
    style:string,

}
const ButtonProps = ({description, disabled}:ButtonProps) => {
    /*description está recibiendo los tipos de datos que está recibiendo el componente*/
    return (
        <>
        <h1>Uso de Props</h1>
        <button style={style} disabled={disabled}>{description}</button>
        </>

    )
}

export default ButtonProps