import './App.css';
import Apepe from './Components/Apepe';


function App() {


  return (
    <div className="App">
      <div className='Apepe'>
        <h1>Un mundo lleno de aventuras te espera</h1>
        <Apepe nombre="Horizon Forbidden West" 
               consola="Play Station 5" 
               informacion="Horizon Forbidden West es un juego de rol de acción de 2022 desarrollado por Guerrilla Games y publicado por Sony Interactive Entertainment. Una secuela de Horizon Zero Dawn de 2017, el juego se desarrolla en una versión post-apocalíptica del oeste de los Estados Unidos recuperándose de las secuelas de un evento de extinción causado por un enjambre de robots deshonestos. El jugador puede explorar el mundo abierto y completar misiones usando a distancia y cuerpo a cuerpo contra criaturas de máquinas hostiles." 
               imagen="hfw" 
               contador=""
               boton="" />
        <Apepe nombre="Forza Horizon 5" 
               consola="Xbox Series X" 
               informacion="Forza Horizon 5 es un videojuego de carreras de 2021 desarrollado por Playground Games y publicado por Xbox Game Studios. Es el quinto título de Forza Horizon y la duodécima entrega principal de la serie Forza. El juego está ambientado en una representación ficticia de México. Fue lanzado el 9 de noviembre de 2021 para Microsoft Windows, Xbox One y Xbox Series X / S." 
               imagen="fh5"
               contador=""
               boton="" />
        <Apepe nombre="Mario Odyssey" 
               consola="Nintendo Switch" 
               informacion="Super Mario Odyssey es un juego de plataformas de acción y aventura de 2017 desarrollado y publicado por Nintendo para la consola de videojuegos Nintendo Switch. Una entrada en la serie Super Mario, sigue a Mario y su nuevo aliado Cappy, un sombrero sensible que le permite a Mario controlar a otros personajes y objetos, mientras viajan a través de varios reinos para salvar a la princesa Peach de los planes de matrimonio forzado de su némesis Bowser." 
               imagen="mo"
               contador=""
               boton="" />
     </div>
    </div>
  );
}

export default App;
