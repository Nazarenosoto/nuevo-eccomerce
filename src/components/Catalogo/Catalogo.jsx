import React from "react";
import { Link } from "react-router-dom";
import './catalogo.css'

const Catalogo = () => {

    return(
        <>
        <div className="containerCatalogo">
            <div>
                <div className="containerCate basic">
                    <a><Link to={'/category/Basic'}>BASIC</Link></a>
                </div>
                <div className="containerCate classic">
                    <a><Link to={'/category/Classic'}>CLASSIC</Link></a>
                </div>
                <div className="containerCate aesthetic">
                    <a><Link to={'/category/Aesthetic'}>AESTHETIC</Link></a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Catalogo;