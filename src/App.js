import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.css'
import './App.css';
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Footer from './components/Footer';
import SobreNos from './components/SobreNos';
import ItemDetail from './components/ItemDetail';
import CartContextProvier from './context/cartContext';
import CartView from './components/CartView';
import FormVenta from './components/FormVenta';
import Contacto from './components/Contacto';

function App() {
  return (
    <>
      <CartContextProvier>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={
              <>
                <ItemListContainer />
                <SobreNos />
              </>
            }
            />
            <Route path="/categoria/:cat" element={<ItemListContainer />}/>
            <Route path="/categoria/:cat" element={<ItemDetail />}/>
            <Route path="/producto/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<CartView />} />
            <Route path="/carrito/checkout" element={<FormVenta />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        </CartContextProvier>
    </>

  );
}

export default App;
