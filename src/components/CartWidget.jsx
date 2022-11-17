import React, {useContext, useState} from 'react';
import { useEffect } from 'react';
import { RiShoppingCart2Line } from "react-icons/ri";
import {Link} from "react-router-dom";
import {cartContext} from '../context/cartContext'

function CartWidget() {
  const [cantCount, setCantCount] = useState(0);
  const {getTotalItems} = useContext(cartContext);

  useEffect(()=>{
    setCantCount(getTotalItems())
  }, [getTotalItems])

  return (
    <Link to={'/carrito'}>
      <button type="button" className="btn__carrito"> < RiShoppingCart2Line /> <span className="btn__carrito-cantidad">{cantCount}</span></button> 
    </Link>
    
  )
}

export default CartWidget