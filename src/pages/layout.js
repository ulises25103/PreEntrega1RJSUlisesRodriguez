import NavBar from "../components/navbar"
import { Outlet } from "react-router-dom"
import Cart from "../components/cart"

function Layout(){
    return(
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    )
}


export default Layout