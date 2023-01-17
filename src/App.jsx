import ItemListContainer from "./Components/ItemListContainer/itemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"; 
import { BrowserRouter,Routes, Route,} from "react-router-dom";
import Formulario from "./Components/Form/Form";
import Err404 from "./Components/Err404/Err404";
import Home from "./Components/Home/Home";
import Catalogo from "./Components/Catalogo/Catalogo";
import Footer from "./Components/footer/Footer";
import CartContextProvider from "./context/CartContext";
import Cart from "./Components/Cart/cart";


function App() {
  return (
    <>
    <CartContextProvider>
      <BrowserRouter>  

        <NavBar />

        <Routes>

          <Route path='/home' element={<Home/>}/>

          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          
          <Route path="/cart" element={<Cart/>}/>

          <Route path='/Catalogo' element={<Catalogo/>}></Route>

          <Route path='/itemDetail/:id' element={<ItemDetailContainer/> }/>

          <Route path='/Contactanos' element={<Formulario/>}/>
          
          <Route path="*" element={<Home />} />
          
          <Route path="Ns" element={<Err404 />} />
        
        </Routes>

        
        <Footer />
      </BrowserRouter>
      </CartContextProvider>

    </>
  );
}

export default App;
