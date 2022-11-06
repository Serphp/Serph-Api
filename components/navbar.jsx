import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar navbar-dak bg-dark">
            <div className="container">
            <Link className="btn btn-outline-primary" to="/"> Inicio </Link>
            <Link className="btn btn-outline-primary" to="/blog"> blog </Link>
            <Link className="btn btn-outline-primary" to="/Contacto"> Contacto </Link>
            </div>
        </div>
    )
}

export default Navbar;