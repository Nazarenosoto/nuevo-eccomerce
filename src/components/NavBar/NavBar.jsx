import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import logo from "./logo.jpg";



function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
    <Link to={"/"}>
        <img src={logo} alt="logo" className="logo" />
      </Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item active">
        <Link to='/'>Home </Link>
        </li>
        <li className="nav-item">
        <Link to='/category/Classic'>Classic</Link> 
        </li>
        <li className="nav-item">
        <Link to='/category/Basic'>Basic</Link>  
        </li>
        <li className="nav-item">
        <Link to='/category/Aesthetic'>Aesthetic</Link>  
        </li>
        <li className="nav-item">
        <Link to='/Contactanos'>Contact us</Link>  
        </li>
        <li>
        <Link to='/CartWidget'><button><CartWidget/></button></Link>
        </li>
      </ul>
    </div>
  </nav>

    </>
  )
}

export default NavBar;