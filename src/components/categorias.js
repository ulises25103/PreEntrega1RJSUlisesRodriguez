import { Link } from "react-router-dom";



function Categorias(){

    return (
        <nav className="flex text-2xl font-bold">
            <Link className="cursor-pointer transform transition-transform hover:scale-105" to="/">Home</Link>
        </nav>
    )
}

export default Categorias;