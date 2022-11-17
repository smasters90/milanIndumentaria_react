import React from 'react'
import {useContext} from 'react'
import {cartContext} from '../context/cartContext'
import {RiDeleteBin6Fill} from 'react-icons/ri';

function CartItem() {

    const context = useContext(cartContext);
    const {cart, deletItem} = context;
    

  return (
    <div className='contenedor__carrito col-4'>
    { cart.map(item=>(
        <div className='contenedor__carritoLleno col-8'>
            <div className='contenedor__carritoLleno-imagen col-4'>
                <img className= "img-fluid " src={item.img} />    
            </div>
            <div className='contenedor__carritoLleno-descripcion  col-4'>
                <p>
                Producto:  {item.nombre}
                </p>
                <p>
                Precio: ${item.precio}
                </p>
                <p>
                Cantidad:  {item.count}
                </p>              
            </div>
            <button className='d-inline'  onClick={()=>deletItem(item.id)}> <RiDeleteBin6Fill className='iconoEliminar' /></button>
        </div>    
    ))
    }       
    </div> 
  )
  
}


export default CartItem