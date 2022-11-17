import React, {useState, createContext} from 'react';

const cartContext = createContext();

export default function CartContextProvier(props){
    const [cart, setCart] = useState([])

    function addItem(item,count){
        if(isInCart(item.id)){
            let newCart = cart.map(itemMapeo=>{
                if(itemMapeo.id === item.id){
                    itemMapeo.count += count
                    return itemMapeo
                } else{
                    return itemMapeo
                }
            });
           setCart(newCart);
           
        }else{
            let newCart = cart.map(item=>item);
            newCart.push({...item, count: count});
            setCart(newCart);
        }  
    }

    function getTotalItems(){
        let total = 0;
        cart.forEach(item => total+=item.count)
        return total
    }

    function isInCart(id){
        let found = cart.some(item => item.id === id)
        return (found); 
    }

    function deletItem(id) {
        return setCart(cart.filter(item => item.id !== id))
    }

    function limpiarCart(){
        return setCart([])
    }

    function sumaTotal(){
        let total=0;

        cart.forEach(item=> total+= (item.precio * item.count))
        return total
    }
    

    return(
    <cartContext.Provider value={{cart, addItem, getTotalItems, isInCart, deletItem, sumaTotal,limpiarCart}}>
        {props.children}
    </cartContext.Provider>
    )
}

export {cartContext}