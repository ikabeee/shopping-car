/*Mediante interfaces podrás asignar caracteristicas dinamicas en el componente*/
interface ButtonProps{
    /*Attributos que los componentes pueden cambiar*/
    description:string,
    disabled:boolean,
    style:string,

}
const ButtonProps = ({description, disabled, style}:ButtonProps) => {
    /*description está recibiendo los tipos de datos que está recibiendo el componente*/
    return (
        <>
        <button className={style} disabled={disabled}>{description}</button>
        </>

    )
}

export default ButtonProps