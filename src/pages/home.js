import Mouses from './mouses';
import Teclados from "./teclados"
import ItemListContainer from '../components/itemlistcontainer';


function Home(){
    return(
        <div>
            <ItemListContainer greeting={"¡Bienvienido a mi Tienda Online!"}/>
            <Mouses/>
            <Teclados/>
        </div>
    )
}


export default Home


