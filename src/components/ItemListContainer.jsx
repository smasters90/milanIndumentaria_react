import React from 'react'
import ItemList from './ItemList'
import {useParams} from "react-router-dom"


export default function ItemListContainer() {

  let {cat} = useParams();
  
  if(cat == undefined){
    cat = 'NOVEDADES'
  }
 
    return (
      <>
        <div className="cont__titulo w-100 text-center ">
          <h2 className="d-block"> {cat}</h2>
        </div>
        <div>
          <ItemList />
        </div>
      </>
      
    )  
}
