import React from 'react';
import '../Items/item.css'


const ItemDetail = ({datos}) => {
    return (
        <>
        <div key={datos.id} className="container py-md-5">
            <div className="left-ads-display">
                <div className="row">
                    <div className="desc1-izq col-md-6">
                        <img src={datos.imagen} className="img-fluid" />
                    </div>
                    <div className="desc1-derch col-md-6 pl-lg-3">
                        <h2 className="titulos-productos2">{datos.title}</h2>
                          <p className="descripcion" style={{marginTop:"1em"}}>{datos.description}</p>
                          <div style={{marginTop:"1em"}}>
                          <h3 className="precioPlanta">Precio: ${datos.precio}</h3>
                          </div>
                          <h2 className="consejos">Consejos</h2>
                          <p className="consejosTexto" style={{marginTop:"0.5em"}}>{datos.consejos}</p>
                          <br/>
                          <div className="buscar-desc mt-5">
                            <div className="buscar text-left">
                                <div className="social-icons mt-4">
                                  <h4 className="compartir">Compartir</h4>
                                    <ul>
                                        <li><a href="#" className="social-icons">Facebook</a></li>
                                        <li><a href="#" className="social-icons">Instagram</a></li>
                                        <li><a href="#" className="social-icons">Twitter</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</div>
        </>
    )}

export default ItemDetail