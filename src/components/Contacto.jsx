import './contacto.css'
import React, {Fragment, useState} from 'react';

const Contacto = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)
    }

    return (
        <Fragment>
            <div className="container">
            <h3 className="formTitle">Formulario</h3>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Apellido" className="form-control" onChange={handleInputChange} name="apellido"></input>
                </div>
                <div className="form-group">
                    <input type="email" name="email" className="form-control"  onChange={handleInputChange} placeholder="email" required/>
                </div>
                <div className="form-group">
                    <textarea name="mensaje" className="form-control" onChange={handleInputChange} placeholder="Ingresá tu mensaje"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
            <ul>
                <li>{datos.nombre}</li>
                <li>{datos.apellido}</li>
            </ul>
            </div>
        </Fragment>
    );
}
 
export default Contacto;