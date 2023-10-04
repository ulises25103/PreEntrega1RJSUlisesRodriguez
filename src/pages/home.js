import ItemListContainer from '../components/itemlistcontainer';
import Productos from "../components/productos";

function Home(){
    return(
        <div>
            <ItemListContainer greeting={"¡Bienvienido a mi Tienda Online!"}/>
            <Productos/>
        </div>
    )
}


export default Home


