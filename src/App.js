import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import Layout from './pages/layout';
import Home from "./pages/home";
import Error from "./pages/error";
import Cart from "./components/cart";
import Detalles from "./pages/detalles";
import Mouses from "./components/mouses";
import Teclados from "./components/teclados";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
    <DataProvider>
        <Router>
          <Routes>
              <Route exact path="/" element={<Layout/>}>
                <Route exact index element={<Home/>} />
                <Route exact path="productos/:productoId" element={<Detalles/>} />
                <Route exact path="mouses" element={<Mouses  />} />
                <Route exact path="teclados" element={<Teclados  />} />
              </Route>
              <Route path="*" element={<Error/>} />
          </Routes>
        </Router>
    </DataProvider>
    </CartProvider>
  );
}


export default App;
