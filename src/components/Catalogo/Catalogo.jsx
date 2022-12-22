import React from "react";
import { Link } from "react-router-dom";
import './catalogo.css'

const Catalogo = () => {

    return(
        <>
        <div className="containerCatalogo">
            <div>
                <div>
                    <a><Link to={'/category/Classic'}>Classic</Link></a>
                </div>
                <div>
                    <a><Link to={'/category/Basic'}>Basic</Link></a>
                </div>
                <div>
                    <a><Link to={'/category/Aesthetic'}>Aesthetic</Link></a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Catalogo;