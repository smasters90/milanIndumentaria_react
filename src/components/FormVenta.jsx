import React, {useState, useContext} from 'react'
import { useNavigate } from "react-router-dom"
import {createOrdenCompra} from '../Service/firestore'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {cartContext} from '../context/cartContext'



function FormVenta() {

    let swalWithBootstrapButtons = withReactContent(Swal);
    const navigate = useNavigate();
    const context = useContext(cartContext);
    const {cart, sumaTotal, limpiarCart } = context;
    const [datosForm, setDatosForm] = useState({
        name: "",
        tel: "",
        correo: ""
    });

    function inputChangeHandler(evento){
        let inputNombre = evento.target.name //El evento.target nos indica q elemento del Dom descencadeno el evento (osea que input fue modificado, y guarda dicho input en una variable)
        let inputValor = evento.target.value //Es el valor que tiene el input que es el user que esta escribiendo
    
        const newDatosForm = {...datosForm}; //Copiamos el objeto 
        newDatosForm[inputNombre] = inputValor;

        setDatosForm(newDatosForm);
    }
    
    function handleTerminarCompra(evento){
        evento.preventDefault();
        const ordenCompra = {
            comprador: datosForm,
            items: cart,
            total: sumaTotal()
        }  
        
        if(datosForm.name=="" || datosForm.tel=="" || datosForm.correo=="" ){

        }else{
            swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger'
                },
                buttonsStyling: false
                })
                
                swalWithBootstrapButtons.fire({
                title: 'Confirmar Compra?',
                text: "No podra modificar los campos",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Si Comprar!',
                cancelButtonText: 'No, cancelar!',
                reverseButtons: true
                }).then((result) => {
                if (result.isConfirmed) {
                    createOrdenCompra(ordenCompra).then(respuesta=>{
                        console.log(respuesta)
                        swalWithBootstrapButtons.fire(
                            'Confirmado!!',
                            `Has realizado la compra numero: ${respuesta}`,
                            'success'
                        )
                        limpiarCart();
                        setDatosForm({
                            name: "",
                            tel: "",
                            correo: ""
                        });
                        navigate("/carrito");
                    })  
                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                    'Compra Cancelada',
                    'Puede cargar datos nuevamente'
                    )
                }
                })
        };
    
        }
        
  return (
    <div className='body'>
        <form onSubmit={handleTerminarCompra} className='formVenta'>
                <div className='cont__formVenta'>
                    <h2>TUS DATOS</h2>
                    <input
                        value={datosForm.name}
                        onChange={inputChangeHandler}
                        name="name"
                        type="text"
                        placeholder='Nombre de Usuario'
                        required    
                    />
                    <input
                        value={datosForm.tel}
                        onChange={inputChangeHandler}
                        name="tel"
                        type="number"
                        placeholder='Telefono'
                        required
                    />
                    <input
                        value={datosForm.correo}
                        onChange={inputChangeHandler}
                        name="correo"
                        type="email"
                        placeholder='Correo'
                        required
                    />
                </div>
                    
                <div>
                    <button type="submit" className='btn__finCompra'> FINALIZAR COMPRA </button>
                </div>
            </form>
    </div>
    )
}
    

export default FormVenta