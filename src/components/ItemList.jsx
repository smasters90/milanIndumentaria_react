import Producto from './Producto'
import React, {useState, useEffect, useRef} from 'react'
import {useParams} from "react-router-dom"
import {getItemCategory} from '../Service/firestore'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { Space, Spin } from 'antd';
import 'antd/dist/antd.css';

function ItemList() {
    let [product, setProduct] = useState([])
    let [isLoading, setIsLoading] = useState(true)
    const {cat} = useParams();

    useEffect(()=>{
      if(cat == undefined){
        getItemCategory('novedades').then((respuestaDatos)=>{
        setProduct(respuestaDatos)
        })
        .finally( ()=> setIsLoading(false))

      } else{
        getItemCategory(cat).then((respuestaDatos)=>{
        setProduct(respuestaDatos)
          })
        .finally( ()=> setIsLoading(false))  
      }
    
    },[cat])

    return(
      <>
        {isLoading?
          <div className='spinner'>
            <Space size="large">
              <Spin size="large" />
              <Spin size="large"/>
              <Spin size="large" />
            </Space>
          </div>
        :
          <div className = "d-flex flex-wrap justify-content-evenly">
            {(cat == undefined) ?
              <Swiper
                className='carrusel'
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                breakpoints={{
                  768: {
                    width: 768,
                    slidesPerView:3
                  },
                  1024: {
                    width: 1024,
                    slidesPerView:3,
                    spaceBetween:30
                  }
                }}
                >
                {product.map((item)=>{
                  return(
                    <SwiperSlide className='item-carrusel col-12'>
                      <Producto
                        key = {item.id}
                        id = {item.id}
                        nombre = {item.nombre}
                        precio = {item.precio}
                        img = {item.img}
                        stock = {item.stock}
                        categoria = {item.categoria}
                        slide={'contenedor__producto--carrusel'}
                      />
                    </SwiperSlide> 
                  )
                  })
                }
              </Swiper>

            :
              product.map((item)=>{
                return(
                    <Producto
                        key = {item.id}
                        id = {item.id}
                        nombre = {item.nombre}
                        precio = {item.precio}
                        img = {item.img}
                        stock = {item.stock}
                        categoria = {item.categoria}
                    />
                  )
                })
            }
          </div>
        }
      </>
    )
}

export default ItemList