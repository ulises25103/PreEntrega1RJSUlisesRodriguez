import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Productos from "../data";

function ProfileCard (){
    
    const [count , setCount] = useState(0)

    useEffect(() => {
        console.log(`El valor de count ha cambiado a: ${count}`);
    }, [count]); 
    

    function handleClick(){
        setCount(count + 1)
    }

    function handleResta(){
        if (count > 0){
            setCount(count - 1)
        }
    }


    
    return(
        <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5 '>
            {Productos.map((producto)=>{
                return( 
                <div key={producto.id} className="max-w-sm rounded overflow-hidden shadow-lg mb-3 transform transition-transform hover:scale-105">
                    <img src={producto.imagen} className="w-full h-64 object-cover" alt={producto.nombre} /> 
                    <footer>
                    <div className="px-6 py-4">
                        <h3 className="font-bold text-xl mb-2 flex justify-center">{producto.nombre}</h3>
                    </div>
                    <div className="flex gap-3 justify-center">
                        <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white px-2">
                            <p>+</p>
                        </button>
                        <button onClick={handleResta} className="bg-blue-500 hover:bg-blue-700 text-white px-2">
                            <p>-</p>  
                        </button>
                    </div>
                        <div className="flex justify-center">
                            <p> Likes: {count} </p>
                        </div>
                        <div className="flex justify-center gap-5 mb-1 mt-1">
                        <button className="bg-blue-500 agregar-btn hover:bg-blue-700 text-white px-2">
                            <p>Comprar</p>
                        </button>
                        <button className="bg-blue-500 agregar-btn hover:bg-blue-700 text-white px-2">
                            <Link to={`/productos/${producto.id}`}><p>Detalles</p></Link>
                        </button>
                    </div>
                    </footer>
                </div>
            )   
        })}
    </div>
    )
}

export default ProfileCard;
