import React from 'react';
import ProfileCard from '../components/productos.js';
import MouseG from '../components/img/mousegamer.jpg';
import Mouse from '../components/img/mouse.jpg';
import MouseGenerico from '../components/img/mousegenerico.png';


function Mouses(){

    return(
    <div>
        <div className="flex justify-center gap-4 mt-10 ">
            <div className="flex items-center">
            <ProfileCard titulo="Mouse RGB" arroba="@Logitech" img={MouseG} />
            </div>
            <div className="flex items-center">
            <ProfileCard titulo="Mouse Gamer" arroba="@Logitech" img={Mouse}/>
            </div>
            <div className="flex items-center">
            <ProfileCard titulo="Mouse Generico" arroba="@Generico" img={MouseGenerico} />
            </div>
        </div>
    </div>
    )
}

export default Mouses;