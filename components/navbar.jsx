import { Link , NavLink } from "react-router-dom";

const Navbar = () => {
    return (
<> 
    <div className="navbar navbar-dak">
        <div className="container-fluid">
        <NavLink className="nav-link" to="/"> Inicio </NavLink>
        <span className="logo"> {"/"}Serphp </span>
        <NavLink className="nav-link" to="/blog"> blog </NavLink>
        </div>
    </div>
</>
    )
}

export default Navbar;