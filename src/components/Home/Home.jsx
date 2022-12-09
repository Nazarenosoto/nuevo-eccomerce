import React from "react";
import { Link } from "react-router-dom";
import Err404 from "../Err404/Err404";
import './home.css';

function Home() {
  return (
    <div className="catalogoHome">
      <Link to="*" element={<Err404 />}><a>Ver catalogo</a></Link>
    </div>
  );
}

export default Home;
