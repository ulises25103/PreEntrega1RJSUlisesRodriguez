import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Layout from './components/layout';
import Home from "./pages/home";
import Error from "./pages/error";
import Mouses from './pages/mouses';
import Teclados from "./pages/teclados"
import Cart from "./pages/cart";

function App() {


  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Layout/>}>
            <Route exact index element={<Home/>} />
            <Route exact path="/mouses" element={<Mouses />} />
            <Route exact path="/teclado" element={<Teclados  />} />
            <Route exact path="/cart" element={<Cart  />} />
          </Route>
          <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
