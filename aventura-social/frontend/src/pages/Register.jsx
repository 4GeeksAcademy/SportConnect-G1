import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { registerUser } from "../services/api"; // 👈 Nuevo

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser(formData);
            setError(null);
            navigate("/profile");
        } catch (err) {
            setError("Error al registrar usuario");
            console.error(err);
        }
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                backgroundImage: "url('/Running.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
            }}
        >
            <Navbar />
            <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "calc(100vh - 80px)" }}
            >
                <div
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        padding: "40px",
                        borderRadius: "10px",
                        maxWidth: "400px",
                        width: "100%",
                    }}
                >
                    <h2 className="text-center mb-4" style={{ color: "#2f7d5c" }}>
                        Crear cuenta
                    </h2>
                    {error && (
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Correo electrónico</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-success w-100">
                            Registrarse
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
