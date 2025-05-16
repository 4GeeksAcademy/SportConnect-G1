import React from "react";
import Navbar from "../components/Navbar";

const Profile = () => {
    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#f4f4f4" }}>
            <Navbar />

            <div className="d-flex" style={{ height: "calc(100vh - 80px)" }}>
                {/* Columna izquierda - Datos del perfil */}
                <div className="d-flex flex-column justify-content-center align-items-center col-12 col-md-6 p-5">
                    <div className="text-center" style={{ maxWidth: "400px" }}>
                        <img
                            src="https://via.placeholder.com/120"
                            alt="Avatar"
                            className="rounded-circle mb-3"
                        />
                        <h2 style={{ color: "#2f7d5c" }}>Nombre de Usuario</h2>
                        <p className="text-muted">usuario@email.com</p>

                        <h5 className="mt-4">Deportes favoritos</h5>
                        <ul className="list-inline">
                            <li className="list-inline-item badge bg-success me-2">Fútbol</li>
                            <li className="list-inline-item badge bg-success me-2">Ciclismo</li>
                            <li className="list-inline-item badge bg-success">Running</li>
                        </ul>

                        <button className="btn btn-outline-success mt-4">Editar Perfil</button>
                    </div>
                </div>

                {/* Columna derecha - Imagen */}
                <div className="col-12 col-md-6 d-none d-md-block p-0">
                    <img
                        src="/Escalada.png"
                        alt="Deportistas"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Profile;
