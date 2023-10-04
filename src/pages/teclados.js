import React from 'react';
import ProfileCard from '../components/productos.js';
import TecladoG from '../components/img/tecladogamer.jpg';
import Teclado from '../components/img/teclado.jpg';
import TecladoGenerico from '../components/img/tecladogenerico.jpg';


function Mouses(){

    return(
    <div>
        <div className="flex justify-center gap-4 mt-3">
            <div className="flex items-center">
            <ProfileCard titulo="Teclado RGB" arroba="@Logitech" img={TecladoG}/>
            </div>
            <div className="flex items-center">
            <ProfileCard titulo="Teclado Logitech" arroba="@Logitech" img={Teclado}/>
            </div>
            <div className="flex items-center">
            <ProfileCard titulo="Teclado Generico" arroba="@Generico" img={TecladoGenerico}/>
            </div>
        </div>
    </div>
    )
}

export default Mouses;