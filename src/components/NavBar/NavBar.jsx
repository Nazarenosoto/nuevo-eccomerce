import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import logo from "./logo.jpg";



function NavBar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg">
    <Link to={"/"}>
        <img src={logo} alt="logo" className="logo" />
      </Link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item active">
        <Link to='/home' className={({ isActive }) => (isActive ? "violet" : "white")}>Home </Link>
        </li>
        <li class="nav-item">
        <Link to='/black/id' className={({ isActive }) => (isActive ? "violet" : "white")}>Classic</Link> 
        </li>
        <li class="nav-item">
        <Link to='/cian/id' className={({ isActive }) => (isActive ? "violet" : "white")}>Basic</Link>  
        </li>
        <li class="nav-item">
        <Link to='/white/id' className={({ isActive }) => (isActive ? "violet" : "white")}>Aesthetic</Link>  
        </li>
        <li class="nav-item">
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