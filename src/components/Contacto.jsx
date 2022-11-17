import React, {useState} from 'react'
import {createSolicitudContacto} from '../Service/firestore'
import Swal from 'sweetalert2'

function Contacto() {
    const [datosForm, setDatosForm] = useState({
        name: "",
        tel: "",
        correo: "",
        comentario:""
    });

    function inputChangeHandler(evento){
        let inputNombre = evento.target.name 
        let inputValor = evento.target.value 
    
        const newDatosForm = {...datosForm}; 
        newDatosForm[inputNombre] = inputValor;

        setDatosForm(newDatosForm);
    }
    
    function handleEnviar(evento){
        evento.preventDefault();

        createSolicitudContacto(datosForm).then(respuesta =>{
            if(datosForm.name=="" || datosForm.tel=="" || datosForm.correo=="" || datosForm.comentario=="" ){

            }else{
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: `Tu solicitud ${respuesta} fue enviada con Exito!`,
                text: 'Te contactaremos a la brevedad',
                showConfirmButton: false,
                timer: 2500
              })
            }
        })

    }
    
    

  return (
    <div className='bodyContacto'>
        <form onSubmit={handleEnviar}  className='formContacto'>
                <div className='cont__formContacto'>
                    <h2>CONTACTENOS</h2>
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
                    <textarea
                        value={datosForm.comentario}
                        onChange={inputChangeHandler}
                        name="comentario"
                        type="text"
                        placeholder='Comentarios'
                        required
                    />
                </div>
                    
                <div>
                    <button type="submit" className='btn__Enviar'> ENVIAR </button>
                </div>
            </form>
    </div>
  )
}

export default Contacto