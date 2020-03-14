import React from 'react';
import logo from './logo_avianca_rojo.png';
import imagen1 from './img/cards-app-av.jpg';
import facebook from './img/icon_footer_facebook.svg';
import instagram from './img/icon_footer_instagram.svg';
import twitter from './img/icon_footer_twitter.svg';
import youtube from './img/ic-youtube.svg';

import './App.css';

function App() {
  return (
    <div className="contenedor">
           

        <div className="encabezado">
            <header>
                <div id="logo" >
                    <img src={logo} alt="logo de avianca" ></img>
                </div>
            </header>
        </div>
        
        <div className="linea-borde">
            <article>
                <div className="titulo">
                    <h1>¡Prepárate! Nuevo beneficio para nuestros socios</h1>
                </div>
                <section className="texto">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.</p>

                </section>
            </article>
        </div>
        <div className="raya"></div>
        <div className="contenedor-tarjetas">
            <div className="tarjeta">
                <div className="imagen-tarjeta">
                    <img src={imagen1} alt="promoción"></img>
                </div>
                <div className="descripcion">
                    <h3>
                            Buenos precios sin cargos extras
                    </h3>
                    <p>

                    </p>


                </div>


            </div>
            <div className="tarjeta">
                <div className="imagen-tarjeta">
                   <img src={imagen1} alt="promoción"></img>
                </div>
                <div className="descripcion">
            
                    <h3>
                            Buenos precios sin cargos extras
                    </h3>
            
                    <p>

                    </p>


                </div>


            </div>

            <div className="vermas"> 
                <a href="#" role="button" target="_self">
                    Ver más 
                </a>
            </div>
        

        </div>
        <footer>
            <div className="texto-contactanos">
                    <p>Contáctanos: </p>
            </div>
            <div className="redes-sociales">
                    <a href="https://es-la.facebook.com/AviancaGlobal/" rel="noopener noreferrer" target="_blank">
                       <img className="icono" src={facebook} alt="facebook" ></img>
                    </a>
                    <a href="https://twitter.com/avianca" rel="noopener noreferrer" target="_blank">
                    <img className="icono" src={twitter} alt="twitter" ></img>
                    </a>
                    <a href="https://www.instagram.com/avianca/?hl=es-la"  rel="noopener noreferrer" target="_blank">
                    <img className="icono" src={instagram} alt="instagram" ></img>
                    </a>
                    <a href="https://www.youtube.com/user/aviancachannel" rel="noopener noreferrer"   target="_blank">
                    <img className="icono" src={youtube} alt="youtube" ></img>   
                    </a>
            </div>

        </footer>

    </div>
  );
}

export default App;
