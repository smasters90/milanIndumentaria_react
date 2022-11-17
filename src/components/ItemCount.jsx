import React from 'react'
import {useState} from 'react'

function ItemCount(props) {

    return (
    <div className='col-12 d-flex flex-wrap justify-content-center justify-content-xl-end'>
        <div className="divItemCount">
            <button onClick = {props.clickMenos}>-</button>
            <span>{props.cant}</span>
            <button onClick = {props.clickMas}>+</button>
        </div>
        <div className='col-12'>
            <button onClick={props.onAdd}  className="btn_añadirCarrito">Agregar al Carrito</button>
        </div>
        
    </div> 
  )
}

export default ItemCount