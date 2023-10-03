import React, { useState, useEffect } from 'react';


function ProfileCard ( {titulo, img}){
    
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

<div className="max-w-sm rounded overflow-hidden shadow-lg mb-3 transform transition-transform hover:scale-105">
    <img src={img} className=" h-48" alt="" /> 
    <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2 flex justify-center">{titulo}</h3>
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
        <div className="flex justify-center">
        <button className="bg-blue-500 agregar-btn hover:bg-blue-700 text-white px-2">
            <p>Comprar</p>
        </button>
        </div>
</div>
    )

}

export default ProfileCard;
