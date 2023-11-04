import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../components/useCart";
import { DataContext } from "../context/DataContext";



function Detalles() {
    const [ itemList ] = useContext(DataContext);

    const { productoId } = useParams();

    const item = itemList.find((item) => item.id === productoId);
    
    const {addToCart,removeFromCart, cart, checkProductInCart} = useCart()

    if (!item) {
        return <p className="text-2xl font-semibold">No se encontró el producto</p>;
    }

    const isProductInCart = checkProductInCart(item)
        return (
            <div className="container mx-auto mt-4 flex justify-center">
                <div className="container mx-auto py-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                            <div key={item.id} className="flex">
                                <div className="w-1/2">
                                    <img
                                        src={item.imagen}
                                        alt="Producto Ejemplo"
                                        className="w-full rounded-md"
                                    />
                                </div>
                                <div className="w-1/2 pl-6">
                                    <h1 className="text-2xl font-semibold">{item.nombre}</h1>
                                    <p className="text-gray-600 text-lg">${item.precio}</p>
                                    <p className="text-gray-700 my-4">{item.descripcion}</p>
                                    <div className="flex space-x-4">
                                    <button style={{backgroundColor : isProductInCart ? 'red' : '#09f'} }  className="hover:bg-blue-700 bg-blue-500 hover-bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700" onClick={() => {
                        isProductInCart 
                        ? removeFromCart(item) 
                        : addToCart(item)
                        }}>
                            {
                                isProductInCart
                                ? <p>Eliminar del carrito -</p>
                                : <p>Añadir al carrito + </p>
                            }
                        </button>
                                        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-gray active:bg-gray-500">
                                            Favoritos
                                        </button>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold">Reseñas</h2>
                        {item.reseñas.map((reseña) => (
                            <div key={reseña.id} className="mt-4">
                                <p>
                                    <strong>{reseña.nombre_usuario}:</strong> {reseña.comentario}
                                </p>
                                <p>Calificación: {reseña.calificacion}</p>
                            </div>
                        ))}
                    </div>
                </div>
        </div>
        );
}

export default Detalles;