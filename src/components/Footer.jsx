import React from 'react';
import './footer.css'

export const Footer = () => {

    return (    
    <>
  <footer>
    <hr></hr>
  <section class="ft-main">
    <div class="ft-main-item">
      <h2 class="ft-title">Sobre Nosotros</h2>
      <ul>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Twitter</a></li>
      </ul>
    </div>
    <div class="ft-main-item">
      <h2 class="ft-title">Contacto</h2>
      <ul>
        <li><a href="#">Avenida Libertador 2390</a></li>
        <li><a href="#">(L-V de 10-14h y 16-18h.)</a></li>
        <li><a href="#">Tel 4747-6783</a></li>
        <li><a href="#">atencionalcliente@plantasia.com.ar</a></li>
      </ul>
    </div>
    <div class="ft-main-item">
      <h2 class="ft-title">Newsletter</h2>
      <p class="suscribite">¡Subscrite al newsletter y recibí todas las novedades!</p>
      <form>
        <input type="email" name="email" placeholder="Email"/>
        <input type="submit" value="Suscribirse"/>
      </form>
    </div>
  </section>
  <section class="ft-legal">
  <div className="container" style={{margin:"auto"}}>
    <ul class="ft-legal-list">
      <li><a class="ft" href="#">Terminos &amp; Condiciones</a></li>
      <li><a class="ft" href="#">Política de privacidad</a></li>
      <li>&copy; 2021 Copyright Plantasia Inc.</li>
    </ul>
    </div>
  </section>
</footer>
    </>
)  
}

export default Footer
