<<<<<<< HEAD
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

=======
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

>>>>>>> 8fa7d2437bb9041f3c34fff5bb6c6193a7d4889f
export default Navbar;