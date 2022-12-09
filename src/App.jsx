import "./App.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
/* import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"; */
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
          <Route path='/black/:categoryId' element={<ItemListContainer presentation="Black Category" />}/>
          <Route path='/cian/:categoryId' element={<ItemListContainer presentation="Cian Category" />}/>
          <Route path='/white/:categoryId' element={<ItemListContainer presentation="White Category" />}/>
          <Route path='/CartWidget' element={<CartWidget />}/>
          <Route path='/Detail/:detalleId' element={{/* <ItemDetailContainer/> */}}/>
          <Route path='/Contactanos' element={<Formulario/>}/>
          <Route path="*" element={<Err404 />} />
          <Route path="*" element={<Err404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
