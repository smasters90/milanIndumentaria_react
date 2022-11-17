import React from 'react'
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import {useContext} from 'react'
import {cartContext} from '../context/cartContext'


function CartView(){
    const context = useContext(cartContext);
    const {cart, sumaTotal, limpiarCart } = context;
    let totalCompra=0;
    totalCompra += sumaTotal();
    
    if(cart.length==0 || cart.length==undefined){
        return(
            <>
                <div className="contenedor__carritoVacio">
                    <h2 className="carritoVacio">Tu carrito esta vacio...</h2>
                    <Link to={'/'}><button className="btn_añadirCarrito"> Seguir Comprando </button></Link>
                </div>         
            </>      
        )
    }else{       
        return(
            <div className="contenedor__Cart d-flex">
                <div className="contenedor__cartItem d-flex">
                    <CartItem />
                </div>
                <div className="contenedor__resumen d-flex">
                    <h2> RESUMEN DE TU COMPRA </h2>
                    {(totalCompra)>10000 ?
                    <>
                        <p className='envioGratis'> Envio Gratis</p>
                        <p className='total'>TOTAL DE LA COMPRA $ {totalCompra}</p>
                        </>
                    : 
                    <>
                        <p className='envioPago'> Costo de envio $ {totalCompra * 0.2} </p>
                        <p className='total'>TOTAL DE LA COMPRA $ {totalCompra + (totalCompra * 0.2)}</p>
                    </>
                    }
                    
                   <Link className='btn__finCompra' to={'/carrito/checkout'}>CONTINUAR</Link>
                </div>
            </div>

        )
    } 
}

export default CartView;