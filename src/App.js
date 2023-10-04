import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Layout from './components/layout';
import Home from "./pages/home";
import Error from "./pages/error";
import Cart from "./pages/cart";
import Detalles from "./components/detalles";
import Productos from "./components/productos";

function App() {


  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Layout/>}>
            <Route exact index element={<Home/>} />
            <Route exact path="productos" element={<Productos />} />
            <Route exact path="productos/:productoId" element={<Detalles  />} />
            <Route exact path="cart" element={<Cart  />} />
          </Route>
          <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
