import {  useParams } from "react-router-dom";

function Detalles(){

    const {productoId} = useParams();

    console.log(productoId)
    
    return(
        <div className="flex justify-center">
            <h1 className="text-2xl font-bold">Test {productoId}</h1>
        </div>
    )
}

export default Detalles;    