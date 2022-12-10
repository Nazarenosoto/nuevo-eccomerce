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
        <Link to='/home' className={({ isActive }) => (isActive ? "violet" : "white")}>Home </Link>
        </li>
        <li className="nav-item">
        <Link to='/classic/id' className={({ isActive }) => (isActive ? "violet" : "white")}>Classic</Link> 
        </li>
        <li className="nav-item">
        <Link to='/basic/id' className={({ isActive }) => (isActive ? "violet" : "white")}>Basic</Link>  
        </li>
        <li className="nav-item">
        <Link to='/aesthetic/id' className={({ isActive }) => (isActive ? "violet" : "white")}>Aesthetic</Link>  
        </li>
        <li className="nav-item">
        <Link to='/Contactanos' className={({ isActive }) => (isActive ? "violet" : "white")}>Contact us</Link>  
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