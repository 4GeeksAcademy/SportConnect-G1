import { Link } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        paddingTop: "0.2rem",
        paddingBottom: "0.2rem",
        position: "relative",
      }}
    >
      <div className="container-fluid d-flex align-items-center">
        {/* Icono persona a la izquierda */}
        <Link to="/perfil" className="nav-link-persona me-3">
          <BsPersonFill size={28} />
        </Link>

        {/* Menú */}
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

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav d-flex flex-row gap-4">
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

        {/* Logo a la derecha */}
        <Link className="navbar-brand ms-auto" to="/">
          <img
            src="/logo_sin_fondo.png"
            alt="SportConnect"
            height="50"
            className="d-inline-block align-top"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
