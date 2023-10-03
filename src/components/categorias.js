import { Link } from "react-router-dom";



function Categorias(){

    return (
        <nav className="flex gap-5 brand text-2xl font-bold">
            <Link className="cursor-pointer transform transition-transform hover:scale-105" to="/">Home</Link>
            <Link className="cursor-pointer transform transition-transform hover:scale-105" to="/mouses">Mouse</Link>
            <Link className="cursor-pointer transform transition-transform hover:scale-105" to="/teclado">Teclados</Link>
        </nav>
    )
}

export default Categorias;