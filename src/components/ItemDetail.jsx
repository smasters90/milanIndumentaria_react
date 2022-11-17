import React from 'react'
import ItemCount from './ItemCount'
import {useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import {cartContext} from '../context/cartContext'

function ItemDetail(props) {
  let [estado, setEstado] = useState(false);
  let [cantidad, setCantidad] = useState(1);
  let total = (props.precio*cantidad);

  const {addItem} = useContext(cartContext);

  function onAddProduct(){
    addItem(props,cantidad);
    setEstado(true);
    
  }

  function handleCLickMas(){

      if(cantidad == props.stock){
          alert("llego al maximo stock")
      } else{
          setCantidad(cantidad + 1)
      }
      
  }

  function handleCLickMenos(){
      if(cantidad == 1){
          alert("No puede tener menos de 1 producto")
      }else {
          setCantidad(cantidad - 1)
      } 
  }
  return (
    <div className="contenedor__detail d-flex d-lg-flex flex-row col-12  m-2 align-items-center justify-content-evenly">
          <div className= "detail__img d-inline col-5 p-1 align-items-center ">
              <img className= "img-fluid h-100" src={props.img} />
          </div>
          <div className="contenedor__datos d-inline col-5 ">
            <p className="contenedorDatos__descripcion">{props.nombre}</p>
            <p className="contenedorImg__color">Color: {props.color}</p>
            <p className="contenedorImg__talle">Talle: {props.talle}</p>
            <p className="contenedorImg__categoria">Categoria: {props.categoria}</p>
            <p className="contenedorImg__precio">${props.precio}</p>
            <p className="opcional">6 Cuotas sin interes con todos los medios de pago</p>
            <p className="opcional"> Envio gratis a todo el pais</p>
            {estado == false ? <ItemCount clickMas={handleCLickMas} clickMenos={handleCLickMenos} cant={cantidad}  onAdd={onAddProduct} /> 
              : 
                <>
                  <p className="opcionalCompra"> {props.nombre} x {cantidad} unidades</p>
                  <p className="opcionalCompra">Total: ${total}</p>
                  <Link className="btn_añadirCarrito" to={`/categoria/${props.categoria}`}> Seguir Comprando</Link>
                  <Link className="btn_añadirCarrito" to={`/carrito`}> Ver Carrito </Link>
                </>
            }
                
          </div>
      </div>
  )
 
}

export default ItemDetail