import React from 'react'
import ItemDetailContainer from './ItemDetailContainer'
import {Link} from "react-router-dom"

export default function Producto(props) {
  let cuota = (props.precio/6).toFixed(2)
  if(props.categoria =="novedades"){
    return(
      <>
        <div className={`${props.slide} contenedor__producto d-flex d-lg-flex flex-column col-12 mx-xl-2 m-5 align-items-center`}>
            <div className=" prod__img d-flex flex-column  p-1 align-items-center ">
                <img className= "img-fluid h-100" src={props.img} />
            </div>
            <p classNameName="contenedorImg__descripcion fw-bold">{props.nombre}</p>
            <Link to = {`/producto/${props.id}`} className="btn_verMas">
              Ver Mas
            </Link>
        </div>
      </>
    )
  }else{
    return (
      <>
        <div className= "contenedor__producto d-flex d-lg-flex flex-column col-4 col-md-6 col-xl-4 mx-xl-2 m-2 align-items-center">
            <div className=" prod__img d-flex flex-column  p-1 align-items-center ">
                <img className= "img-fluid h-100" src={props.img} />
            </div>
            <p classNameName="contenedorImg__descripcion fw-bold">{props.nombre}</p>
            <p className="contenedorImg__precio">${props.precio}</p>
            <p className="contenedorImg__cuotas"><span className="fw-bold">6</span> cuotas sin interes de <span className="fw-bold">${cuota}</span></p>
            <Link to = {`/producto/${props.id}`} className="btn_verMas">
              Ver Mas
            </Link>
        </div>
      </>
    )
  }
  
  
}
