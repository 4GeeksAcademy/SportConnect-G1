import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav
            className="navbar navbar-expand-lg"
            style={{
                backgroundColor: "rgba(0,0,0,0.6)",
                paddingTop: "0.2 rem",
                paddingBottom: "0.2 rem"
            }}
        >
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img
                        src="/logo_sin_fondo.png"
                        alt="SportConnect"
                        height="50"
                        className="me-2 d-inline-block align-top object-fit w-100"
                    />
                    
                </Link>

                <div className="d-flex gap-4 ms-auto">
                    <Link className="nav-link text-white" to="/Escalada">Escalada</Link>
                    <Link className="nav-link text-white" to="/Running">Running</Link>
                    <Link className="nav-link text-white" to="/Ciclismo">Ciclismo</Link>
                    <Link className="nav-link text-white" to="/Fitness">Fitness</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
