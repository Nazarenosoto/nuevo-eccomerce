import "./App.css";
import ItemListContainer from "./Components/ItemListContainer/itemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"; 
import { BrowserRouter,Routes, Route,} from "react-router-dom";
import { CartWidget } from "./Components/CartWidget/CartWidget";
import Formulario from "./Components/Form/Form";
import Err404 from "./Components/Err404/Err404";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/classic/:categoryId' element={<ItemListContainer presentation="Classic Category" />}/>
          <Route path='/basic/:categoryId' element={<ItemListContainer presentation="Basic Category" />}/>
          <Route path='/aesthetic/:categoryId' element={<ItemListContainer presentation="Aesthetic Category" />}/>
          <Route path='/CartWidget' element={<CartWidget />}/>
          <Route path='/Detail/:detalleId' element={<ItemDetailContainer/> }/>
          <Route path='/Contactanos' element={<Formulario/>}/>
          <Route path="*" element={<Err404 />} />
          <Route path="Ns" element={<Err404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
