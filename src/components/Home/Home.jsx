import React from "react";
import { Link } from "react-router-dom";
import Catalogo from "../Catalogo/Catalogo";
import './home.css';

function Home() {
  return (
    <div className="catalogoHome">
      <Link to="/Catalogo" element={<Catalogo />}>See catalog</Link>
    </div>
  );
}

export default Home;
