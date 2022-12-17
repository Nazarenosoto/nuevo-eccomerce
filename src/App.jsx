import "./App.css";
import ItemListContainer from "./Components/ItemListContainer/itemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"; 
import { BrowserRouter,Routes, Route,} from "react-router-dom";
import { CartWidget } from "./Components/CartWidget/CartWidget";
import Formulario from "./Components/Form/Form";
import Err404 from "./Components/Err404/Err404";
import Home from "./Components/Home/Home";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <>
      <BrowserRouter>
      <CartContextProvider>

        <NavBar />
        <Routes>

          <Route path='/home' element={<Home/>}/>

          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          
          <Route path='/CartWidget' element={<CartWidget />}/>
          
          <Route path='/detail/:id' element={<ItemDetailContainer/> }/>
          
          <Route path='/Contactanos' element={<Formulario/>}/>
          
          <Route path="*" element={<Err404 />} />
          
          <Route path="Ns" element={<Err404 />} />
        
        </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
