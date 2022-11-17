import React, {useState, useEffect} from 'react'
import {getItemUnico} from '../Service/firestore'
import ItemDetail from './ItemDetail'
import {useParams} from "react-router-dom"
import { Space, Spin } from 'antd';

function ItemDetailContainer() {
    let [product, setProduct] = useState({})
    const {id} = useParams();

    useEffect(()=>{
      getItemUnico(id).then((respuestaDatos)=>{
          setProduct(respuestaDatos)
      })
    },[])
  
  if (!product.id){
    return(
      <div className='spinner'>
          <Space size="middle">
            <Spin size="large" />
            <Spin size="large" />
            <Spin size="large" />
        </Space>
      </div>
      
      );

  }else {
    return (
      <div className = "d-flex flex-wrap justify-content-evenly">
        <ItemDetail
        id = {product.id}
        nombre = {product.nombre}
        precio = {product.precio}
        color = {product.color}
        talle = {product.talle}
        img = {product.img}
        categoria = {product.categoria}
        stock = {product.stock}
        />
      </div>
    )
  }
  
}


export default ItemDetailContainer