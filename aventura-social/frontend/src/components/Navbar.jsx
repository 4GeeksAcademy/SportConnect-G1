import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.5)", // 50% transparencia
        paddingTop: "0.2rem",
        paddingBottom: "0.2rem",
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

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto gap-4">
            <Link className="nav-link" to="/Escalada">
              Escalada
            </Link>
            <Link className="nav-link" to="/Running">
              Running
            </Link>
            <Link className="nav-link" to="/Ciclismo">
              Ciclismo
            </Link>
            <Link className="nav-link" to="/Fitness">
              Fitness
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
