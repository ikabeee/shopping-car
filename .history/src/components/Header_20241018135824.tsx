

const Header = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"> Market Foro </a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#"> Inicio </a>
                            </li> <li className="nav-item">
                                <a className="nav-link" href="#"> Carrito </a>
                            </li> </ul> <div className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" > Buscar </button> 
                            </div>
                             </div>
                              </div>
                               </nav>
        </>
    )
}

export default Header