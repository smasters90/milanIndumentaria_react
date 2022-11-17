import  React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import CartWidget from './CartWidget';
import logo from '../img/logo.png'
import {Link} from "react-router-dom"

function NavBar(){
    const [open, setOpen] = useState(false);
    return(
        <>
            <header className="header d-flex flex-column align-items-center flex-xl-row" >
                <div className="header__logo d-flex flex-column align-items-left">
                    <img src={logo} className="col-4 mx-auto pb-2 align-items-center col-md-4" />
                    <h2 className="logo__titulo text-center px-4"> MILAN INDUMENTARIA</h2>
                </div>
                <nav className="nav navbar-dark bg-dark mx-auto mb-2">
                    <div className="container-fluid d-xl-none">
                        <button onClick={() => setOpen(!open)} className="navbar-toggler" type="button"  data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
                <Collapse in={open}>
                    <div className=" w-100 " id="navbarToggleExternalContent">
                        <div className="cont__nav list-group align-items-center p-4 flex-md-row justify-content-md-evenly">
                            <Link to="/" className="enlace fw-bold"> HOME </Link>
                            <Link to="/categoria/MUJERES" className="enlace fw-bold" > MUJER</Link>
                            <Link to="/categoria/NIÑAS" className="enlace fw-bold" > NIÑAS </Link>
                            <Link to="/contacto" className="enlace fw-bold" > CONTACTO </Link>
                            <CartWidget />
                        </div>
                    </div>
                </Collapse>   
            </header>
        </>
    )
}

export default NavBar