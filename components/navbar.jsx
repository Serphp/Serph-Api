
import { Link , NavLink } from "react-router-dom";

const Navbar = () => {
    return (
<> 
    <div className="breadcrumb navbar navbar-dak">
        <div className="container-fluid">
        <NavLink className="breadcrumb-item btn btn-outline-light" to="/"> Inicio </NavLink>
        <span className="logo"> {"/"}Serphp </span>
        <NavLink className="breadcrumb-item btn btn-outline-light" to="/blog"> blog </NavLink>
        </div>
    </div>
</>
    )
}

export default Navbar;