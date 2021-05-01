import React from 'react';

const ItemDetail = ({datos}) => {
    return (
        <>
        <div key={datos.id} className="container py-md-5">
            <div className="left-ads-display">
                <div className="row">
                    <div className="desc1-izq col-md-6">
                        <img src={datos.img} className="img-fluid" />
                    </div>
                    <div className="desc1-derch col-md-6 pl-lg-3">
                        <h2>{datos.title}</h2>
                        <h3>Precio: {datos.precio}</h3>
                        <div className="disponible mt-3">
                        </div>
                        <div className="buscar-desc mt-5">
                            <div className="buscar text-left">
                                <h4>Buscar Producto</h4>
                                <div className="social-icons mt-4">
                                    <ul>
                                        <li><a href="#"><span className="fab fa-facebook"></span>Facebook</a></li>
                                        <li><a href="#"><span className="fab fa-instagram"></span>Instagram</a></li>
                                        <li><a href="#"><span className="fab fa-twitter"></span>Twitter</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-6">
                <h5 className="shop-detail">{datos.description}</h5>
            </div>
        </div>
        </>
    )}

export default ItemDetail